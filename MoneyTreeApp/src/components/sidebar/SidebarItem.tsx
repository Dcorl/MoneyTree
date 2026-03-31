import Icon from "../icon/Icon.tsx";

interface SidebarItemProps {
    item: string;
}

const SidebarItem = ({item}:SidebarItemProps) => {
    return (
        <a className="sidebar-item">
            <Icon width={20} height={20} svgLocation="sidebar" svgFileName="PlaceholderIcon"/>
            {item}
        </a>
    );
};

export default SidebarItem;