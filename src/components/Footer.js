import React from 'react';
import Logo from '../assets/Logo/Black/N4-Enterprises-Black.png'

export default function Footer() {
    return (
        <footer>
            <div className="footer-cont">
                <ul>
                    <li>
                        <div>
                            <img alt="n4-logo" src={Logo} className="logo-sm"></img>
                            <ul className="social-links">
                                <li>FB</li>
                                <li>INSTA</li>
                                <li>TWI</li>
                                <li>YT</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div>
                            <ul>
                                <li>HOME</li>
                                <li>ABOUT</li>
                                <li>SERVICES</li>
                                <li>INSIGHTS</li>
                                <li>CONTACT</li>
                            </ul>
                            <form>
                                <input type="email" placeholder="Enter your email"></input>
                                <input type="submit" value="Subscribe Me"></input>
                            </form>
                        </div>
                    </li>
                </ul>
            </div>
        </footer>
    )
}