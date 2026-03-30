import "./layout.css"
import "./navbar.css"
interface NavbarProps {
    firstName: string;
}
const Navbar = ({firstName}: NavbarProps) => {
    return (
        <div className="nav" >
            <div className="app-name">
                <h1>MoneyTree</h1>
            </div>
            <div className="user-details">
                <h2>{firstName || "No Name Passed"}</h2>
            </div>
        </div>
    );
};

export default Navbar;