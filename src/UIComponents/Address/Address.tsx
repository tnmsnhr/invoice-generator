import Text from "UIComponents/Text"
import * as  styles from "./address.module.css"
import { TextType } from "UIComponents/Text/Text"
import { Customer } from "types/types"
import Button from "UIComponents/Button";

interface AddressProps {
    style?: React.CSSProperties,
    data: Customer | undefined,
    className?: string;
    showDeleteOption?: boolean,
    deleteCustomer?: (id: string) => void
}


const Address: React.FC<AddressProps> = ({ style, data, className, showDeleteOption = false, deleteCustomer }) => {

    const handleDelete = (id: string | undefined) => {
        if (!id || !deleteCustomer) return
        deleteCustomer(id)
    }

    return (
        <div className={`${className || ''}`}>
            <div style={{ ...style }} className={`${styles.address}`}>
                <Text type={TextType.Title1} style={{ marginBottom: "0.2rem" }}>{data?.name}</Text>
                <Text type={TextType.Body1} style={{ marginBottom: "1.5rem" }}>{data?.email}</Text>
                <Text type={TextType.Body1} style={{ margin: "0.3rem 0" }}>{data?.address}</Text>
                <Text type={TextType.Body1}>{data?.phoneNumber}</Text>
            </div>
            {showDeleteOption && <Button style={{ marginTop: "1rem" }} variant="error" onClick={() => {
                handleDelete(data?.id)
            }}>Delete</Button>}
        </div>
    )
}

export default Address