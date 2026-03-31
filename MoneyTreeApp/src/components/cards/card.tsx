import "./card.css";

interface CardProps {
    text?: string;
    content?: string;
    className?: string;
}


const Card = ({text, content, className}: CardProps) => {
    return (
        <div className={`card ${className}`}>
            <h3>{text}</h3>
            <p>{content}</p>
        </div>
    );
};

export default Card;