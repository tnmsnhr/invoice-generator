import {
    FETCH_INVOICES_FAILURE,
    FETCH_INVOICES_REQUEST,
    FETCH_INVOICES_SUCCESS,
    CREATE_NEW_INVOICE,
    UPDATE_NEW_INVOICE,
    DELETE_INVOICE_REQUEST,
    DELETE_INVOICE_SUCCESS,
    DELETE_INVOICE_FAILURE
} from "store/types/actionTypes";
import { Invoice, Product } from "types/types";


export interface InvoiceReducer {
    loading: boolean;
    invoices: Invoice[];
    error: string | null;
    selectedInvoice: Invoice | null
}

const initialState: InvoiceReducer = {
    loading: false,
    invoices: [],
    error: null,
    selectedInvoice: null
}

export const invoiceReducer = (state = initialState, action: any): InvoiceReducer => {
    switch (action.type) {
        case FETCH_INVOICES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_INVOICES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                invoices: action.payload
            }
        case FETCH_INVOICES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                invoices: []
            }
        case CREATE_NEW_INVOICE:
            return {
                ...state,
                selectedInvoice: action.payload
            }

        case UPDATE_NEW_INVOICE:
            const invoice: Invoice = action.payload
            if (invoice) {
                const total = invoice?.itemsDetails?.reduce((acc: number, item: Product) => {
                    acc = acc + (item?.price * item?.quantity - item?.discount)
                    return acc
                }, 0)
                invoice.total = +total?.toFixed(2)
            }
            return {
                ...state,
                selectedInvoice: invoice
            }
        case DELETE_INVOICE_SUCCESS:
            const id = action.payload
            const updatedState = { ...state }
            const updatedInvoices = updatedState.invoices.filter(inv => inv.id != id)
            return {
                ...state,
                loading: false,
                invoices: updatedInvoices
            }
        default:
            return state
    }
}