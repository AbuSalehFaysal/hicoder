import React from 'react';

const Partners = () => {
    return (
        <div style={{ background: "#1c3988" }}>
            <div className="container mt-5">
                <br />
                {/* <br /> */}
                <h1 className="text-white text-center mt-5">Partner & Associates</h1>
                
                <div className="row mt-5">
                    <div className="col-md-3">
                        <img src="p1.jpg" alt="" className="img-fluid" />
                    </div>

                    <div className="col-md-3">
                        <img src="p2.jpg" alt="" className="img-fluid" />
                    </div>

                    <div className="col-md-3"><img src="p3.jpg" alt="" className="img-fluid" /></div>

                    <div className="col-md-3"><img src="p4.jpg" alt="" className="img-fluid" /></div>
                </div>
                <br />
                <br />
            </div>
        </div>
    );
};

export default Partners;