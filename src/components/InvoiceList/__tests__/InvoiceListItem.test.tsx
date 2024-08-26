import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import InvoiceListItem from '../InvoiceListItem';
import ErrorBoundary from 'HOC/ErrorBoundary';
import { dummyInvoice1 } from '__mocks__/invoice';

const mockStore = configureStore([]);

test('test invoice item', () => {
    const store = mockStore({
        invoices: { invoices: [], loading: false },
        drafts: { drafts: [] },
    });

    render(
        <Provider store={store}>
            <ErrorBoundary>
                <InvoiceListItem invoice={dummyInvoice1} />
            </ErrorBoundary>
        </Provider>
    );

    const invNumber = screen.getByTestId('invoiceNumber');
    expect(invNumber).toBeInTheDocument();
    expect(invNumber).toHaveTextContent('#INV-001-2024');
});
