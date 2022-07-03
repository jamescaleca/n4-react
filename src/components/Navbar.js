import React from "react";
import { Link } from "react-router-dom"
import Logo from "../assets/Logo/Black/N4-Enterprises-Black.png"
import "../styles.css"

export default function Navbar() {
    return (
        <header>
            <div className="logo">
                <a href="#top">
                    <img alt="logo" src={Logo} className="logo-sm"></img>
                </a>
            </div>
            <input type="checkbox" id="nav-toggle" className="nav-toggle"></input>
            <nav>
                <ul className="active">
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/services">SERVICES</Link>
                    </li>
                    <li>
                        <Link to="/insights">INSIGHTS</Link>
                    </li>
                    <li>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                    <li>
                        <button>BOOK NOW</button>
                    </li>
                </ul>
            </nav>
            <label htmlFor="nav-toggle" className="nav-toggle-label">
                <span></span>
            </label>
        </header>
    )
}