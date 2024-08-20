import React, { useEffect, useRef, useState } from "react"
import styles from "./invoiceList.module.css"
import InvoiceListItem from './InvoiceListItem'
import { Invoice } from "types/types";
import Text, { TextColor, TextType } from "UIComponents/Text/Text";
import { connect, useDispatch } from "react-redux";
import Modal from "UIComponents/Modal";
import InvoicePreview from "components/InvoicePreview";
import { deleteInvoice, deleteInvoiceFromDraft } from "store/actions/invoiceListActions";
import { RootState } from "store/reducers/rootReducer";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import Spinner from "UIComponents/Spinner";

interface InvoiceListProps {
    invoices?: Invoice[];
    onDeleteInvoice?: <T>(id: string) => Promise<T>;
}

const InvoiceList: React.FC<InvoiceListProps> = ({ invoices, onDeleteInvoice }) => {
    const [invoiceList, setInvoiceList] = useState<Invoice[] | undefined>([])
    const [showPreview, setShowPreview] = useState<boolean>(false)
    const [invoiceDate, setInvoiceDate] = useState<Invoice | undefined>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const dispatch = useDispatch()

    useEffect(() => {
        setInvoiceList(invoices)
    }, [invoices])

    const showPreviewHanlder = (invoice: Invoice) => {
        setShowPreview(true)
        setInvoiceDate(invoice)
    }

    const handlePreviewClose = () => {
        setShowPreview(false)
        setInvoiceDate(undefined)
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

    console.log(isLoading)

    return (
        <div className={styles.invoiceList}>
            {isLoading && <div className={styles.spinner}>
                <Spinner />
            </div>}
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
                        <InvoiceListItem className={styles.invoiceListItem} invoice={el} handlePreview={showPreviewHanlder} deleteInvoice={deleteInvoiceHandler} />
                    </React.Fragment>)}
                </tbody>
            </table>

            <Modal isOpen={showPreview} onClose={handlePreviewClose}>
                <InvoicePreview invoice={invoiceDate} />
            </Modal>
        </div>
    )
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, void, AnyAction>) => {
    return {
        onDeleteInvoice: (id: string): Promise<Invoice> => dispatch(deleteInvoice(id))
    }
}

// @ts-ignore
export default connect(null, mapDispatchToProps)(InvoiceList)