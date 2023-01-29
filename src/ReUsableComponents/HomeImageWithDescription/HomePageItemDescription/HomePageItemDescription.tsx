import React from 'react';
import './HomePageItemDescription.css';

type HomePageItemDescriptionProps = {
    headerText: HTMLElement;
    descriptionText: HTMLElement;
    booleanTextAlignLeft: boolean;
}

class HomePageItemDescription extends React.Component<any, any> {
    render() {
        return (
            <div className="home-page-description-container">
                <div className={this.props.booleanTextAlignLeft ? "header-text left-align-text-home-page-item-description" : " header-text right-align-text-home-page-item-description"}>{this.props.headerText}</div>
                <div className={this.props.booleanTextAlignLeft ? "description-text left-align-text-home-page-item-description" : " description-text right-align-text-home-page-item-description"}>{this.props.descriptionText}</div>
            </div>
        );
    }
}

export default HomePageItemDescription;