import React from 'react';
import '../../assets/css/style.min.css'

import Carousel from 'react-bootstrap/Carousel'

import product01 from '../../assets/img/product01.png';
import product02 from '../../assets/img/product02.png';
import product03 from '../../assets/img/product03.png';
import product04 from '../../assets/img/product04.png';
import product05 from '../../assets/img/product05.png';



export default function Products(params) {
    return (
        <div>
            <div class='container-fluid' >
                <div className="row title" style={{ marginBottom: "20px" }} >
                    <div class="col-sm-12 btn btn-warning">
                        How To Use Bootstrap Carousel In ReactJS
                       </div>
                </div>
            </div>
            <div className='container-fluid' >
                <Carousel>
                    <Carousel.Item  >
                        <img
                            className="d-block w-100"
                            src={product01} />
                        <Carousel.Caption>
                            <h3>First Demo </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={product02} />
                        <Carousel.Caption>
                            <h3>Second Demo</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={product03} />
                        <Carousel.Caption>
                            <h3>Third Demo</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>

        </div>
    );
};
