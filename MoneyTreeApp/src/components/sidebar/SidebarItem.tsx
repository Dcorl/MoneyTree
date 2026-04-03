import Icon from "../icon/Icon.tsx";
import {Link} from "react-router-dom";

interface SidebarItemProps {
    name: string;
    route: string;
}

const SidebarItem = ({name,route}:SidebarItemProps) => {
    return (
        <Link to={`/${route}`} className="sidebar-item">
            <Icon width={20} height={20} svgLocation="sidebar" svgFileName="PlaceholderIcon"/>
            {name}
        </Link>
    );
};

export default SidebarItem;