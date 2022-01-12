import { Link } from "react-router-dom";


const Nav = () => {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary text-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Pia Torain</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/"> Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About"> About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Projects"> Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link class="nav-link" to="/Contact"> Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
