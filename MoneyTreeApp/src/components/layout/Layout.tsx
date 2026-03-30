import {type ReactNode} from 'react';
import "./layout.css"

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({children}:LayoutProps) => {
    return (
        <div className="app-layout">
            <header className="nav"></header>
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