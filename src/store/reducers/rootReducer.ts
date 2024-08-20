import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage'
import { createTransform, persistReducer } from 'redux-persist'
import { InvoiceReducer, invoiceReducer } from "./invoice";
import { CustomerReducer, customerReducer } from "./customer";
import { draftReducer } from "./draft";

const selectedInvoiceTransform = createTransform(
    (inboundState: InvoiceReducer) => {
        return { selectedInvoice: inboundState.selectedInvoice };
    },
    (outboundState: any, key) => {
        return outboundState;
    },
    { whitelist: ['invoices'] }
);

const selectedCustomerTransform = createTransform(
    (inboundState: CustomerReducer) => {
        return { selectedCustomer: inboundState.selectedCustomer };
    },
    (outboundState: any, key) => {
        return outboundState;
    },
    { whitelist: ['customers'] }
);

const persisitConfig = {
    key: "root",
    storage,
    whitelist: ['invoices', 'drafts', "customers"],
    transforms: [selectedInvoiceTransform, selectedCustomerTransform]
}

const rootReducer = combineReducers({
    invoices: invoiceReducer,
    customers: customerReducer,
    drafts: draftReducer
})

// @ts-ignore
export const persistedReducer = persistReducer(persisitConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>