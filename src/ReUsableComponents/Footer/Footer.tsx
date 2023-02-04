import React from 'react';
import './Footer.css';
import {Link} from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-parent-element">
                <div className="footer-part-1">
                    <a href="https://instagram.com/vendidollc?igshid=YWJhMjlhZTc="><img className="footer-social-media-image" src={require("./instagram (1).png")} /></a>
                    <a href="https://www.facebook.com/profile.php?id=100089001133881"><img className="footer-social-media-image fb-image-icon" src={require("./fb.png")} /></a>
                    <span>&copy;</span>
                    <div className="footer-heading">2023 Vendido LLC.</div>
                </div>
                <div className="footer-link-bar">
                    <Link to="/" className="footer-link">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/about" className="footer-link">About us</Link>
                </div>
            </div>
        );
    }
}

export default Footer;