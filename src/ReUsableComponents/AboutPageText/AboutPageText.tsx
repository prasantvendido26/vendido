import React from 'react';
import './AboutPageText.css';

type AboutPageTextProps = {
    headingText: HTMLElement;
    descriptionText: HTMLElement;
}

class AboutPageText extends React.Component<any, any> {
    constructor(props: AboutPageTextProps) {
        super(props);
    }

    render() {

        return(
            <div className="about-page-text-root">
                <div className="about-page-heading-text">{this.props.headingText}</div>
                <div className="about-page-description-text">{this.props.descriptionText}</div>
            </div>
        );
    }
}

export default AboutPageText;