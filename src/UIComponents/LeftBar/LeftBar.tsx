import { NavLink } from "react-router-dom"
import * as styles from "./leftBar.module.css"
import { MdGroups3 } from "react-icons/md";
import Icon from "UIComponents/Icon";
import { IconName } from "UIComponents/Icon/iconType";


const LeftBar = () => {
    return (
        <aside className={styles.sidebar}>
            <ul className={styles.sidebarList}>
                <li className={styles.sidebarListitem}>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive || window.location.pathname === '/create-invoice' ? 'activated' : ''
                        }>
                        <Icon name={IconName.Document} size={24} />
                    </NavLink>
                </li>
                <li className={styles.sidebarListitem}>
                    <NavLink
                        to="/customers"
                        className={({ isActive }) => (isActive ? "activated" : "")}>
                        <Icon name={IconName.Customer} size={24} />
                    </NavLink>
                </li>
            </ul>
        </aside>
    )
}

export default LeftBar