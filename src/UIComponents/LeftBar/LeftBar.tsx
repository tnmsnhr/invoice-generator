import { NavLink } from "react-router-dom"
import styles from "./leftBar.module.css"
import Icon from "UIComponents/Icon"
import { IconName } from "UIComponents/Icon/iconType"
import { MdGroups3, MdOutlineDocumentScanner } from "react-icons/md";


const LeftBar = () => {
    return (
        <aside className={styles.sidebar}>
            <ul className={styles.sidebarList}>
                <li className={styles.sidebarListitem}>
                    <NavLink
                        to="/" className={({ isActive }) =>
                            isActive || window.location.pathname === '/create-invoice' ? 'activated' : ''
                        }><MdOutlineDocumentScanner size={24} /></NavLink>
                </li>
                <li className={styles.sidebarListitem}>
                    <NavLink to="/customers" className={({ isActive }) => (isActive ? "activated" : "")}><MdGroups3 size={24} /></NavLink></li>
            </ul>
        </aside>
    )
}

export default LeftBar