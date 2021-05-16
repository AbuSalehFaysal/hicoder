import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <p className="subtitle">YOUR TIME, OUR EFFORTS</p>
                        <h1 id="headline">Learn Production Grade Full Stack Development</h1>
                        <button class="button apply">KNOW MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;