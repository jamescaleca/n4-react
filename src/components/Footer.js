import React from 'react';
import Logo from '../assets/Logo/Black/N4-Enterprises-Black.png'
import FB from '../assets/Icons/facebook-brands.svg'
import Insta from '../assets/Icons/instagram-brands.svg'
import Twitter from '../assets/Icons/twitter-brands.svg'
import YT from '../assets/Icons/youtube-brands.svg'

export default function Footer() {
    return (
        <footer>
            <div className="footer-cont">
                <ul className='footer-content'>
                    <li className="footer-social-li">
                        <img alt="n4-logo" src={Logo} className="logo-sm"></img>
                        <ul className="social-links">
                            <li><img alt="fb-icon" src={FB}></img></li>
                            <li><img alt="insta-icon" src={Insta}></img></li>
                            <li><img alt="twitter-icon" src={Twitter}></img></li>
                            <li><img alt="yt-icon" src={YT}></img></li>
                        </ul>
                    </li>
                    <li className="footer-email-li">
                        <ul className="footer-nav">
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
                    </li>
                </ul>
            </div>
        </footer>
    )
}