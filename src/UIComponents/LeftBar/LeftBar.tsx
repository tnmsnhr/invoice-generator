import { NavLink } from "react-router-dom"
import styles from "./leftBar.module.css"
import Icon from "UIComponents/Icon"
import { IconName } from "UIComponents/Icon/iconType"

const LeftBar = () => {
    return (
        <aside className={styles.sidebar}>
            <ul className={styles.sidebarList}>
                <li className={styles.sidebarListitem}>
                    <NavLink
                        to="/" className={({ isActive }) =>
                            isActive || window.location.pathname === '/create-invoice' ? 'activated' : ''
                        }><Icon name={IconName.Document} /></NavLink>
                </li>
                <li className={styles.sidebarListitem}>
                    <NavLink to="/customers" className={({ isActive }) => (isActive ? "activated" : "")}><Icon name={IconName.Customer} /></NavLink></li>
            </ul>
        </aside>
    )
}

export default LeftBar