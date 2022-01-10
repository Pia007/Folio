import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <h1>Nav</h1>
            <ul>
                <li><Link to="/"> Home</Link></li> 
                <li><Link to="/About"> About</Link></li> 
                <li><Link to="/Projects"> Projects</Link></li> 
                <li><Link to="/Contact"> Contact</Link></li>
                
            </ul>
        </nav>
    )
}

export default Nav
