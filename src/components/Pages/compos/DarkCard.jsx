import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function DarkCard({ title,imageSrc,links }) {
    return (
        <div className="card text-bg-dark">
            <img 
                src={imageSrc} 
                className="card-img fluid" 
                alt={title} 
            />
            <div className="card-img-overlay cc">
                <h5 className="card-title">{title}</h5>
                <Link to={links}>
                <Button variant="dark" onClick={() => console.log("Dark")}>
                    Saber Mais
                </Button></Link>
            </div>
        </div>
    );
}

export default DarkCard;
