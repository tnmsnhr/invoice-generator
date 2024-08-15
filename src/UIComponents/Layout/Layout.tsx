import React, { ReactNode } from 'react'
import "./layout.css"
import Navbar from 'UIComponents/Navbar';
import LeftBar from 'UIComponents/LeftBar';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout">
            <div className="navbar-content">
                <Navbar />
            </div>
            <div className="main-content">
                <section className="sidebar-content">
                    <LeftBar />
                </section>
                <main className="content">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout