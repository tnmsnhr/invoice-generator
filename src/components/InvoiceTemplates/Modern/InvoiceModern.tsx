import React from 'react';
import styles from "./modern.module.css"
import { Invoice } from 'types/types';

interface InvoiceProps {
    invoice: Invoice | undefined | null;
}

const InvoiceModern: React.FC<InvoiceProps> = ({ invoice }) => {
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
                        <th className={styles.thItem}>Product</th>
                        <th className={styles.thItem}>Quantity</th>
                        <th className={styles.thItem}>Price</th>
                        <th className={styles.thItem}>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {invoice?.itemsDetails.map((item, index) => (
                        <tr key={index}>
                            <td className={styles.tdItem}>{item.name}</td>
                            <td className={styles.tdItem}>{item.quantity}</td>
                            <td className={styles.tdItem}>${item.price}</td>
                            <td className={styles.tdItem}>${item.quantity * item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <footer style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', borderTop: '2px solid #ccc', paddingTop: '20px' }}>
                <div style={{ textAlign: 'right' }}>
                    <p><strong>CGST:</strong> {invoice?.CGST}%</p>
                    <p><strong>SGST:</strong> {invoice?.SGST}%</p>
                    <h2 style={{ fontSize: '24px', color: '#333', marginTop: "1rem" }}>Total: ${invoice?.total}</h2>
                </div>
            </footer>
        </div>
    );
};

export default InvoiceModern;
