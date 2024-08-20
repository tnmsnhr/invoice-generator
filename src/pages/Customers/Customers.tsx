import Address from 'UIComponents/Address'
import Spinner from 'UIComponents/Spinner'
import Text from 'UIComponents/Text'
import styles from "./customers.module.css"
import { TextType } from 'UIComponents/Text/Text'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { fetchCustomers } from 'store/actions/customerAction'
import { RootState } from 'store/reducers/rootReducer'
import { Customer } from 'types/types'

interface CustomerProps {
    customers?: Customer[],
    isLoading?: boolean,
    onFetchCustomers: () => void
}

const Customers: React.FC<CustomerProps> = ({ customers, isLoading, onFetchCustomers }) => {

    useEffect(() => {
        if (onFetchCustomers) {
            onFetchCustomers()
        }
    }, [])

    return (
        <div className={styles.customerPage}>
            <div className={styles.customer}>
                <Text type={TextType.Title1}>Customers</Text>
                {isLoading ? <Spinner /> : <div className={styles.customerContent}>
                    {customers?.map(customer => (
                        <div className={styles.customerItem}>
                            <Address data={customer} />
                        </div>
                    ))}
                </div>}
            </div>
        </div>
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
    }
}
// @ts-ignore

export default connect(mapStateToProps, mapDispatchToProps)(Customers)