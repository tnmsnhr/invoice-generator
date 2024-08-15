import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"

import Widget from "UIComponents/Widget"
import Text from "UIComponents/Text"
import styles from "./invoiceDetails.module.css"
import { TextType } from "UIComponents/Text/Text"
import InvoiceList from "components/InvoiceList"
import Button from "UIComponents/Button"
import { RootState } from "store/reducers/rootReducer"
import { createNewInvoice, fetchInvoices } from "store/actions/invoiceListActions"
import { Customer, Invoice } from "types/types"
import Spinner from "UIComponents/Spinner"
import Modal from "UIComponents/Modal"
import AddCustomer from "components/AddCustomer"
import Input from "UIComponents/Input"

interface InvoiceListDetailsProps {
    onCreateInvoice: (payload: Invoice) => void,
    invoices: Invoice[],
    drafts: Invoice[],
    isLoading?: boolean,
    onFetchInvoices: () => void
}

const InvoiceListDetails: React.FC<InvoiceListDetailsProps> = ({ onCreateInvoice, invoices, drafts, onFetchInvoices, isLoading }) => {

    const [showModal, setShowModal] = useState<boolean>(false)
    const [allInvoices, setAllInvoices] = useState<Invoice[]>([])
    const [filter, setFilter] = useState<string>("all")

    const handleCreateNewInvoice = (customer: Customer) => {
        const newInvoice: Invoice = {
            billingTo: customer,
            CGST: 18,
            SGST: 18,
            itemsDetails: [],
            total: 0,
            id: Date.now().toString(),
            invoiceDate: "",
            paymentDueDate: "",
            status: "draft",
        }
        onCreateInvoice(newInvoice)
    }

    useEffect(() => {
        onFetchInvoices()
    }, [])

    useEffect(() => {
        let updatedInvoices: Invoice[] = []
        if (invoices && invoices.length > 0) {
            updatedInvoices = [...invoices]
        }

        if (drafts && drafts.length > 0) {
            updatedInvoices = [...updatedInvoices, ...drafts]
        }
        setAllInvoices([...updatedInvoices])
    }, [invoices, drafts])

    return (
        <>
            <Modal isOpen={showModal} onClose={() => { setShowModal(false) }}>
                <AddCustomer afterCustomerAdd={handleCreateNewInvoice} />
            </Modal>
            <div className={styles.invoiceDetails}>
                <div className={styles.invoiceDetailsTop}>
                    <Text type={TextType.Title1}>Invoices</Text>
                    <Button variant="primary" onClick={() => setShowModal(true)}>Create an invoice</Button>
                </div>
                {isLoading ? <Spinner /> : <>
                    <div className={styles.widgets}>
                        <Widget />
                        <Widget />
                        <Widget />
                    </div>
                    <div className={styles.invoiceListDtails}>
                        <div className={styles.invoiceListControl}>
                            <div className={styles.search}>
                                <Input />
                            </div>
                            <div>
                                <div className={styles.invoiceTabs}>
                                    <button className={`${styles.invoiceTab} ${filter == "all" ? styles.activeTab : ""}`}
                                        onClick={() => {
                                            setFilter("all")
                                        }}
                                    >
                                        <Text type={TextType.Button2}>All Invoices</Text>
                                    </button>
                                    <button className={`${styles.invoiceTab} ${filter == "paid" ? styles.activeTab : ""}`}
                                        onClick={() => {
                                            setFilter("paid")
                                        }}
                                    >
                                        <Text type={TextType.Button2}>Paid</Text>
                                    </button>
                                    <button className={`${styles.invoiceTab} ${filter == "draft" ? styles.activeTab : ""}`}
                                        onClick={() => {
                                            setFilter("draft")
                                        }}
                                    >
                                        <Text type={TextType.Button2}>Draft</Text>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <InvoiceList invoices={allInvoices} />
                    </div>
                </>}
            </div >
        </>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        invoices: state?.invoices.invoices,
        drafts: state?.drafts.drafts,
        isLoading: state?.invoices.loading,
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, void, AnyAction>) => {
    return {
        onCreateInvoice: (payload: Invoice) => dispatch(createNewInvoice(payload)),
        onFetchInvoices: () => dispatch(fetchInvoices())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(InvoiceListDetails)