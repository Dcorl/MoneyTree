import {type ReactNode} from 'react';
import "./layout.css"
import Navbar from "../navbar/Navbar.tsx";
import Sidebar from "../sidebar/Sidebar.tsx";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({children}:LayoutProps) => {
    return (
        <div className="app-layout">
            <Navbar firstName="Testing"/>
            <Sidebar/>
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