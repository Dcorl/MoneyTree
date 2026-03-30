import "../layout/layout.css"
import "./navbar.css"
import Icon from "../icon/Icon.tsx";

interface NavbarProps {
    firstName: string;
}
const Navbar = ({firstName}: NavbarProps) => {
    return (
        <div className="nav" >
            <div className="app-name">
                <Icon svgLocation="nav" svgFileName="MoneyTreeLogo" width={60} height={60} />
                <h1>MoneyTree</h1>
            </div>
            <div className="user-details">
                <Icon svgLocation="nav" svgFileName="ProfileLogo" width={50} height={50} />
                <h2>{firstName || "No Name Passed"}</h2>
            </div>
        </div>
    );
};

export default Navbar;