export type Customer = {
    address: string;
    email: string;
    name: string;
    phoneNumber: string;
    id?: string
}

export type Product = {
    discount: any;
    id: any;
    name: any;
    quantity: any;
    price: any;
}

export type Invoice = {
    id?: String,
    CGST: number;
    SGST: number;
    billingTo: Customer;
    invoiceDate?: string;
    itemsDetails: Product[];
    paymentDueDate?: string,
    total: number,
    status?: "draft" | "paid" | "overdue" | string,
    invoiceNumber: string
};
