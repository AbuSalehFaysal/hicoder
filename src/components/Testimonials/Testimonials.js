import React from 'react';
import Slider from '../Slider/Slider';
import Slider2 from '../Slider2/Slider2';
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div style={{ background: "#f1f6fc" }}>
            <div className="conatiner">
                <br />
                <p className="text-center sub-title mt-5">THOUGHTS ON HICODER SYLLABUS</p>
                <h1 style={{ color: "#1c1b1b" }} className="text-center black"><b>Reviews by Industry Experts</b></h1>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img height="500" src="testimonial.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <div className="text-center">
                                <Slider></Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;