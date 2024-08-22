import Text from "UIComponents/Text"
import * as  styles from "./address.module.css"
import { TextType } from "UIComponents/Text/Text"
import { Customer } from "types/types"

interface AddressProps {
    style?: React.CSSProperties,
    data: Customer | undefined,
    className?: string;
}


const Address: React.FC<AddressProps> = ({ style, data, className }) => {
    return (
        <div style={{ ...style }} className={`${styles.address} ${className || ''}`}>
            <Text type={TextType.Title1} style={{ marginBottom: "0.2rem" }}>{data?.name}</Text>
            <Text type={TextType.Body1} style={{ marginBottom: "1.5rem" }}>{data?.email}</Text>
            <Text type={TextType.Body1} style={{ margin: "0.3rem 0" }}>{data?.address}</Text>
            <Text type={TextType.Body1}>{data?.phoneNumber}</Text>
        </div>
    )
}

export default Address