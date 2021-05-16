import React from 'react';

const Accompliments = () => {
    return (
        <div className="mt-5" style={{background: "#1c3988"}}>
            <br />
            <br />
            <br />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <img src="A.png" alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-3">
                        <img src="B.png" alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-3">
                        <img src="C.png" alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-3">
                        <img src="D.png" alt="" className="img-fluid" />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className="row text-white">
                    <div className="col-md-3">
                        <h1>34 +</h1>
                        <h6>PROJECTS COMPLETED</h6>
                    </div>
                    <div className="col-md-3">
                        <h1>47 +</h1>
                        <h6>INDUSTRY EXPERTS</h6>
                    </div>
                    <div className="col-md-3">
                        <h1>30 +</h1>
                        <h6>QUALITY DEVELOPERS</h6>
                    </div>
                    <div className="col-md-3">
                        <h1>40,000,00 +</h1>
                        <h6>APPLICATION USERS</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accompliments;