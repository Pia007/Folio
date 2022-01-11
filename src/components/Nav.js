import { Link } from "react-router-dom";


const Nav = () => {
    return (
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary text-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Pia Torain</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <Link class="nav-link" to="/"> Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/About"> About</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/Projects" role="button" aria-haspopup="true" aria-expanded="false">Projects</a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="/Html">HTML/CSS/JavaScript</a>
                                <a class="dropdown-item" href="/Rxt">React</a>
                                {/* <Link class="dropdown-item" to="/HTML">HTML/CSS/JavaScript</Link>
                                <Link class="dropdown-item" to="/React">React</Link> */}
                            </div>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/Contact"> Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
