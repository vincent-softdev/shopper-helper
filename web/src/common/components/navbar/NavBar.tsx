import { NavLink } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import logo from '../../../logo.jpeg'
import './navbar.css'

const NavBar = () => {
    return (
        <nav className='navbar-container'>
            <div className='nav-left'>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/about">
                    About
                </NavLink>
                <NavLink to="/contact">
                    Contact
                </NavLink>
                <NavLink to="/services">
                    Services
                </NavLink>
            </div>
            <div className='nav-middle'>
                <a href="/"><img src={logo} alt="logo" className="logo" /></a>
            </div>
            <div className='nav-right'>
                <FaSearch className="search-icon" /> 
            </div>
        </nav>
    );
}

export default NavBar;