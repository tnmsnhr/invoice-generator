import React, { Suspense, useEffect, useState } from "react"
import * as  styles from "./invoiceList.module.css"
import InvoiceListItem from './InvoiceListItem'
import { Invoice } from "types/types";
import Text, { TextColor, TextType } from "UIComponents/Text/Text";
import { connect, useDispatch } from "react-redux";
import Modal from "UIComponents/Modal";
import { deleteInvoice, deleteInvoiceFromDraft, fetchInvoices, saveInvoice, updateInvoice } from "store/actions/invoiceListActions";
import { RootState } from "store/reducers/rootReducer";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import Spinner from "UIComponents/Spinner";
import Button from "UIComponents/Button";

const InvoicePreviewLazy = React.lazy(() => import("components/InvoicePreview"))

interface InvoiceListProps {
    invoices?: Invoice[];
    onDeleteInvoice?: <T>(id: string) => Promise<T>;
    onUpdateInvoice?: <T>(invoice: Invoice) => Promise<T>;
    onSaveInvoice?: <T>(invoice: Invoice) => Promise<T>;
    onFetchInvoices: () => void,
}

const InvoiceList: React.FC<InvoiceListProps> = ({ invoices, onDeleteInvoice, onUpdateInvoice, onFetchInvoices, onSaveInvoice }) => {
    const [invoiceList, setInvoiceList] = useState<Invoice[] | undefined>([])
    const [showPreview, setShowPreview] = useState<boolean>(false)
    const [invoiceData, setInvoiceData] = useState<Invoice | undefined>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const dispatch = useDispatch()

    useEffect(() => {
        setInvoiceList(invoices)
    }, [invoices])

    const showPreviewHanlder = (invoice: Invoice) => {
        setShowPreview(true)
        setInvoiceData(invoice)
    }

    const handlePreviewClose = () => {
        setShowPreview(false)
        setInvoiceData(undefined)
    }

    const deleteInvoiceHandler = async (id: string, type: string) => {
        if (type?.toLocaleLowerCase() == "draft") {
            dispatch(deleteInvoiceFromDraft(id))
        } else if (onDeleteInvoice) {
            setIsLoading(true)
            try {
                const result = await onDeleteInvoice(id)
                setIsLoading(false)

            } catch (err) {
                setIsLoading(false)
            }
        }
    }

    const invoiceUpdateHandler = async (type: string) => {
        const updatedInvoiceData = { ...invoiceData }
        if (updatedInvoiceData?.status == "draft" && onSaveInvoice) {
            updatedInvoiceData.status = type
            try {
                await onSaveInvoice(updatedInvoiceData as Invoice)
                dispatch(deleteInvoiceFromDraft(updatedInvoiceData.id as string))
            } catch (error) {

            }
        } else {
            if (onUpdateInvoice && updatedInvoiceData) {
                updatedInvoiceData.status = type
                setIsLoading(true)
                await onUpdateInvoice(updatedInvoiceData as Invoice)
                setInvoiceData(updatedInvoiceData as Invoice)
                onFetchInvoices()
            }
        }

    }

    return (
        <div className={styles.invoiceList}>
            {isLoading && <div className={styles.spinner}>
                <Spinner />
            </div>}
            {invoiceList && invoiceList.length > 0 ?
                <table className={styles.invoiceListTable}>
                    <thead>
                        <tr>
                            <td><Text type={TextType.Body1} color={TextColor.Grey}>Status</Text></td>
                            <td><Text type={TextType.Body1} color={TextColor.Grey}>Created at</Text></td>
                            <td><Text type={TextType.Body1} color={TextColor.Grey}>Due at</Text></td>
                            <td><Text type={TextType.Body1} color={TextColor.Grey}>Price</Text></td>
                            <td><Text type={TextType.Body1} color={TextColor.Grey}>Number</Text></td>
                            <td><Text type={TextType.Body1} color={TextColor.Grey}>Customer</Text></td>
                            <td><Text type={TextType.Body1} color={TextColor.Grey}>Total Items</Text></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {invoiceList?.map(el => <React.Fragment key={el.id as string}>
                            <InvoiceListItem invoice={el} handlePreview={showPreviewHanlder} deleteInvoice={deleteInvoiceHandler} />
                        </React.Fragment>)}
                    </tbody>
                </table> : <div className={styles.noData}>
                    <Text type={TextType.Body2} color={TextColor.Info}>No data found</Text>
                </div>
            }

            <Modal isOpen={showPreview} onClose={handlePreviewClose}>
                <Modal.Header>
                    <div className={styles.statusControl}>
                        <Text type={TextType.SubtitleBold}>Mark as: </Text>
                        <div className={styles.buttonControl}>
                            <Button variant="error"
                                onClick={() => {
                                    invoiceUpdateHandler("overdue")
                                }}>
                                Overdue
                            </Button>
                            <Button variant="primary-success"
                                onClick={() => {
                                    invoiceUpdateHandler("paid")
                                }}
                            >
                                Paid
                            </Button>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Suspense fallback={<Spinner />}>
                            <InvoicePreviewLazy invoice={invoiceData} />
                        </Suspense>

                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, void, AnyAction>) => {
    return {
        onDeleteInvoice: (id: string): Promise<Invoice> => dispatch(deleteInvoice(id)),
        onUpdateInvoice: (invoice: Invoice): Promise<Invoice> => dispatch(updateInvoice(invoice)),
        onFetchInvoices: () => dispatch(fetchInvoices()),
        onSaveInvoice: (payload: Invoice): Promise<Invoice> => dispatch(saveInvoice(payload)),
    }
}

// @ts-ignore
export default connect(null, mapDispatchToProps)(InvoiceList)