import React, { useEffect, useRef, useState } from "react"
import styles from "./invoiceList.module.css"
import InvoiceListItem from './InvoiceListItem'
import { Invoice } from "types/types";
import Text, { TextColor, TextType } from "UIComponents/Text/Text";
import { connect } from "react-redux";
import Modal from "UIComponents/Modal";
import InvoicePreview from "components/InvoicePreview";
import { CSSTransition } from 'react-transition-group';

interface InvoiceListProps {
    invoices?: Invoice[];
}

const InvoiceList: React.FC<InvoiceListProps> = ({ invoices }) => {
    const [invoiceList, setInvoiceList] = useState<Invoice[] | undefined>([])
    const [showPreview, setShowPreview] = useState<boolean>(false)
    const [invoiceDate, setInvoiceDate] = useState<Invoice | undefined>()
    const nodeRef = useRef(null);

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

    return (
        <div className={styles.invoiceList}>
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
                        <InvoiceListItem className={styles.invoiceListItem} invoice={el} handlePreview={showPreviewHanlder} />
                    </React.Fragment>)}
                </tbody>
            </table>
            <CSSTransition
                in={showPreview}
                nodeRef={nodeRef}
                timeout={1000}
                classNames="alert"
                unmountOnExit
            >
                <Modal isOpen={showPreview} onClose={handlePreviewClose}>
                    <InvoicePreview invoice={invoiceDate} />
                </Modal>
            </CSSTransition>
        </div>
    )
}

export default connect()(InvoiceList)