import React from 'react';
import { Invoice } from 'types/types';

interface InvoiceProps {
    invoice: Invoice | undefined | null;
}

const InvoiceProfessional: React.FC<InvoiceProps> = ({ invoice }) => {
    return (
        <div style={{ maxWidth: '800px', margin: 'auto', padding: '30px', backgroundColor: '#f8f8f8', borderRadius: '10px', fontFamily: 'Verdana, sans-serif' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <h1 style={{ fontSize: '24px', color: '#333' }}>Invoice</h1>
                <div>
                    <strong>ID:</strong> {invoice?.id} <br />
                    <strong>Date:</strong> {invoice?.invoiceDate}
                </div>
            </header>

            <section style={{ marginBottom: '20px' }}>
                <h2 style={{ fontSize: '18px', color: '#555' }}>Billing Information</h2>
                <p>{invoice?.billingTo.name}</p>
                <p>{invoice?.billingTo.address}</p>
            </section>

            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                <thead>
                    <tr>
                        <th style={{ borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>Product</th>
                        <th style={{ borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>Quantity</th>
                        <th style={{ borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>Price</th>
                        <th style={{ borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {invoice?.itemsDetails.map((item, index) => (
                        <tr key={index}>
                            <td style={{ padding: '10px 0' }}>{item.name}</td>
                            <td style={{ padding: '10px 0', textAlign: 'center' }}>{item.quantity}</td>
                            <td style={{ padding: '10px 0', textAlign: 'right' }}>{item.price}</td>
                            <td style={{ padding: '10px 0', textAlign: 'right' }}>{item.quantity * item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <footer style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', borderTop: '2px solid #ccc', paddingTop: '20px' }}>
                <div style={{ textAlign: 'right' }}>
                    <p><strong>CGST:</strong> {invoice?.CGST}%</p>
                    <p><strong>SGST:</strong> {invoice?.SGST}%</p>
                    <h2 style={{ fontSize: '24px', color: '#333' }}>Total: {invoice?.total}</h2>
                </div>
            </footer>
        </div>
    );
};

export default InvoiceProfessional;
