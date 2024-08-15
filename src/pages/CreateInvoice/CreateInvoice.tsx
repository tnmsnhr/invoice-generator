import { ThunkDispatch } from "redux-thunk"
import { connect } from "react-redux"
import React, { useMemo, useState } from "react"
import { AnyAction } from "redux"
import { useNavigate } from "react-router-dom"

import Text from "UIComponents/Text"
import styles from "./createInvoice.module.css"
import { TextColor, TextType } from "UIComponents/Text/Text"
import Address from "UIComponents/Address"
import ProductList from "components/ProductList"
import Button from "UIComponents/Button"
import debounce from "utils/debounce"
import { RootState } from "store/reducers/rootReducer"
import { Customer, Invoice } from "types/types"
import { saveInvoice, saveInvoiceToDraft, updateNewInvoice } from "store/actions/invoiceListActions"
import Calendar from "UIComponents/Calendar"
import Icon from "UIComponents/Icon"
import { IconName } from "UIComponents/Icon/iconType"
import Modal from "UIComponents/Modal"
import { formatDateToDDMMYYYY } from "utils/date"
import Spinner from "UIComponents/Spinner"
import InvoicePreview from "components/InvoicePreview"
import { useBlockNavigation } from "hooks/useBlockNavigation"
import ToastManager from "UIComponents/Toast/ToastManager"
import { useToast } from "contexts/ToastContext"

const billingFromAddress: Customer = {
    address: "#3/4 Fifth Block, Koramangala, Bangalore",
    email: "tanmoy.invoice@gmail.com",
    name: "Invoicefy Inc",
    phoneNumber: "+22-2234-999-0011"
}

interface CreateInvoiceProps {
    selectedInvoice?: Invoice | null,
    selectedCustomer?: Customer | null,
    onUpdateInvoice: (invoice: Invoice) => void,
    onSaveToDraft: (invoice: Invoice) => void,
    onSaveInvoice: <T>(invoice: Invoice) => Promise<T>
}

type DateFlag = "invoiceDate" | "paymentDueDate"

