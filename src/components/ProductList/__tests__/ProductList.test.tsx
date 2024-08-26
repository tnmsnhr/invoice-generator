import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import ProductList from '../ProductList';
import { MemoryRouter } from 'react-router-dom';
import store from '__mocks__/mockStore';
import { dummyInvoice3 } from '__mocks__/invoice';

test('tests initial productlist with no product item', () => {

    const { container } = render(
        <Provider store={store}>
            <MemoryRouter>
                <ProductList invoice={dummyInvoice3} updateSelectedInvoice={jest.fn()} />
            </MemoryRouter>
        </Provider>
    );

    const rows = container.querySelectorAll('div.row');
    expect(rows.length).toBe(1);
});


test('tests after "add an item" click', () => {

    const { container } = render(
        <Provider store={store}>
            <MemoryRouter>
                <ProductList invoice={dummyInvoice3} updateSelectedInvoice={jest.fn()} />
            </MemoryRouter>
        </Provider>
    );

    let rows = container.querySelectorAll('div.row');
    expect(rows.length).toBe(1);

    const addButton = screen.getByTestId('add-item');
    fireEvent.click(addButton);

    rows = container.querySelectorAll('div.row');
    expect(rows.length).toBe(2);
});

test('tests after deleting product item', async () => {

    const { container } = render(
        <Provider store={store}>
            <MemoryRouter>
                <ProductList invoice={dummyInvoice3} updateSelectedInvoice={jest.fn()} />
            </MemoryRouter>
        </Provider>
    );

    let rows = container.querySelectorAll('div.row');
    expect(rows.length).toBe(2);

    const deleteButton = screen.getAllByTestId('delete-item') as HTMLElement[];
    fireEvent.click(deleteButton[0]);

    await waitFor(() => {
        expect(container.querySelectorAll('div.row').length).toBe(1);
    });
});
