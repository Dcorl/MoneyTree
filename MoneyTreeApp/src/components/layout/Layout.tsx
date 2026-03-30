import {type ReactNode} from 'react';
import "./layout.css"
import Navbar from "../navbar/Navbar.tsx";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({children}:LayoutProps) => {
    return (
        <div className="app-layout">
            <Navbar firstName="Testing"/>
            <aside className="sidebar"></aside>
            <main className="main-content">
                <header className="page-header">
                    Dashboard Header
                </header>
                {children}
            </main>
        </div>
    );
};

export default Layout;