import React from 'react';
import produt1 from '../assets/img/product01.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Slide.css'

export default function Slide() {

    return (
        <div className="carousel">
            <Carousel
                infiniteLoop={true}
                autoPlay={true}
                interval={2500}
            >
                <div>
                    <img src={produt1} alt="" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={produt1} alt="" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={produt1} alt="" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
};


// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
/*configuracoes:
showArrows={true}
                 infiniteLoop={true}
                autoPlay={true}
                emulateTouch={true}
                interval={2500}
                showIndicators={false}
                showStatus={false}

*/
// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
