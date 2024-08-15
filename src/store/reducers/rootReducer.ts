import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage'
import { createTransform, persistReducer } from 'redux-persist'
import { invoiceReducer } from "./invoice";
import { customerReducer } from "./customer";
import { draftReducer } from "./draft";

const selectedInvoiceTransform = createTransform(
    (inboundState: any) => {
        return { selectedInvoice: inboundState.selectedInvoice };
    },
    (outboundState: any, key) => {
        return outboundState;
    },
    { whitelist: ['invoices'] }
);

const persisitConfig = {
    key: "root",
    storage,
    whitelist: ['invoices', 'drafts'],
    transforms: [selectedInvoiceTransform]
}

const rootReducer = combineReducers({
    invoices: invoiceReducer,
    customers: customerReducer,
    drafts: draftReducer
})

// @ts-ignore
export const persistedReducer = persistReducer(persisitConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>