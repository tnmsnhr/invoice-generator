import { CUSTOMER_SELECTED, FETCH_CUSTOMERS_FAILURE, FETCH_CUSTOMERS_REQUEST, FETCH_CUSTOMERS_SUCCESS, SAVE_CUSTOMER_FAILURE, SAVE_CUSTOMER_REQUEST, SAVE_CUSTOMER_SUCCESS, UPDATE_SELECTED_CUSTOMER } from "store/types/actionTypes";
import { Customer, Invoice, Product } from "types/types";


export interface CustomerReducer {
    loading: boolean;
    customers: Customer[];
    error: string | null;
    selectedCustomer: Customer | null
}

const initialState: CustomerReducer = {
    loading: false,
    customers: [],
    error: null,
    selectedCustomer: null
}

export const customerReducer = (state = initialState, action: any): CustomerReducer => {
    switch (action.type) {
        case FETCH_CUSTOMERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_CUSTOMERS_FAILURE:
            return {
                ...state,
                loading: false
            }
        case FETCH_CUSTOMERS_SUCCESS:
            return {
                ...state,
                loading: false,
                customers: action.payload
            }
        case SAVE_CUSTOMER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SAVE_CUSTOMER_SUCCESS:
            return {
                ...state,
                selectedCustomer: action.payload,
                error: null,
                loading: false
            }
        case SAVE_CUSTOMER_FAILURE:
            return {
                ...state,
                selectedCustomer: null,
                error: action.payload,
                loading: false
            }
        case CUSTOMER_SELECTED:
            return {
                ...state,
                selectedCustomer: action.payload
            }
        case UPDATE_SELECTED_CUSTOMER:
            return {
                ...state,
                selectedCustomer: action.payload
            }
        default:
            return state
    }
}