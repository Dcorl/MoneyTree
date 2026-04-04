import { createBrowserRouter} from "react-router-dom";
import Overview from "../../pages/overview/Overview.tsx";
import Transactions from "../../pages/transactions/Transactions.tsx";
import Import from "../../pages/import/Import.tsx";
import Layout from "../layout/Layout.tsx";

const browserRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children : [
            { index: true, element: <Overview/>, handle: {title: "Overview"}},
            { path: "transactions", element: <Transactions/>, handle: {title:"Transactions"}},
            { path: "import", element: <Import/>, handle: {title: "Import Transactions"}}
        ]
    }
    ]);

export default browserRouter;