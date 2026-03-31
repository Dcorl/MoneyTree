import {type ReactNode} from 'react';
import "./layout.css"
import Navbar from "../navbar/Navbar.tsx";
import Sidebar from "../sidebar/Sidebar.tsx";

interface LayoutProps {
    page: ReactNode;
}

const Layout = ({page}:LayoutProps) => {
    return (
        <div className="app-layout">
            <Navbar firstName="Testing"/>
            <Sidebar/>
            <main className="main-content">
                <header className="page-header">
                    Dashboard Header
                </header>
                {page}
            </main>
        </div>
    );
};

export default Layout;