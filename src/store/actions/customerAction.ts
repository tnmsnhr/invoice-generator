import { Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { addCustomer, deleteCustomer, getCustomers } from 'services/customerSerives';
import { RootState } from 'store/reducers/rootReducer';
import {
    CUSTOMER_SELECTED,
    DELETE_CUSTOMER_FAILURE,
    DELETE_CUSTOMER_REQUEST,
    DELETE_CUSTOMER_SUCCESS,
    FETCH_CUSTOMERS_FAILURE,
    FETCH_CUSTOMERS_REQUEST,
    FETCH_CUSTOMERS_SUCCESS,
    SAVE_CUSTOMER_FAILURE,
    SAVE_CUSTOMER_REQUEST,
    SAVE_CUSTOMER_SUCCESS,
    UPDATE_SELECTED_CUSTOMER
} from "store/types/actionTypes";

import { Customer } from 'types/types';

const fetchCustomersRequest = () => ({
    type: FETCH_CUSTOMERS_REQUEST
})

const fetchCustomersSuccess = (payload: Customer[]) => ({
    type: FETCH_CUSTOMERS_SUCCESS,
    payload
})

const fetchCustomersFailure = (payload: String) => ({
    type: FETCH_CUSTOMERS_FAILURE,
    payload
})

const saveCustomerRequest = () => ({
    type: SAVE_CUSTOMER_REQUEST
})

const saveCustomerSuccess = (payload: Customer) => ({
    type: SAVE_CUSTOMER_SUCCESS,
    payload
})

const saveCustomerFailure = (payload: String) => ({
    type: SAVE_CUSTOMER_FAILURE,
    payload
})

export const updateSelectedCustomer = (payload: Customer) => ({
    type: UPDATE_SELECTED_CUSTOMER,
    payload
})

export const selectCustomer = (payload: Customer | null) => ({
    type: CUSTOMER_SELECTED,
    payload
})

export const fetchCustomers = (): ThunkAction<Promise<Customer>, RootState, unknown, Action<string>> => {
    // @ts-ignore
    return async (dispatch: Dispatch) => {
        dispatch(fetchCustomersRequest())
        try {
            const customers = await getCustomers("customers")
            dispatch(fetchCustomersSuccess(customers))
            return customers
        } catch (error: any) {
            dispatch(fetchCustomersFailure(error?.message))
            return Promise.reject(error)
        }
    }
}

export const saveCustomer = (data: Customer): ThunkAction<Promise<Customer>, RootState, unknown, Action<string>> => {
    // @ts-ignore
    return async (dispatch: Dispatch) => {
        dispatch(saveCustomerRequest())
        try {
            const savedCustomer = await addCustomer(data)
            dispatch(saveCustomerSuccess(data))
            return savedCustomer
        } catch (error: any) {
            dispatch(saveCustomerFailure(error?.message))
            return Promise.reject(error)
        }
    }
}

const deleteCustomerRequest = () => ({
    type: DELETE_CUSTOMER_REQUEST
})

const deleteCustomerSuccess = (payload: string) => ({
    type: DELETE_CUSTOMER_SUCCESS,
    payload
})

const deleteCustomerFailure = (payload: String) => ({
    type: DELETE_CUSTOMER_FAILURE,
    payload
})

export const deleteCustomerAction = (id: string): ThunkAction<Promise<Customer>, RootState, unknown, Action<string>> => {
    // @ts-ignore
    return async (dispatch: Dispatch) => {
        dispatch(deleteCustomerRequest())
        try {
            const deletedCustomer = await deleteCustomer(id)
            dispatch(deleteCustomerSuccess(id))
            return deletedCustomer
        } catch (error: any) {
            dispatch(deleteCustomerFailure(error?.message))
            return Promise.reject(error)
        }
    }
}