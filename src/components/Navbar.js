import React from 'react';
import Logo from '../assets/n4-enterprises-logo.png'

export default function Navbar() {
    return (
        <header>
            <div className="logo">
                <a href="#">
                    <img src={Logo}></img>
                </a>
            </div>
            <div className="navbar">
                <ul>
                    <li>
                        <a href="#">HOME</a>
                    </li>
                    <li>
                        ABOUT
                    </li>
                    <li>
                        SERVICES
                    </li>
                    <li>
                        INSIGHTS
                    </li>
                    <li>
                        CONTACT
                    </li>
                    <li>
                        <button>BOOK NOW</button>
                    </li>
                </ul>
            </div>
        </header>
    )
}