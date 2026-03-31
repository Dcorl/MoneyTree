import "./sidebar.css"
import SidebarItem from "./SidebarItem.tsx";



const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-group">
                <SidebarItem item="Overview" />
                <SidebarItem item="Transactions" />
                <SidebarItem item="Monthly Bills" />
                <SidebarItem item="Budgets" />
                <SidebarItem item="Expenses" />
                <SidebarItem item="Scheduled Transactions" />
                <SidebarItem item="Calendar" />
             </div>
            <div className="sidebar-group">
                <SidebarItem item="Import Transactions" />
                <SidebarItem item="Prefrences" />
            </div>
            <div className="last-sidebar-group">
                <SidebarItem item="Settings" />
                <SidebarItem item="Help" />
            </div>
        </div>
    );
};

export default Sidebar;