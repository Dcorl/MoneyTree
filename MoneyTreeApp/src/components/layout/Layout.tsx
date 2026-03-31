import {type ReactNode} from 'react';
import "./layout.css"
import Navbar from "../navbar/Navbar.tsx";
import Sidebar from "../sidebar/Sidebar.tsx";
import PageHeader from "../pageheader/PageHeader.tsx";

interface LayoutProps {
    page: ReactNode;
}

const Layout = ({page}:LayoutProps) => {
    return (
        <div className="app-layout">
            <Navbar firstName="Testing"/>
            <Sidebar/>
            <main className="main-content">
                <PageHeader title="Overview"/>
                {page}
            </main>
        </div>
    );
};

export default Layout;