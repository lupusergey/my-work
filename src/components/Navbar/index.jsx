import { NavLink } from "react-router-dom";
import BtnDarkMode from "../BtnDarkMode";
import "./style.css";

const Navbar = () => {

    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

    return (
        <>
            <nav className="nav">
                <div className="container">
                    <div className="nav-row">
                        <NavLink to="/Home" className="logo">
                            <strong>Freelancer</strong> portfolio
                        </NavLink>
                        <BtnDarkMode />
                        <ul className="nav-list">
                            <li className="nav-list__item"><NavLink to="/Home" className={({ isActive }) => isActive ? activeLink : normalLink}>Home</NavLink></li>
                            <li className="nav-list__item"><NavLink to="/Projects" className={({ isActive }) => isActive ? activeLink : normalLink}>Projects</NavLink></li>
                            <li className="nav-list__item"><NavLink to="/Contacts" className={({ isActive }) => isActive ? activeLink : normalLink}>Contacts</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;