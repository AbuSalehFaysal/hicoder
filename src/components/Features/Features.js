import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Fearures.css'

const Features = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src="feature1.jpg" alt="" />
                </div>
                <div className="col-md-6" style={{ marginTop: "130px" }}>
                    <p className="feature-title">HICODER</p>
                    <h1 className="title black">We help students learn</h1>
                    <h1 className="title blue">Full Stack Development.</h1>
                    <p>HiCoder does everything that helps students become successful in the software industry. From product thinking to product designing, system designing, choosing the right frameworks, breaking projects in stages to building teams, and working collaboratively to making the application comply with the latest Google SEO needs and knowledge about integrated analytics, we do everything in between.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6" style={{ marginTop: "130px" }}>
                    <h1 className="title black">Trained on the most in-demand Technology Skills</h1>
                    <p>At the end of the course, every student becomes capable to develop their own create a web application, host on their own domain, enable advanced technologies and observe people's actions on their website and represent themselves as a HiCoder that matters.</p>
                    <div>
                        <p><FontAwesomeIcon style={{color: "#007bff"}} icon={faCheckCircle}></FontAwesomeIcon> End to End Project Analysis, Design & Development</p>
                        <p><FontAwesomeIcon style={{color: "#007bff"}} icon={faCheckCircle}></FontAwesomeIcon> Authentication, Geo Tracking, Payment Gateway</p>
                        <p><FontAwesomeIcon style={{color: "#007bff"}} icon={faCheckCircle}></FontAwesomeIcon> Analytics, SEO, Data Representation, Industry Standards</p>
                        <p><FontAwesomeIcon style={{color: "#007bff"}} icon={faCheckCircle}></FontAwesomeIcon> Max Pro Resume, Soft Skills, Client Expectation Management</p>
                    </div>
                    <button className="btn btn-primary btn-lg">APPLY NOW</button>
                </div>
                <div className="col-md-6" style={{ marginTop: "160px" }}>
                    <img src="2.jpg" alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default Features;