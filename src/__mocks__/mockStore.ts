import createMockStore from "redux-mock-store";
import { dummyCustomer1 } from "./customer";
import { dummyInvoice1, dummyInvoice2 } from "./invoice";
import { RootState } from 'store/reducers/rootReducer';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore<RootState>();

const store = mockStore({
    customers: {
        customers: [dummyCustomer1],
        error: null,
        loading: false,
        selectedCustomer: dummyCustomer1
    },
    invoices: {
        error: null,
        invoices: [dummyInvoice1],
        loading: false,
        selectedInvoice: dummyInvoice1
    },
    drafts: {
        drafts: [dummyInvoice2]
    }
});

export default store