import "./overview.css"
import Card from "../../components/cards/card.tsx";

const Overview = () => {
    return (
        <div className="overview-layout">
            <Card text="Summary" className="summary" />
            <Card text="This Month" className="this-month" />
            <Card text="Last Month" className="last-month" />

            <Card text="Accounts" className="accounts" />
            <Card text="Last 7 Days" className="chart" />

            <Card text="Budgets" className="budgets" />
            <Card text="Transactions" className="transactions" />

            <Card text="Calendar" className="calendar" />
        </div>
    );
};

export default Overview;