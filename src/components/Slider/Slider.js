import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Slider.css'

const Slider = () => {
    return (
        <Carousel
            showArrows={false}
            infiniteLoop={true}
            showThumbs={true}
            showStatus={false}
            autoPlay={true}
            interval={6100}
        >
            <div>
                <div className="myCarousel">
                <h3>Shirley Fultz</h3>
                <h4>Designer</h4>
                    {/* <blockquote> */}
                        <p>
                            It's freeing to be able to catch up on customized news and not be
                            distracted by a social media element on the same site
                        </p>
                    {/* </blockquote> */}
                </div>
                <img src="t1.jpg" />
                

            </div>

            <div>
                <div className="myCarousel">
                    <h3>Daniel Keystone</h3>
                    <h4>Designer</h4>
                    <p>
                        The simple and intuitive design makes it easy for me use. I highly
                        recommend Fetch to my peers.
                    </p>
                </div>
                <img src="t2.jpg" />

            </div>

            <div>
                <div className="myCarousel">
                    <h3>Theo Sorel</h3>
                    <h4>Designer</h4>
                    <p>
                        I enjoy catching up with Fetch on my laptop, or on my phone when
                        I'm on the go!
                    </p>
                </div>
                <img src="t3.jpg" />

            </div>

            <div>
                <div className="myCarousel">
                    <h3>Theo Sorel</h3>
                    <h4>Designer</h4>
                    <p>
                        I enjoy catching up with Fetch on my laptop, or on my phone when
                        I'm on the go!
                    </p>
                </div>
                <img src="t4.jpg" />

            </div>
        </Carousel>
    );
};

export default Slider;