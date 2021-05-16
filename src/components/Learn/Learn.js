import React from 'react';

const Learn = () => {
    return (
        <div className="container mt-5">
            <div className="text-center">
                <p style={{ color: "#999" }}><b>WHAT YOU LEARN</b></p>
                <h1 style={{color:"#1c1b1b"}}><b>at HiCoder is useful</b></h1>
                <h1 style={{color: "#1c3988"}}><b>Technology, Management & more</b></h1>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="row">
                <div className="col-md-3">
                    <div class="card shadow-lg p-3 mb-5 bg-white rounded" style={{ width: "18rem" }}>
                        <div className="text-center">
                            <img width="50" height="50" class="img-fluid" src="l1.png" alt="Card image cap" />
                        </div>
                        <div class="card-body text-center">
                            <h5><b>Front End</b></h5>
                            <p class="card-text">Students learn to design, develope the UI following UX with industry <br /> standards.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card shadow-lg p-3 mb-5 bg-white rounded" style={{ width: "18rem" }}>
                        <div className="text-center">
                            <img width="50" height="50" class="img-fluid" src="l2.png" alt="Card image cap" />
                        </div>
                        <div class="card-body text-center">
                            <h5><b>Backend</b></h5>
                            <p class="card-text">Students learn CS Architecture, CRUD, API, Authentication, Authorization, DB and etc.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card shadow-lg p-3 mb-5 bg-white rounded" style={{ width: "18rem" }}>
                        <div className="text-center">
                            <img width="50" height="50" class="img-fluid" src="l3.png" alt="Card image cap" />
                        </div>
                        <div class="card-body text-center">
                            <h5><b>Project Management</b></h5>
                            <p class="card-text">Students learn to plan, project, and execute development projects with client expectation.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card shadow-lg p-3 mb-5 bg-white rounded" style={{ width: "18rem" }}>
                        <div className="text-center">
                            <img width="50" height="50" class="img-fluid" src="l4.png" alt="Card image cap" />
                        </div>
                        <div class="card-body text-center">
                            <h5><b>Production Deployment</b></h5>
                            <p class="card-text">Students learn to create a server, deploy an application following security guidelines.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div class="card shadow-lg p-3 mb-5 bg-white rounded" style={{ width: "18rem" }}>
                        <div className="text-center">
                            <img width="50" height="50" class="img-fluid" src="l1.png" alt="Card image cap" />
                        </div>
                        <div class="card-body text-center">
                            <h5><b>Basic Analytics</b></h5>
                            <p class="card-text">Students learn about analytics, usability, and integration of analytics in their production <br /> application</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card shadow-lg p-3 mb-5 bg-white rounded" style={{ width: "18rem" }}>
                        <div className="text-center">
                            <img width="50" height="50" class="img-fluid" src="l2.png" alt="Card image cap" />
                        </div>
                        <div class="card-body text-center">
                            <h5><b>Soft Skills</b></h5>
                            <p class="card-text">Soft skills encourages open communication & enhances corporate skills having corporate <br /> attitude.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card shadow-lg p-3 mb-5 bg-white rounded" style={{ width: "18rem" }}>
                        <div className="text-center">
                            <img width="50" height="50" class="img-fluid" src="l3.png" alt="Card image cap" />
                        </div>
                        <div class="card-body text-center">
                            <h5><b>Industry Standards</b></h5>
                            <p class="card-text">Industry Trending technology, tools, and process adaption help students adapt to corporate with almost no effort.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card shadow-lg p-3 mb-5 bg-white rounded" style={{ width: "18rem" }}>
                        <div className="text-center">
                            <img width="50" height="50" class="img-fluid" src="l4.png" alt="Card image cap" />
                        </div>
                        <div class="card-body text-center">
                            <h5><b>Max Pro Resume</b></h5>
                            <p class="card-text">Students get a unique HiCoder smart ID, Certificate, and an industry expert-guided self developed integrated resume.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Learn;