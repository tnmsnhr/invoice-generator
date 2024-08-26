import { Invoice } from "types/types";
import { dummyCustomer1, dummyCustomer2 } from "./customer";
import { dummyProduct1, dummyProduct2, dummyProduct3 } from "./product";

export const dummyInvoice1: Invoice = {
    id: 'inv-001',
    CGST: 9,
    SGST: 9,
    billingTo: dummyCustomer1,
    invoiceDate: '2024-08-25',
    itemsDetails: [dummyProduct1, dummyProduct2],
    paymentDueDate: '2024-09-25',
    total: 159,
    status: 'draft',
    invoiceNumber: 'INV-001-2024',
};

export const dummyInvoice2: Invoice = {
    id: 'inv-002',
    CGST: 9,
    SGST: 9,
    billingTo: dummyCustomer2,
    invoiceDate: '2024-08-26',
    itemsDetails: [dummyProduct2, dummyProduct3],
    paymentDueDate: '2024-09-26',
    total: 218,
    status: 'paid',
    invoiceNumber: 'INV-002-2024',
};

export const dummyInvoice3: Invoice = {
    id: 'inv-003',
    CGST: 9,
    SGST: 9,
    billingTo: dummyCustomer1,
    invoiceDate: '2024-08-27',
    itemsDetails: [],
    paymentDueDate: '2024-09-27',
    total: 100,
    status: 'overdue',
    invoiceNumber: 'INV-003-2024',
};
