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
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;