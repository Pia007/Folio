import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <div className="project row">
            <Link to="{ props.link }">
                <div className="project-image">
                    <img src={ props.image } alt="" />
                </div>
                <div className="project-title">{ props.title }</div>
                <div className="project-cateogory">{ props.category} </div>
            </Link>
            <div className="card border-primary mb-3 col-sm-2" >
                <img className="card-img-top" src={ props.image } alt="" />
                <div className="card-body">
                    <h4 className="card-title">{ props.title }</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="project-cateogory">{ props.category} </div>
                
            </div>
        </div>
    )
}

export default Card
