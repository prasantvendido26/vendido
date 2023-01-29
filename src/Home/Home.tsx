import React from 'react';
import Nav from "../Nav/Nav";
import HomePageVideo from "../ReUsableComponents/HomePageVideo/HomePageVideo";
import HomeImageWithDescription from "../ReUsableComponents/HomeImageWithDescription/HomeImageWithDescription";
import Footer from "../ReUsableComponents/Footer/Footer";

class Home extends React.Component {
    render() {
        const headerText1 = <span>sellers and seller agents, now say <span className="home-page-item-with-description-green">NO</span> to <span className="home-page-item-with-description-green">lowball offers</span>.</span>;
        const descriptionText1 = <span>Get real-time access to all your offers at one place. Prioritize them and make the right decision</span>

        const headerText2 = <span>buyers and buyer agents, <span className="home-page-item-with-description-green">NO more guessing</span> games on the offers.</span>;
        const descriptionText2 = <span>Save time and effort when putting an offer. Get access to all the offers you are up against for a home that you love.</span>

        const headerText3 = <span>experience <span className="home-page-item-with-description-green">seamless transactions</span> between all stakeholders.</span>;
        const descriptionText3 = <span>No need to connect the dots between listings, buyers and agents anymore. Real estate made easy as buying a coffee!</span>

        const headerText4 = <span>get <span className="home-page-item-with-description-green">free access</span> to real estate agents, attorneys and service providers in your local area</span>;
        const descriptionText4 = <span>All at one place.</span>
        return (
            <div>
                {/*<Nav />*/}
                <HomePageVideo />
                <HomeImageWithDescription imageName={"HomePageItem1.png"} imageAlignLeftDirection={false} headerText={headerText1} descriptionText={descriptionText1} isImageLeft={false} booleanTextAlignLeft = {true} />
                <HomeImageWithDescription imageName={"HomePageItem2.png"} imageAlignLeftDirection={true} headerText={headerText2} descriptionText={descriptionText2} isImageLeft={true} booleanTextAlignLeft = {false} />
                <HomeImageWithDescription imageName={"HomePageItem3.png"} imageAlignLeftDirection={false} headerText={headerText3} descriptionText={descriptionText3} isImageLeft={false} booleanTextAlignLeft = {true} />
                <HomeImageWithDescription imageName={"HomePageItem4.png"} imageAlignLeftDirection={true} headerText={headerText4} descriptionText={descriptionText4} isImageLeft={true} booleanTextAlignLeft = {false} />
                {/*<Footer />*/}
            </div>
        );
    }
}

export default Home;