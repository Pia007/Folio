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
                <img class="card-img-top" src={ props.image } alt="" />
                {/* <div className="card-header"></div> */}
                <div className="card-body">
                    <h4 className="card-title">{ props.title }</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div classNameName="project-cateogory">{ props.category} </div>
                {/* <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a> */}
                {/* <div className="accordion border-primary" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            { props.title }
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Card
