import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import InvoiceList from '../InvoiceList';
import ErrorBoundary from 'HOC/ErrorBoundary';
import { Customer, Invoice } from 'types/types';
import { dummyInvoice1, dummyInvoice2, dummyInvoice3 } from '__mocks__/invoice';

const mockStore = configureStore([]);

test('displays "No data found" when there are no invoices', () => {
    const store = mockStore({
        invoices: { invoices: [], loading: false },
        drafts: { drafts: [] },
    });

    render(
        <Provider store={store}>
            <ErrorBoundary>
                <InvoiceList invoices={[]} />
            </ErrorBoundary>
        </Provider>
    );

    const noDataElement = screen.getByTestId('no-data');
    expect(noDataElement).toBeInTheDocument();
    expect(noDataElement).toHaveTextContent('No data found');

});


test('displays number of rows when there are invoices', () => {

    const dummyCustomer: Customer = {
        id: 'cust-001',
        name: 'John Doe',
        address: '123 Main St, Springfield, USA',
        email: 'john.doe@example.com',
        phoneNumber: '555-1234',
    };

    const invoice: Invoice = {
        id: 'inv-001',
        CGST: 9,
        SGST: 9,
        billingTo: dummyCustomer,
        invoiceDate: '2024-08-25',
        itemsDetails: [],
        paymentDueDate: '2024-09-25',
        total: 159,
        status: 'draft',
        invoiceNumber: 'INV-001-2024'
    }
    const store = mockStore({
        invoices: {
            invoices: [
                invoice
            ], loading: false
        },
        drafts: { drafts: [] },
    });

    render(
        <Provider store={store}>
            <ErrorBoundary>
                <InvoiceList invoices={[invoice]} />
            </ErrorBoundary>
        </Provider>
    );

    const tableRows = screen.getAllByRole('row');
    expect(tableRows.length).toBe(2);

    const invNumber = screen.getByTestId('invoiceNumber');
    expect(invNumber).toBeInTheDocument();
    expect(invNumber).toHaveTextContent('#INV-001-2024');

    const invName = screen.getByTestId('name');
    expect(invName).toBeInTheDocument();
    expect(invName).toHaveTextContent('John Doe');

});
