import React from 'react';
import './HomeImageWithDescription.css';

import HomePageItemImage from "./HomePageItemImage/HomePageItemImage";
import HomePageItemDescription from "./HomePageItemDescription/HomePageItemDescription";

type HomeImageWithDescriptionProps = {
    headerText: HTMLElement;
    descriptionText: HTMLElement;
    imageName: string;
    isImageLeft: boolean;
    imageAlignLeftDirection: boolean;
    booleanTextAlignLeft: boolean;
}

class HomeImageWithDescription extends React.Component<any, any> {
    constructor(props: HomeImageWithDescriptionProps) {
        super(props);
    }

    render() {
        const leftItem = this.props.isImageLeft ? <div className="HomeImageWithDescription-component-item home-image-with-description-component-image-item"><HomePageItemImage imageName={this.props.imageName} imageAlignLeftDirection={this.props.imageAlignLeftDirection} /></div> : <div className="HomeImageWithDescription-component-item"><HomePageItemDescription headerText={this.props.headerText} descriptionText={this.props.descriptionText} booleanTextAlignLeft = {this.props.booleanTextAlignLeft} /></div>;
        const rightItem = this.props.isImageLeft ? <div className="HomeImageWithDescription-component-item HomeImageWithDescription-right-align"><HomePageItemDescription headerText={this.props.headerText} descriptionText={this.props.descriptionText} booleanTextAlignLeft = {this.props.booleanTextAlignLeft} /></div> : <div className="HomeImageWithDescription-component-item home-image-with-description-component-image-item HomeImageWithDescription-right-align"><HomePageItemImage imageName={this.props.imageName} imageAlignLeftDirection={this.props.imageAlignLeftDirection} /></div> ;

        return (
            <div className="flex-container">
                {leftItem}
                {/*<div className="middle-div"></div>*/}
                {rightItem}
            </div>
        );
    }
}

export default HomeImageWithDescription;