import Text from "UIComponents/Text"
import * as  styles from "./badge.module.css"
import { TextType } from "UIComponents/Text/Text"

interface BadgeProps {
    type: string
}

const Badge: React.FC<BadgeProps> = ({ type }) => {

    return (
        <div className={`${styles.badge} ${styles[type]}`}>
            <p>{type}</p>
        </div>
    )
}

export default Badge