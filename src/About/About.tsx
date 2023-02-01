import React from 'react';
import './About.css';

import AboutPageText from "../ReUsableComponents/AboutPageText/AboutPageText";

class About extends React.Component {
    render() {
        const headingText1 = <span>we make it <span className="text-color-about-page">easy and affordable</span> to by and sell</span>;
        const descriptionText1 = <span>Our mission is to create a fair and transparent environment in real estate by bridging the knowledge gap between the major stakeholders (sellers and buyers) and providers (loan officers, title companies, attorneys and contractors), eliminating all the guess work.</span>;

        const headingText2 = <span><span className="text-color-about-page">one-stop shop</span> for all real estate stakeholders</span>;
        const descriptionText2 = <span>Our vision is to empower all real estate stakeholders with enough knowledge and data for them to make informed decisions saving time, money and effort. <br /><br />Our goal is to become a one-stop online destination for all real estate stakeholders to carry out transactions being fully informed.</span>;
        return(
            <div className="about-page-root">
                <AboutPageText headingText={headingText1} descriptionText={descriptionText1} />
                <img className="about-page-image" src={require("./AboutPageImage 1.png")} />
                <hr className="about-page-division" />
                <div className="about-page-text-under-image">
                    <div className="about-page-text-under-image-left">fun fact</div>
                    <div className="about-page-text-under-image-right">The process of buying and selling real estate is not usually complex but it has been operating in a blurry for decades. Vendido was founded by two real estate buyers as well as sellers who understand the pain points of each one of the major stake holders in the current state. They felt the need of an online one-stop shop for everyone in this place to come and colloborate to eliminate all guess work involved in the process and strike the best deals.</div>
                </div>
                <AboutPageText headingText={headingText2} descriptionText={descriptionText2} />
                <div className="about-page-green-box-text-root">
                    <div className="about-page-green-box-heading">DNA fundamentals of Vendido</div>
                    <div className="about-page-green-box-text">
                        <div className="about-page-green-box-heading-text">passion for change</div>
                        <div className="about-page-green-box-description-text">We don’t like to accept the status quo and therefore, ask questions and develop products based on how can we make our customers lives easier.</div>
                        <div className="about-page-green-box-empty"></div>
                    </div>
                    <div className="about-page-green-box-text about-page-green-box-align-right-text">
                        <div className="about-page-green-box-empty"></div>
                        <div className="about-page-green-box-description-text">Our customers are at the core of everything we do. You drive our product concepts and solutions. We will always focus on listening to you, implementing your feedback and building personalized experiences for you.</div>
                        <div className="about-page-green-box-heading-text">customer-first focus</div>
                    </div>
                    <div className="about-page-green-box-text">
                        <div className="about-page-green-box-heading-text">leading with integrity and compassion</div>
                        <div className="about-page-green-box-description-text">We believe compassionate and honest leadership results in an innovative culture. We want to create a culture that attracts and retains innovators and provide a platform to help them grow. Building a sustainable business starts with taking care of our employees and everything else will follow.</div>
                        <div className="about-page-green-box-empty"></div>
                    </div>
                    <div className="about-page-green-box-text about-page-green-box-align-right-text">
                        <div className="about-page-green-box-empty"></div>
                        <div className="about-page-green-box-description-text">We believe that most often simple solutions are the answers to real world problems (complicated or not). That is why we like to create simple and logical solutions which should have existed from the beginning but are interestingly missing in the day to day life of humans.</div>
                        <div className="about-page-green-box-heading-text">simplify and bring a difference</div>
                    </div>
                    <div className="about-page-green-box-text">
                        <div className="about-page-green-box-heading-text">teamwork</div>
                        <div className="about-page-green-box-description-text">We believe in bringing the team together and giving everyone a seat at the table to learn about their experiences whether it is their experience with our customers or other stakeholders take their feedback seriously.</div>
                        <div className="about-page-green-box-empty"></div>
                    </div>
                    <div className="about-page-green-box-text about-page-green-box-align-right-text">
                        <div className="about-page-green-box-empty"></div>
                        <div className="about-page-green-box-description-text">Being honest with each other keeps us grounded and true to ourselves about the areas doing well, which ones need attention and what can we do better one day at a time to make our customers experiences better.</div>
                        <div className="about-page-green-box-heading-text">honesty</div>
                    </div>
                </div>
                <div className="about-page-intro">Meet the squad</div>
                <hr className="about-page-division-last" />
                <div className="about-page-member-info-root">
                    <div className="about-page-member-info">
                        <img className="about-page-member-picture" src={require("./jim.png")} />
                        <div className="about-page-member-name">Jim Gonzalez</div>
                        <div className="about-page-member-title">Co-founder</div>
                    </div>
                    <div className="about-page-member-info">
                        <img className="about-page-member-picture" src={require("./damien.jpg")} />
                        <div className="about-page-member-name">Damien Ogden</div>
                        <div className="about-page-member-title">Co-founder</div>
                    </div>
                    <div className="about-page-member-info">
                        <img className="about-page-member-picture" src={require("./leena.png")} />
                        <div className="about-page-member-name">Leena Poodipeddi</div>
                        <div className="about-page-member-title">Director of Marketing</div>
                    </div>
                    <div className="about-page-member-info">
                        <img className="about-page-member-picture" src={require("./prasant.png")} />
                        <div className="about-page-member-name">Prasant Poodipeddi</div>
                        <div className="about-page-member-title">Director of User Experience</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;