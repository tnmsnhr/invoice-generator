import Text from "UIComponents/Text"
import * as  styles from "./addCustomer.module.css"
import { TextColor, TextType } from "UIComponents/Text/Text"
import Input from "UIComponents/Input"
import Button from "UIComponents/Button"
import { useState } from "react"
import { Customer } from "types/types"
import debounce from "utils/debounce"
import { connect } from "react-redux"
import { ThunkDispatch } from "redux-thunk"
import { RootState } from "store/reducers/rootReducer"
import { AnyAction } from "redux"
import { saveCustomer, selectCustomer } from "store/actions/customerAction"
import Spinner from "UIComponents/Spinner"
import { useNavigate } from "react-router-dom"
import { findCustomers } from "services/customerSerives"
import Address from "UIComponents/Address"
import { IoMdAdd } from "react-icons/io"

type CustomerKey = keyof Customer;

interface AddCustomerProps {
    selectedCustomer?: Customer | null,
    onSaveCustomer: <T>(customer: Customer) => Promise<T>,
    isLoading?: boolean,
    afterCustomerAdd?: (customer: Customer) => void,
    onSelectCustomer?: (customer: Customer | null) => void
}

const AddCustomer: React.FC<AddCustomerProps> = ({ onSaveCustomer, selectedCustomer, isLoading, afterCustomerAdd, onSelectCustomer }) => {
    const [showForm, setShowForm] = useState<boolean>(false)
    const [customer, setCustomer] = useState<Customer | null>(null)
    const [searchedCustomer, setSearchedCustomer] = useState<Customer[] | null>(null)

    const navigate = useNavigate()

    const updateHandler = (field: CustomerKey, value: string) => {
        const updatedCustomer = { ...customer }
        updatedCustomer[field] = value

        setCustomer(updatedCustomer as Customer)
    }

    const saveCustomerHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            await onSaveCustomer(customer as Customer)
            setCustomer(customer)
            setShowForm(false)
        } catch (err) {

        }
    }

    const searchCustomerHandler = (query: string) => {
        const name = query.trim()
        if (!name) return
        findCustomers(name).then(res => {
            if (res?.length > 0) {
                setSearchedCustomer(res)
            } else {
                setSearchedCustomer(null)
            }
        })
    }

    const selectCustomerHandler = (customer: Customer) => {
        setCustomer(customer)
        setShowForm(false)
        setSearchedCustomer(null)
        if (onSelectCustomer)
            onSelectCustomer(customer as Customer)
    }

    const handleNewCustomer = () => {
        setShowForm(true)
        setCustomer(null)
        setSearchedCustomer(null)
    }

    const nextStepHandler = () => {
        if (afterCustomerAdd) {
            afterCustomerAdd(customer as Customer)
        }
        navigate("/create-invoice")
    }

    const deleteCustomerHandler = () => {
        setShowForm(false)
        setCustomer(null)
        setSearchedCustomer(null)
        if (onSelectCustomer)
            onSelectCustomer(null)
    }

    const searchCustomer = debounce(searchCustomerHandler, 500);

    return (
        <div className={styles.addCustomer} onClick={() => {
            setSearchedCustomer(null)
        }}>
            {isLoading && <div className="spinner">
                <Spinner />
            </div>}
            <div>
                <Text type={TextType.Subtitle} color={TextColor.Secondary}>Search for existing customer:</Text>
                <Input
                    style={{ marginTop: "1rem" }}
                    placeholder="Search Customer"
                    onChange={(e) => {
                        searchCustomer(e?.target?.value)
                    }}
                />
                {searchedCustomer && searchedCustomer?.length > 0 && <div className={styles.customerSuggestions} >
                    {searchedCustomer?.map(c => <div className={styles.customerSuggestionsItem} onClick={(e) => {
                        e.stopPropagation()
                        selectCustomerHandler(c)
                    }}>
                        <Text type={TextType.Body1}>{c?.name}</Text>
                    </div>)}

                </div>}
                <div className={styles.customerDetails}>
                    {!showForm ?
                        Object.keys(customer ?? {}).length > 0 ?
                            <div className={styles.customerPreview}>
                                <Address data={customer as Customer} style={{ textAlign: "left", flex: 1 }} />
                                <Button variant="error" onClick={deleteCustomerHandler}>Deselect</Button>
                            </div> :
                            <Button
                                className="align-center"
                                variant="outline"
                                style={{ margin: "4rem 0" }}
                                onClick={handleNewCustomer}>
                                Add New Customer
                                <IoMdAdd size={24} style={{
                                    marginLeft: "0.5rem"
                                }} />
                            </Button> :
                        <div className={styles.customerForm}>
                            <form onSubmit={(e) => saveCustomerHandler(e)} >
                                <Input
                                    placeholder="Enter customer name"
                                    name="name"
                                    required
                                    onChange={(e) => {
                                        updateHandler(e?.target?.name as CustomerKey, e?.target?.value)
                                    }} />
                                <textarea
                                    className={styles.address}
                                    placeholder="Enter Address"
                                    name="address"
                                    required
                                    onChange={(e) => {
                                        updateHandler(e?.target?.name as CustomerKey, e?.target?.value)
                                    }}
                                ></textarea>
                                <div className={styles.namePhone}>
                                    <Input
                                        placeholder="Enter customer email"
                                        name="email"
                                        required
                                        onChange={(e) => {
                                            updateHandler(e?.target?.name as CustomerKey, e?.target?.value)
                                        }}
                                    />
                                    <Input
                                        placeholder="Enter customer phoine"
                                        name="phoneNumber"
                                        required
                                        onChange={(e) => {
                                            updateHandler(e?.target?.name as CustomerKey, e?.target?.value)
                                        }}
                                    />
                                </div>
                                <div className={styles.formButton}>
                                    <Button variant="outline" type="submit">Save Customer</Button>
                                    <Button variant="error" style={{ marginLeft: "1rem" }} onClick={deleteCustomerHandler}>Delete</Button>
                                </div>
                            </form>
                        </div>
                    }
                </div>
            </div>
            <div className={styles.customerFooter}>
                <Button variant="primary" onClick={nextStepHandler} disabled={!customer}>Create Invoice</Button>
            </div>
        </div >
    )
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, void, AnyAction>) => {
    return {
        onSaveCustomer: (payload: Customer): Promise<Customer> => dispatch(saveCustomer(payload)),
        onSelectCustomer: (payload: Customer) => dispatch(selectCustomer(payload))
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        selectedCustomer: state.customers.selectedCustomer,
        isLoading: state?.customers?.loading
    }
}
// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(AddCustomer)