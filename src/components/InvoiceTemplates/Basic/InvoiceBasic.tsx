import React from 'react';
import * as  styles from "./basic.module.css"
import { Invoice } from 'types/types';
import { formatDateToDDMMYYYY } from 'utils/date';


interface InvoiceProps {
    invoice: Invoice | null | undefined;
}

const InvoiceBasic: React.FC<InvoiceProps> = ({ invoice }) => {
    return (
        <div style={{ margin: 'auto', padding: '20px', border: '1px solid #eee', boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ textAlign: 'center' }}>Invoice</h2>
            <div style={{ marginBottom: '20px' }}>
                <strong>Invoice ID:</strong> {invoice?.id} <br />
                <strong>Invoice Date:</strong> {invoice?.invoiceDate && formatDateToDDMMYYYY(+invoice?.invoiceDate)} <br />
                <strong>Payment Due:</strong> {invoice?.paymentDueDate && formatDateToDDMMYYYY(+invoice?.paymentDueDate)}
            </div>

            <div style={{ marginBottom: '40px' }}>
                <strong>Billing To:</strong> {invoice?.billingTo.name} <br />
                <strong>Address:</strong> {invoice?.billingTo.address}
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th className={styles.thItem}>Item</th>
                        <th className={styles.thItem}>Quantity</th>
                        <th className={styles.thItem}>Price</th>
                        <th className={styles.thItem}>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {invoice?.itemsDetails.map((item, index) => (
                        <tr key={index}>
                            <td className={styles.tdItem}>{item?.name}</td>
                            <td className={styles.tdItem}>{item?.quantity}</td>
                            <td className={styles.tdItem}>{item?.price}</td>
                            <td className={styles.tdItem}>{item?.quantity * item?.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div style={{ marginTop: '20px', textAlign: 'right' }}>
                <strong>CGST:</strong> {invoice?.CGST}% <br />
                <strong>SGST:</strong> {invoice?.SGST}% <br />
                <strong>Total:</strong> {invoice?.total}
            </div>
        </div>
    );
};

export default InvoiceBasic;
