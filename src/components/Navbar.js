import React from 'react';
import Logo from '../assets/Logo/Black/N4-Enterprises-Black.png'
import '../styles.css'

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
                        <a href="#top">HOME</a>
                    </li>
                    <li>
                        <a href="">ABOUT</a>
                    </li>
                    <li>
                        <a href="">SERVICES</a>
                    </li>
                    <li>
                        <a href="">INSIGHTS</a>
                    </li>
                    <li>
                        <a href="">CONTACT</a>
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