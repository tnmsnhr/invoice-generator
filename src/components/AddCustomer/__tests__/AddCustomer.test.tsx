import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import AddCustomer from '../AddCustomer';
import { MemoryRouter } from 'react-router-dom';
import store from '__mocks__/mockStore';

test('renders the component with a selected customer', () => {

    render(
        <Provider store={store}>
            <MemoryRouter>
                <AddCustomer />
            </MemoryRouter>
        </Provider>
    );

    expect(screen.getByText("Search for existing customer:")).toBeInTheDocument();
});
