import React from 'react';
import './Nav.css';
import {Link} from "react-router-dom";

class Nav extends React.Component<any, any> {
    render() {
        const brandImage = require("./vendido.png");
        const email = require("./email.png");
        const ellipse = require("./Ellipse.png");
        const telephone = require("./telephone.png");

        return (
            <div className="home-page-nav-bar-root">
                <div className="home-page-nav-bar-brand"><img src={brandImage} /></div>
                <div className="home-page-nav-break-mobile-view">
                    <div className="home-page-nav-bar-link-menu">
                        <Link to="/" className="home-page-nav-bar-link">Home</Link>
                        <Link to="/about" className="home-page-nav-bar-link">About us</Link>
                    </div>
                    <div className="home-page-nav-bar-right-part">
                        <img className="home-page-nav-bar-email" src={email} />
                        <div className="home-page-nav-bar-email-address">marketing@vendidollc.com</div>
                        <img className="home-page-nav-bar-ellipse" src={ellipse} />
                        <img className="home-page-nav-bar-telephone" src={telephone} />
                        <div className="home-page-nav-bar-telephone-number">+1-888-VENDIDO</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;