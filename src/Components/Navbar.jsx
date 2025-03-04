import React from "react";
import "./Navbar.css";
import {useRef} from "react";
import {FaBars , FaTimes} from "react-icons/fa";
function Navbar(){
    const navRef = useRef()
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        ;
    }
    return(
        <>
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href="#">Home</a>
                <a href="#">Blog</a>
                <a href="#">Work</a>
                <a href="#">About us</a>
                <button   className="nav-btn nav-btn-close" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button  className="nav-btn"  onClick={showNavbar}>
                <FaBars/>
            </button>

        </header>
        </>

    )
};
export default Navbar