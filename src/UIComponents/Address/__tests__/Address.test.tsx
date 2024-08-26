import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Address from '../Address';
import ErrorBoundary from 'HOC/ErrorBoundary';
import { dummyCustomer1 } from '__mocks__/customer';

const mockStore = configureStore([]);

test('test customer address details', () => {
    const store = mockStore({
        invoices: { invoices: [], loading: false },
        drafts: { drafts: [] },
    });

    render(
        <Provider store={store}>
            <ErrorBoundary>
                <Address data={dummyCustomer1} />
            </ErrorBoundary>
        </Provider>
    );

    const customerName = screen.getByText('John Doe');
    expect(customerName).toBeInTheDocument();

    const cusPhone = screen.getByText('555-1234');
    expect(cusPhone).toBeInTheDocument();

    const cusEmail = screen.getByText('john.doe@example.com');
    expect(cusEmail).toBeInTheDocument();
});

test('test customer delete button', () => {
    const store = mockStore({
        invoices: { invoices: [], loading: false },
        drafts: { drafts: [] },
    });

    render(
        <Provider store={store}>
            <ErrorBoundary>
                <Address data={dummyCustomer1} showDeleteOption />
            </ErrorBoundary>
        </Provider>
    );

    const deleteText = screen.getByText('Delete');
    expect(deleteText).toBeInTheDocument();
});