const CreateInvoice: React.FC<CreateInvoiceProps> = ({ selectedInvoice, onUpdateInvoice, onSaveInvoice, onSaveToDraft }) => {

    const [selectedDateType, setSelectedDateType] = useState<DateFlag | null>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [showPreview, setShowPreview] = useState<boolean>(false)
    const { addToast } = useToast();



    const navigate = useNavigate();


    const updateInvoice = (invoice: Invoice) => {
        onUpdateInvoice(invoice)
    }

    const saveInvoice = () => {
        addToast("success", "Demo")
        return
        setIsLoading(true)
        onSaveInvoice(selectedInvoice as Invoice)
            .then(() => {
                navigate("/")
            })
            .catch(err => {
                console.log(err)
            }).finally(() => {
                setIsLoading(false)
            })
    }

    const dateUpdateHandler = (value: string) => {
        const updatedInvoice = { ...selectedInvoice }
        switch (selectedDateType) {
            case "invoiceDate":
                updatedInvoice.invoiceDate = value;
                break;
            case "paymentDueDate":
                updatedInvoice.paymentDueDate = value;

        }
        onUpdateInvoice(updatedInvoice as Invoice)
        setSelectedDateType(null)
    }

    const saveToDraft = () => {
        onSaveToDraft(selectedInvoice as Invoice)
    }

    const showPreviewHandler = () => {
        setShowPreview(true)
    }

    const updateHandler = debounce(updateInvoice, 300);

    return (
        <div className={styles.createInvoice}>
            {isLoading && <div className="spinner">
                <Spinner />
            </div>}
            <section className={styles.createInvoiceHeader}>
                <Text type={TextType.Title1}>New Invoice</Text>
                <div>
                    <Button variant="outline" style={{ marginRight: "1rem" }} onClick={showPreviewHandler}>Preview</Button>
                    <Button variant="default" style={{ marginRight: "1rem" }} onClick={saveToDraft}>Save as draft</Button>
                    <Button variant="primary" style={{ marginRight: "1rem" }} onClick={saveInvoice}>Save and Continue</Button>
                </div>
            </section>
            <section className={styles.createInvoiceSection}>
                <div className={styles.createInvoiceSectionHeader}>
                    <Text type={TextType.Title2}>Invoice</Text>
                    <Text type={TextType.Button1}>#152</Text>
                </div>
                <div className={styles.createInvoiceForm}>
                    <div className={styles.billingSection}>
                        <div>
                            <Text type={TextType.Body1} color={TextColor.Secondary}>BILLING FROM</Text>
                            <Address style={{ marginTop: "0.5rem" }} data={billingFromAddress} />
                        </div>
                        <div className={styles.verticalSeparator} />
                        <div>
                            <Text type={TextType.Body1} color={TextColor.Secondary} style={{ textAlign: "right" }}>BILLING TO</Text>
                            <Address style={{ marginTop: "0.5rem", textAlign: "right" }} data={selectedInvoice?.billingTo} />
                        </div>
                    </div>
                    <div className={styles.dateSection}>
                        <div className={styles.dateSectionItem}>
                            <Text type={TextType.Body1} color={TextColor.Secondary}>Invoice Date</Text>
                            <Button
                                onClick={() => {
                                    setSelectedDateType("invoiceDate")
                                }}
                                variant="default-outline"
                                className={styles.dateButton}>
                                {selectedInvoice?.invoiceDate ? formatDateToDDMMYYYY(+selectedInvoice?.invoiceDate) : "Select Date"}
                                <Icon name={IconName.Calendar} /></Button>
                        </div>
                        <div className={styles.dateSectionItem}>
                            <Text type={TextType.Body1} color={TextColor.Secondary}>Payment Due</Text>
                            <Button variant="default-outline" className={styles.dateButton} onClick={() => {
                                setSelectedDateType("paymentDueDate")
                            }}>
                                {selectedInvoice?.paymentDueDate ? formatDateToDDMMYYYY(+selectedInvoice?.paymentDueDate) : "Select Date"}
                                <Icon name={IconName.Calendar} />
                            </Button>
                        </div>
                    </div>
                    <div className={styles.itemDetails}>
                        <div className={styles.itemDetailsHeader}>
                            <Text type={TextType.Title3}>Item Details</Text>
                        </div>
                        <ProductList invoice={selectedInvoice as Invoice} updateSelectedInvoice={updateHandler} />
                    </div>
                </div>
                <div className={styles.subtotalSection}>
                    <div style={{ display: "flex", width: "15%", justifyContent: "space-between" }}>
                        <Text type={TextType.Body1}>Subtotal:</Text>
                        <Text type={TextType.SubtitleBold} style={{ alignSelf: "flex-end" }}>${selectedInvoice?.total}</Text>
                    </div>
                </div>
            </section>
            <Modal isOpen={selectedDateType != null} onClose={() => { setSelectedDateType(null) }}>
                <Text type={TextType.Title2} style={{ margin: "2rem" }}>
                    {selectedDateType == "invoiceDate" ? "Select invoice date" : "Select payment due date"}
                </Text>
                <Calendar onChangeDate={dateUpdateHandler} />
            </Modal>
            <Modal isOpen={showPreview} onClose={() => { setShowPreview(false) }}>
                <InvoicePreview invoice={selectedInvoice} />
            </Modal>
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        selectedInvoice: state?.invoices?.selectedInvoice,
        selectedCustomer: state?.customers?.selectedCustomer
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, void, AnyAction>) => {
    return {
        onUpdateInvoice: (payload: Invoice) => dispatch(updateNewInvoice(payload)),
        onSaveInvoice: (payload: Invoice): Promise<Invoice> => dispatch(saveInvoice(payload)),
        onSaveToDraft: (payload: Invoice) => dispatch(saveInvoiceToDraft(payload))
    }
}
// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(CreateInvoice)