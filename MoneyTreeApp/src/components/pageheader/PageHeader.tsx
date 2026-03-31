import "./pageheader.css"

interface PageHeaderProps {
    title: string;
}

const PageHeader = ({title} : PageHeaderProps) => {
    return (
        <div className="page-header">
            <h2>{title}</h2>
        </div>
    );
};

export default PageHeader;