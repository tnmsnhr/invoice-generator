import { Invoice } from "types/types";
import * as  styles from "./invoiceSummary.module.css"
import { formatDateToDDMMYYYY } from "utils/date";
import Text from "UIComponents/Text";
import { TextColor, TextType } from "UIComponents/Text/Text";
import Badge from "UIComponents/Badge";
import KebabButton from "UIComponents/Button/KebabButton";
import { useEffect, useRef, useState } from "react";

interface InvoiceListItemProps {
    style?: React.CSSProperties;
    className?: string;
    invoice: Invoice;
    handlePreview?: (invoice: Invoice) => void
    deleteInvoice?: (invoiceId: string, type: string) => void
}

const InvoiceListItem: React.FC<InvoiceListItemProps> = ({ className, invoice, handlePreview, deleteInvoice }) => {

    const [showOptions, setShowOptions] = useState<boolean>(false)
    const menuRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setShowOptions(false);
        }
    };

    useEffect(() => {
        if (showOptions) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showOptions]);


    const previewHanlder = () => {
        if (handlePreview) {
            handlePreview(invoice)
        }
    }

    return (
        <>
            <tr className={styles.invoiceSummary} onClick={previewHanlder}>
                <td>
                    {invoice?.status && <Badge type={invoice?.status?.toLocaleLowerCase()} />}
                </td>
                <td>
                    {invoice?.invoiceDate &&
                        <Text type={TextType.Body1} color={TextColor.Primary}>{formatDateToDDMMYYYY(+invoice?.invoiceDate)}</Text>}
                </td>
                <td>
                    {invoice?.paymentDueDate &&
                        <Text type={TextType.Body1} color={TextColor.Primary}>{formatDateToDDMMYYYY(+invoice?.paymentDueDate)}</Text>}
                </td>
                <td><Text type={TextType.Body1} color={TextColor.Primary}>${invoice?.total}</Text></td>
                <td><Text type={TextType.Body1} color={TextColor.Primary} data-testid="invoiceNumber">#{invoice?.invoiceNumber}</Text></td>
                <td><Text type={TextType.Body1} color={TextColor.Primary} data-testid="name">{invoice?.billingTo?.name}</Text></td>
                <td><Text type={TextType.Body1} color={TextColor.Primary}>{invoice?.itemsDetails?.length}</Text></td>
                <td>
                    <KebabButton onClick={(e) => {
                        e.stopPropagation()
                        setShowOptions(true)
                    }} />
                </td>
                {showOptions && <div className={styles.optionContainer} ref={menuRef}>
                    <div
                        onClick={(e) => {
                            e.stopPropagation()
                            deleteInvoice && deleteInvoice(invoice?.id as string, invoice.status as string)
                            setShowOptions(false)
                        }}
                        className={styles.option}
                    >
                        <Text type={TextType.CaptionBold} color={TextColor.Error}>Delete</Text>
                    </div>
                </div>}
            </tr>
        </>
    )
}

export default InvoiceListItem