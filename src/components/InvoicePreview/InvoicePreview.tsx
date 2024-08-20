import React, { useState } from "react"
import styles from "./invoicePreview.module.css"
import { Invoice } from "types/types"
import Text from "UIComponents/Text"
import { TextType } from "UIComponents/Text/Text"
import InvoiceBasic from "components/InvoiceTemplates/Basic/InvoiceBasic"
import InvoiceModern from "components/InvoiceTemplates/Modern/InvoiceModern"
import InvoiceProfessional from "components/InvoiceTemplates/Professional/Professional"
import InvoiceModernMinimal from "components/InvoiceTemplates/InvoiceModernMinimal"

interface InvoicePreviewProps {
    invoice: Invoice | undefined | null
}

type TemplateName = "basic" | "modern" | "professional" | "modernMinimal"

const componentMap: Record<TemplateName, React.FC<{ invoice: Invoice | null | undefined }>> = {
    basic: InvoiceBasic,
    modern: InvoiceModern,
    professional: InvoiceProfessional,
    modernMinimal: InvoiceModernMinimal,
};

const InvoicePreview: React.FC<InvoicePreviewProps> = ({ invoice }) => {
    const [template, setTemplate] = useState<TemplateName>("basic")

    const Template = componentMap[template]

    const handleChangeTemplate = (name: TemplateName) => {
        setTemplate(name)
    }
    return (
        <>
            <Text type={TextType.Title2} style={{ margin: "2rem" }}>
                Preview:
            </Text>
            <div className={styles.invoicePreview}>
                <div className={styles.templates}>
                    <div className={`${styles.templateName} ${template == "basic" && styles.active}`} onClick={() => {
                        handleChangeTemplate("basic")
                    }}>
                        <Text type={TextType.Button2}
                        >Basic</Text>
                    </div>
                    <div className={`${styles.templateName} ${template == "modern" && styles.active}`} onClick={() => {
                        handleChangeTemplate("modern")
                    }}>
                        <Text type={TextType.Button2}>Modern</Text>
                    </div>
                    <div className={`${styles.templateName} ${template == "professional" && styles.active}`} onClick={() => {
                        handleChangeTemplate("professional")
                    }}>
                        <Text type={TextType.Button2}>Simple</Text>
                    </div>
                    <div className={`${styles.templateName} ${template == "modernMinimal" && styles.active}`} onClick={() => {
                        handleChangeTemplate("modernMinimal")
                    }}>
                        <Text type={TextType.Button2}>Modern Minimal</Text>
                    </div>
                </div>
                <div className={styles.templateContent}>
                    <Template invoice={invoice} />
                </div>
            </div>
        </>
    )
}

export default InvoicePreview