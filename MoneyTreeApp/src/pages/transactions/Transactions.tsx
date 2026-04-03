import Card from "../../components/cards/card.tsx";
import "./transactions.css"

const Transactions = () => {
    return (
        <div className="transactions-layout">
            <Card text="Total Income" className="total-income"/>
            <Card text="Total Spent This Month" className="total-spent"/>
            <Card text="Gross Income" className="gross-income"/>
            <Card text="Largest Spend" className="largest-spend"/>
            <Card text="Budget Usage" className="budget-usage"/>
            {/*Search Component*/}
            <Card text="Search" className="search"/>
            {/*Table Component*/}
            <Card text="Transactions" className="transactions"/>
        </div>
    );
};

export default Transactions;