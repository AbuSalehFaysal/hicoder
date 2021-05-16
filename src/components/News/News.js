import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const News = () => {
    return (
        <div className="container mt-5">

            <p style={{ color: "#999" }} className="text-center">NEWS</p>
            <h1 style={{ color: "#1c1b1b" }} className="text-center"><b>#COVID19 Demands more full stack developers.</b></h1>
            <h1 style={{ color: "#1c3988" }} className="text-center"><b>& Industry Updates</b></h1>
            <div className="row">
                <div className="col-md-4">
                    <div class="card" style={{width: "18rem"}}>
                        <img src="c1.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, accusamus!</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <img src="logo.png" alt="" className="img-fluid" />
                                </div>
                                <div className="col-md-6">
                                    <FontAwesomeIcon icon={faClock}></FontAwesomeIcon> 6 Sep 2020
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card" style={{width: "18rem"}}>
                        <img src="c2.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, accusamus!</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <img src="logo.png" alt="" className="img-fluid" />
                                </div>
                                <div className="col-md-6">
                                    <FontAwesomeIcon icon={faClock}></FontAwesomeIcon> 6 Sep 2020
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card" style={{width: "18rem"}}>
                        <img src="c3.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, accusamus!</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <img src="logo.png" alt="" className="img-fluid" />
                                </div>
                                <div className="col-md-6">
                                    <FontAwesomeIcon icon={faClock}></FontAwesomeIcon> 6 Sep 2020
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;