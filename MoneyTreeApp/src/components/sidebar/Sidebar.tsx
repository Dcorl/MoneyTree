import "./sidebar.css"
import SidebarItem from "./SidebarItem.tsx";



const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-group">
                <SidebarItem name="Overview" route="" />
                <SidebarItem name="Transactions" route="transactions" />
             </div>
            <div className="sidebar-group">
                <SidebarItem name="Import Transactions" route="import" />
            </div>
        </div>
    );
};

export default Sidebar;