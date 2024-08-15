import styles from "./invoiceModernMinimal.module.css"

const InvoiceModernMinimal = () => {
    return (
        <div className={styles.invoice}>
            <header className={styles.header}>
                <h1 className={styles.title}>INVOICE</h1>
                <div className={styles.companyInfo}>
                    <h2>REAL ESTATE DEVELOPER</h2>
                </div>
            </header>

            <section className={styles.clientInfo}>
                <p><strong>To:</strong> KETUT SUSILO</p>
                <p>123 Anywhere St., Any City, ST 12345</p>
            </section>

            <section className={styles.invoiceDetails}>
                <p><strong>Date:</strong> 25 June 2022</p>
                <p><strong>Invoice no:</strong> 12345</p>
            </section>

            <table className={styles.invoiceTable}>
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>DESCRIPTION</th>
                        <th>QTY</th>
                        <th>PRICE</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Consultation</td>
                        <td>1</td>
                        <td>$300</td>
                        <td>$300</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Project Draft</td>
                        <td>2</td>
                        <td>$2,400</td>
                        <td>$4,800</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Implementation</td>
                        <td>3</td>
                        <td>$2,500</td>
                        <td>$7,500</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Additional Supplies</td>
                        <td>4</td>
                        <td>$750</td>
                        <td>$3,000</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Monthly meeting</td>
                        <td>15</td>
                        <td>$2,000</td>
                        <td>$30,000</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4}>Sub Total</td>
                        <td>$7,950</td>
                    </tr>
                    <tr>
                        <td colSpan={4}>Tax 10%</td>
                        <td>$795</td>
                    </tr>
                    <tr>
                        <td colSpan={4}>Discount</td>
                        <td>$500</td>
                    </tr>
                    <tr>
                        <td colSpan={4} className={styles.grandTotalLabel}>GRAND TOTAL</td>
                        <td className={styles.grandTotal}>$8,245</td>
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
