import React from 'react';

const WhyHiCoder = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="title black">Why HiCoder?</h1>
                    <p>
                        HiCoder enables students to think about real-world problems, design, and develop the right solution. <a href="#">know more</a>
                    </p>
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-md-4">
                            <img src="why1.png" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-8">
                            <h3 className="black"> <b>Personalized Training</b></h3>
                            <p>
                                We understand the weakness of students coming from poor educational backgrounds. HiCoder avails resources and extra after-class support to match the criteria and keep up with tech.
                            </p>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-md-4">
                            <img src="why2.png" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-8">
                            <h3 className="black"> <b>Production Projects</b></h3>
                            <p>
                            Every student ends up making around 3 projects that are wholesome, cloud-hosted and can be used for a commercial purpose.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src="why3.jpg" alt="" className="img-fluid" />
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className="row mt-5">
                <div className="col-md-6">
                    <img src="how1.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-md-6 mt-5">
                    <h1 className="title black">How does HiCoder help?</h1>
                    <p style={{color:"#585555"}}><b>HiCoder resembeles software development and marketing altogether to develop applications that can be used by real user than keeping on Github.</b></p>
                    <p style={{color: "#363636"}}>HiCoder understands the struggle, peer pressure an engineering student goes into throughout curriculum. We believe, Most engineering students who can be part of the core software industry end up having a tech support or customer care job just because college never taught trending technology, project Management or encouraged students to their own projects.</p>
                    <button style={{background:"#1c3988"}} className="btn btn-primary btn-lg">APPLY NOW</button>
                </div>
            </div>
        </div>
    );
};

export default WhyHiCoder;