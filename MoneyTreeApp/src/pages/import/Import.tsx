import "./import.css"
import Icon from "../../components/icon/Icon.tsx";
import DropZone from "../../components/dropzone/DropZone.tsx";

const Import = () => {
    return (
        <div className="import-page-layout">
            <Icon width={200} height={200} svgLocation="nav" svgFileName="MoneyTreeLogo"/>
            <h2>Upload Your Transactions</h2>
            <DropZone/>
        </div>
    );
};

export default Import;