import "./layout.css"
import Navbar from "../navbar/Navbar.tsx";
import Sidebar from "../sidebar/Sidebar.tsx";
import PageHeader from "../pageheader/PageHeader.tsx";
import { Outlet, useMatches } from "react-router-dom"

const Layout = () => {
    const routeMatches = useMatches()
    const currentRoute = routeMatches[routeMatches.length - 1];

    const routeTitle = (currentRoute?.handle as {title?: string})?.title || "overview"


    return (
        <div className="app-layout">
            <Navbar firstName="Testing"/>
            <Sidebar/>
            <main className="main-content">
                <PageHeader title={routeTitle}/>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;