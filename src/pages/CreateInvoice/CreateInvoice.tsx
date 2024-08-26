import { ThunkDispatch } from "redux-thunk"
import { connect } from "react-redux"
import React, { useState, lazy, Suspense } from "react"
import { AnyAction } from "redux"
import { useNavigate } from "react-router-dom"

import Text from "UIComponents/Text"
import * as  styles from "./createInvoice.module.css"
import { TextColor, TextType } from "UIComponents/Text/Text"
import Address from "UIComponents/Address"
import ProductList from "components/ProductList"
import Button from "UIComponents/Button"
import debounce from "utils/debounce"
import { RootState } from "store/reducers/rootReducer"
import { Customer, Invoice } from "types/types"
import { saveInvoice, saveInvoiceToDraft, updateNewInvoice } from "store/actions/invoiceListActions"
import Icon from "UIComponents/Icon"
import { IconName } from "UIComponents/Icon/iconType"
import Modal from "UIComponents/Modal"
import { formatDateToDDMMYYYY } from "utils/date"
import Spinner from "UIComponents/Spinner"
import { useToast } from "contexts/ToastContext"
import { FaInfoCircle } from "react-icons/fa";

const CalendarLazy = lazy(() => import("UIComponents/Calendar"))
const InvoicePreviewLazy = lazy(() => import("components/InvoicePreview"))



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
    const [shoModal, setShowModal] = useState<boolean>(false)
    const { addToast } = useToast()


    const navigate = useNavigate();


    const updateInvoice = (invoice: Invoice) => {
        onUpdateInvoice(invoice)
    }

    const validate = (e: React.FormEvent<HTMLFormElement>): boolean => {
        const invoiceDate = e.currentTarget.elements.namedItem("invoice-date") as HTMLInputElement
        const paymentDate = e.currentTarget.elements.namedItem("payment-date") as HTMLInputElement

        if (selectedInvoice?.itemsDetails?.length == 0) {
            addToast("error", "Please add one item at least")
            return false
        }

        if (!invoiceDate?.value || !paymentDate?.value) {
            addToast("error", "InvoiceDate or Payment due date is missing")
            return false
        }

        return true
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const submitter = ((e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement).value

        if (!validate(e)) {
            return
        }

        if (submitter == "draft") {
            saveToDraft()
        } else if (submitter == "save") {
            saveInvoice()
        }
    }

    const saveInvoice = () => {
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
        addToast("success", "successfully saved to draft")
        navigate("/")
    }

    const showPreviewHandler = () => {
        setShowPreview(true)
    }

    const goBackHandler = () => {
        setShowModal(true)
    }

    const updateHandler = debounce(updateInvoice, 300);

    return (
        <>
            <form className={styles.createInvoice} onSubmit={(e) => handleSubmit(e)}>
                {isLoading && <div className="spinner">
                    <Spinner />
                </div>}
                <section className={styles.createInvoiceHeader}>
                    <div className={styles.headerLeft}>
                        <Button
                            onClick={goBackHandler}
                            variant="ghost"
                            style={{ marginRight: "1rem", display: "flex" }}
                            type="button">
                            <Icon name={IconName.ChevronLeft} />
                        </Button>
                        <Text type={TextType.Title1}>New Invoice</Text>
                    </div>
                    <div>
                        <Button
                            variant="outline"
                            style={{ marginRight: "1rem" }}
                            onClick={showPreviewHandler}
                            type="button">
                            Preview
                        </Button>
                        <Button
                            variant="default-outline"
                            style={{ marginRight: "1rem" }}
                            name="action"
                            value="draft"
                            type="submit">
                            Save as draft
                        </Button>
                        <Button
                            variant="primary"
                            style={{ marginRight: "1rem" }}
                            onClick={() => { }}
                            type="submit"
                            name="action"
                            value="save"
                        >
                            Save and Continue
                        </Button>
                    </div>
                </section>
                <section className={styles.createInvoiceContent}>
                    <div className={styles.createInvoiceSection}>
                        <div className={styles.createInvoiceSectionHeader}>
                            <Text type={TextType.Title2}>Invoice</Text>
                            <Text type={TextType.Button1}>#{selectedInvoice?.invoiceNumber}</Text>
                        </div>
                        <div className={styles.createInvoiceForm}>
                            <div className={styles.billingSection}>
                                <div style={{ flex: 1 }}>
                                    <Text type={TextType.Body1} color={TextColor.Secondary}>BILLING FROM</Text>
                                    <Address style={{ marginTop: "0.5rem", marginRight: "1rem" }} data={billingFromAddress} />
                                </div>
                                <div className={styles.verticalSeparator} />
                                <div style={{ flex: 1 }}>
                                    <Text type={TextType.Body1} color={TextColor.Secondary} style={{ textAlign: "right" }}>BILLING TO</Text>
                                    <Address style={{ marginTop: "0.5rem", textAlign: "right", marginLeft: "1rem" }} data={selectedInvoice?.billingTo} />
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
                                        type="button"
                                        className={styles.dateButton}>
                                        {selectedInvoice?.invoiceDate ? formatDateToDDMMYYYY(+selectedInvoice?.invoiceDate) : "Select Date"}
                                        <Icon name={IconName.Calendar} />
                                    </Button>
                                    <input type="hidden" name="invoice-date" value={selectedInvoice?.invoiceDate} />
                                </div>
                                <div className={styles.dateSectionItem}>
                                    <Text type={TextType.Body1} color={TextColor.Secondary}>Payment Due</Text>
                                    <Button
                                        variant="default-outline"
                                        className={styles.dateButton}
                                        type="button"
                                        onClick={() => {
                                            setSelectedDateType("paymentDueDate")
                                        }}>
                                        {selectedInvoice?.paymentDueDate ? formatDateToDDMMYYYY(+selectedInvoice?.paymentDueDate) : "Select Date"}
                                        <Icon name={IconName.Calendar} />
                                    </Button>
                                    <input type="hidden" name="payment-date" value={selectedInvoice?.paymentDueDate} />
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
                            <Text type={TextType.Body1}>Subtotal:</Text>
                            <Text
                                className={styles.totalValue}
                                type={TextType.SubtitleBold}
                            >${selectedInvoice?.total}</Text>
                        </div>
                    </div>
                </section>
            </form>

            {/* Modals */}

            <Modal isOpen={selectedDateType != null} onClose={() => { setSelectedDateType(null) }}>
                <Modal.Header>
                    <Text type={TextType.Title2}>
                        {selectedDateType == "invoiceDate" ? "Select invoice date" : "Select payment due date"}
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Suspense fallback={<Spinner />}>
                        <CalendarLazy
                            onChangeDate={dateUpdateHandler}
                        />
                    </Suspense>
                </Modal.Body>
            </Modal>
            <Modal isOpen={showPreview} onClose={() => { setShowPreview(false) }}>
                <Modal.Body>
                    <Suspense fallback={<Spinner />}>
                        <InvoicePreviewLazy invoice={selectedInvoice} />
                    </Suspense>
                </Modal.Body>
            </Modal>
            <Modal isOpen={shoModal} onClose={() => { setShowModal(false) }}>
                <Modal.Body>
                    <div className={styles.goBackModal}>
                        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginBottom: "1rem" }}>
                            <Icon name={IconName.Info} size={24} style={{ color: "red", marginRight: "1rem" }} />
                            <Text type={TextType.Title2}>
                                Confirm
                            </Text>
                        </div>
                        <Text type={TextType.Button2}>
                            Any unsaved changes will be lost.
                            Do you want to save them in drafts?
                        </Text>
                        <div className={styles.modalButtons}>
                            <Button variant="error" style={{ marginRight: "2rem" }} onClick={() => {
                                navigate(-1)
                            }}>Don't Save</Button>
                            <Button variant="primary" onClick={() => {
                                saveToDraft()
                                navigate(-1)
                            }}>Save as draft</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
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