import React from 'react';
import './Footer.css';
import {Link} from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-parent-element">
                <div className="footer-heading">Vendido LLC. Copyright 2023</div>
                <div className="footer-link-bar">
                    <Link to="/" className="footer-link">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/about" className="footer-link">About us</Link>
                </div>
            </div>
        );
    }
}

export default Footer;