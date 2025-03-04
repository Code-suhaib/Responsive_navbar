import { useRef } from "react";
import { Link } from "react-router-dom";  
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/work">Work</Link>
                <Link to="/about">About us</Link>
                <button className="nav-btn nav-btn-close" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
