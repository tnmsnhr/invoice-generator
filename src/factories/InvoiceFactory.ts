import { Customer, Invoice, Product } from 'types/types';
import generateInvoiceNumber from 'utils/invGenerator';

export class InvoiceFactory {
    static create(
        billingTo: Customer,
        total?: number,
        itemsDetails?: Product[],
        invoiceNumber?: string,
        CGST?: number,
        SGST?: number,
        id?: string,
        invoiceDate?: string,
        paymentDueDate?: string,
        status?: "draft" | "paid" | "overdue" | string
    ): Invoice {
        return {
            id: id || Date.now().toString(),
            CGST: CGST !== undefined ? CGST : 18,
            SGST: SGST !== undefined ? SGST : 18,
            billingTo: billingTo,
            invoiceDate: invoiceDate || new Date().toISOString(),
            itemsDetails: itemsDetails || [],
            paymentDueDate: paymentDueDate || "",
            total: total || 0,
            status: status || "draft",
            invoiceNumber: invoiceNumber || generateInvoiceNumber(),
        };
    }
}
