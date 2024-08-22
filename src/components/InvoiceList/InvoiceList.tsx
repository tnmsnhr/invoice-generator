import React, { useEffect, useState } from "react"
import * as  styles from "./invoiceList.module.css"
import InvoiceListItem from './InvoiceListItem'
import { Invoice } from "types/types";
import Text, { TextColor, TextType } from "UIComponents/Text/Text";
import { connect, useDispatch } from "react-redux";
import Modal from "UIComponents/Modal";
import InvoicePreview from "components/InvoicePreview";
import { deleteInvoice, deleteInvoiceFromDraft, fetchInvoices, updateInvoice } from "store/actions/invoiceListActions";
import { RootState } from "store/reducers/rootReducer";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import Spinner from "UIComponents/Spinner";
import Button from "UIComponents/Button";

interface InvoiceListProps {
    invoices?: Invoice[];
    onDeleteInvoice?: <T>(id: string) => Promise<T>;
    onUpdateInvoice?: <T>(invoice: Invoice) => Promise<T>;
    onFetchInvoices: () => void,
}

const InvoiceList: React.FC<InvoiceListProps> = ({ invoices, onDeleteInvoice, onUpdateInvoice, onFetchInvoices }) => {
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
        updatedInvoiceData.status = type
        if (onUpdateInvoice && updatedInvoiceData) {
            setIsLoading(true)
            await onUpdateInvoice(updatedInvoiceData as Invoice)
            setInvoiceData(updatedInvoiceData as Invoice)
            onFetchInvoices()
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
                <div>
                    <InvoicePreview invoice={invoiceData} />
                    <div className={styles.invoicePreviewFooter}>
                        <Text type={TextType.SubtitleBold}>Change Status</Text>
                        <div className={styles.buttonControl}>
                            <Button variant="error"
                                onClick={() => {
                                    invoiceUpdateHandler("overdue")
                                }}
                            > Overdue</Button>
                            <Button variant="primary-success"
                                onClick={() => {
                                    invoiceUpdateHandler("paid")
                                }}
                            > Paid</Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, void, AnyAction>) => {
    return {
        onDeleteInvoice: (id: string): Promise<Invoice> => dispatch(deleteInvoice(id)),
        onUpdateInvoice: (invoice: Invoice): Promise<Invoice> => dispatch(updateInvoice(invoice)),
        onFetchInvoices: () => dispatch(fetchInvoices()),
    }
}

// @ts-ignore
export default connect(null, mapDispatchToProps)(InvoiceList)