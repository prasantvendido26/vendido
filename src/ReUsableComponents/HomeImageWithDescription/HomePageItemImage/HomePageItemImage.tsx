import React from 'react';
import './HomePageItemImage.css';

type HomePageItemImageProps = {
    imageName: string;
    imageAlignLeftDirection: boolean;
}

class HomePageItemImage extends React.Component<any, any> {
    constructor(props: HomePageItemImageProps) {
        super(props);
    }
    render() {
        const imageToRender = require("./" + this.props.imageName);

        return (
            <div className={this.props.imageAlignLeftDirection ? "HomePageItemImageComponent-image-left-align-direction" : "HomePageItemImageComponent-image-right-align-direction"}>
                <img className="HomePageItemImage-width" src={imageToRender} alt={"Image"} />
            </div>
        );
    }
}

export default HomePageItemImage;