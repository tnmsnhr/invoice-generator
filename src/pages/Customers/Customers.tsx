import Address from 'UIComponents/Address'
import Spinner from 'UIComponents/Spinner'
import Text from 'UIComponents/Text'
import * as  styles from "./customers.module.css"
import { TextType } from 'UIComponents/Text/Text'
import React, { Suspense, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { deleteCustomerAction, fetchCustomers } from 'store/actions/customerAction'
import { RootState } from 'store/reducers/rootReducer'
import { Customer, Invoice } from 'types/types'
import Modal from 'UIComponents/Modal'
import Button from 'UIComponents/Button'
import { IoMdAdd } from 'react-icons/io'
import generateInvoiceNumber from 'utils/invGenerator'
import { createNewInvoice } from 'store/actions/invoiceListActions'

const AddCustomerLazy = React.lazy(() => import("components/AddCustomer"))

interface CustomerProps {
    customers?: Customer[],
    isLoading?: boolean,
    onFetchCustomers: () => void,
    onDeleteCustomer: (id: string) => void,
    onCreateInvoice: (payload: Invoice) => void,
}

const Customers: React.FC<CustomerProps> = ({ customers, isLoading, onFetchCustomers, onCreateInvoice, onDeleteCustomer }) => {

    const [showModal, setShowModal] = useState<boolean>(false)

    useEffect(() => {
        if (onFetchCustomers) {
            onFetchCustomers()
        }
    }, [])

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
            invoiceNumber: generateInvoiceNumber()
        }
        onCreateInvoice(newInvoice)
    }

    const deleteCustomerHandler = (id: string) => {
        onDeleteCustomer(id)
    }

    return (
        <>
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
                {isLoading && <div className={styles.spinner}>
                    <Spinner />
                </div>}
                <div className={styles.cutomerHeader}>
                    <Text type={TextType.Title1}>Customers</Text>
                    <Button
                        className="align-center"
                        variant="primary"
                        onClick={() => setShowModal(true)}
                    >Add customer <IoMdAdd size={24} style={{
                        marginLeft: "0.5rem"
                    }} /></Button>
                </div>
                <div className={styles.customerLists}>
                    <div className={styles.customerContent}>
                        {customers?.map(customer => (
                            <div className={styles.customerItem}>
                                <Address data={customer} showDeleteOption={true} deleteCustomer={deleteCustomerHandler} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Modal isOpen={showModal} onClose={() => { setShowModal(false) }}>
                <Modal.Header>
                    <Text type={TextType.Title3}>Select a Customer</Text>
                </Modal.Header>
                <Modal.Body>
                    <Suspense fallback={<Spinner />}>
                        <AddCustomerLazy afterCustomerAdd={handleCreateNewInvoice} />
                    </Suspense>
                </Modal.Body>
            </Modal>
        </>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        customers: state?.customers?.customers,
        isLoading: state?.customers?.loading
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, void, AnyAction>) => {
    return {
        onFetchCustomers: () => dispatch(fetchCustomers()),
        onCreateInvoice: (payload: Invoice) => dispatch(createNewInvoice(payload)),
        onDeleteCustomer: (id: string) => dispatch(deleteCustomerAction(id)),
    }
}
// @ts-ignore

export default connect(mapStateToProps, mapDispatchToProps)(Customers)