import { Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { addDocument, getDocuments } from 'services/firestoreService';
import { RootState } from 'store/reducers/rootReducer';
import {
    FETCH_INVOICES_FAILURE,
    FETCH_INVOICES_REQUEST,
    FETCH_INVOICES_SUCCESS,
    CREATE_NEW_INVOICE,
    UPDATE_NEW_INVOICE,
    SAVE_INVOICE_REQUEST,
    SAVE_INVOICE_SUCCESS,
    SAVE_CUSTOMER_FAILURE,
    SAVE_TO_DRAFT,
    DELETE_FROM_DRAFT
} from "store/types/actionTypes";
import { Invoice } from 'types/types';

const fetchInvoiceListRequest = () => ({
    type: FETCH_INVOICES_REQUEST
})

const fetchInvoiceListSuccess = (payload: Invoice[]) => ({
    type: FETCH_INVOICES_SUCCESS,
    payload
})

const fetchInvoiceListFailure = (payload: String) => ({
    type: FETCH_INVOICES_FAILURE,
    payload
})

export const createNewInvoice = (payload: Invoice) => ({
    type: CREATE_NEW_INVOICE,
    payload
})

export const updateNewInvoice = (payload: Invoice) => ({
    type: UPDATE_NEW_INVOICE,
    payload
})

export const fetchInvoices = (): ThunkAction<void, RootState, unknown, Action<string>> => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchInvoiceListRequest())
        try {
            const invoices = await getDocuments("invoices")
            dispatch(fetchInvoiceListSuccess(invoices))
        } catch (error: any) {
            dispatch(fetchInvoiceListFailure(error?.message))
        }
    }
}

const saveInvoiceRequest = () => ({
    type: SAVE_INVOICE_REQUEST
})

const saveInvoiceSuccess = () => ({
    type: SAVE_INVOICE_SUCCESS,
})

const saveInvoiceFailure = (payload: String) => ({
    type: SAVE_CUSTOMER_FAILURE,
    payload
})

export const saveInvoice = (invoice: Invoice): ThunkAction<Promise<Invoice>, RootState, unknown, Action<string>> => {
    // @ts-ignore
    return async (dispatch: Dispatch) => {
        dispatch(saveInvoiceRequest())
        try {
            const updatedInvoice = { ...invoice }
            updatedInvoice.status = "created"
            const invoiceResult = await addDocument("invoices", updatedInvoice)
            dispatch(saveInvoiceSuccess())
            return invoiceResult
        } catch (error: any) {
            dispatch(saveInvoiceFailure(error?.message))
            return Promise.reject(error)
        }
    }
}

export const saveInvoiceToDraft = (payload: Invoice) => ({
    type: SAVE_TO_DRAFT,
    payload
})

export const deleteInvoiceFromDraft = (payload: string) => ({
    type: DELETE_FROM_DRAFT,
    payload
})