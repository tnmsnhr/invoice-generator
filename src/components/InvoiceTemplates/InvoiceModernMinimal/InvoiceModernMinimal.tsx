import { Invoice } from "types/types";
import * as  styles from "./invoiceModernMinimal.module.css"
import { formatDateToCustomFormat } from "utils/date";

interface InvoiceProps {
    invoice: Invoice | undefined | null;
}

const InvoiceModernMinimal: React.FC<InvoiceProps> = ({ invoice }) => {
    return (
        <div className={styles.invoice}>
            <header className={styles.header}>
                <h1 className={styles.title}>INVOICE</h1>
                <div className={styles.companyInfo}>
                    <h2>REAL ESTATE DEVELOPER</h2>
                </div>
            </header>

            <section className={styles.clientInfo}>
                <p><strong>To:</strong> {invoice?.billingTo?.name}</p>
                <p>{invoice?.billingTo?.address}</p>
            </section>

            <section className={styles.invoiceDetails}>
                <p><strong>Date:</strong> {invoice?.invoiceDate && formatDateToCustomFormat(+invoice?.invoiceDate)}</p>
                <p><strong>Due Date:</strong> {invoice?.paymentDueDate && formatDateToCustomFormat(+invoice?.paymentDueDate)}</p>
            </section>

            <table className={styles.invoiceTable}>
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>Item</th>
                        <th>QTY</th>
                        <th>PRICE</th>
                        <th>DISCOUNT</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    {invoice?.itemsDetails?.map((item, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item?.name}</td>
                            <td>{item?.quantity}</td>
                            <td>${item?.price}</td>
                            <td>${item?.discount}</td>
                            <td>${item?.price * item?.quantity - item?.discount}</td>
                        </tr>
                    ))}

                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={5}>Sub Total</td>
                        <td>${invoice?.total}</td>
                    </tr>
                    <tr>
                        <td colSpan={5}>Discount</td>
                        <td>$500</td>
                    </tr>

                    <tr>
                        <td colSpan={5} className={styles.grandTotalLabel}>GRAND TOTAL</td>
                        <td className={styles.grandTotal}>${invoice?.total}</td>
                    </tr>
                </tfoot>
            </table>

            <section className={styles.terms}>
                <h3>Term and Conditions :</h3>
                <p>Please send payment within 30 days of receiving this invoice. There will be a 10% interest charge per month on late invoices.</p>
            </section>

            <section className={styles.paymentInfo}>
                <h3>Payment Method</h3>
                <p><strong>Bank Name:</strong> Wardiere Inc.</p>
                <p><strong>Account Number:</strong> 123-456-7890</p>
            </section>

            <footer className={styles.footer}>
                <p><strong>Administrator</strong></p>
                <p><strong>Phone:</strong> 123-456-7890</p>
                <p><strong>Mail:</strong> hello@reallygreatsite.com</p>
                <p><strong>Address:</strong> 123 Anywhere St., Any City</p>
            </footer>
        </div>
    );
};

export default InvoiceModernMinimal;
