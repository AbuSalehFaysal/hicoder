import { faFacebook, faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faClock, faEnvelope, faLocationArrow, faMapMarkerAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div style={{ background: "#f1f6fc" }}>
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-md-4 mt-5">
                        <img src="logo.png" alt="" className="img-fluid" />
                        <p>HiCoder enables students in being capable to develop production grade application by availing full stack development, Soft skills, Analytics and project management skills to get a core software job in the Industry.</p>
                        <button style={{ background: "#1c3988" }} className="btn btn-primary btn-lg">APPLY NOW</button>
                    </div>
                    <div className="col-md-4 mt-5 info">
                        <h1 style={{ color: "#1c3988" }}><b>Info</b></h1>
                        <a href="#">Home</a> <br />
                        <a href="#">About</a> <br />
                        <a href="#">Blog</a> <br />
                        <a href="#">FAQ</a> <br />
                        <a href="#">Contact</a>

                    </div>
                    <div className="col-md-4 mt-5">
                        <h1 style={{ color: "#1c3988" }}><b>Contact</b></h1>
                        <p>
                            <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon> 264/L3, Kavuri Hills Phase 2, HiTech City, Madhapur, Telangana, India, PIN: 500033
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faPhoneVolume}></FontAwesomeIcon> (+91) 9206 980 980</p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> <a href="mailto:hello@hicoder.in"> hello@hicoder.in</a></p>
                        <p>
                            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon> 10:00AM - 06:00PM</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <hr />
                <div className="row">
                    <div className="col-md-8">
                        <p>© Copyright | 2020 HiCoder Pvt. Ltd. | All Rights Reserved.</p>
                        <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service </a> | * Registration Charges Applied</p>
                    </div>
                    {/* <div className="col-md-1"></div> */}
                    <div className="col-md-2">
                        <FontAwesomeIcon style={{ color: "#1c3988" }} className="mr-2" icon={faFacebookSquare}></FontAwesomeIcon>
                        <FontAwesomeIcon style={{ color: "#1c3988" }} className="mr-2" icon={faInstagramSquare}></FontAwesomeIcon>
                        <FontAwesomeIcon style={{ color: "#1c3988" }} className="mr-2" icon={faTwitterSquare}></FontAwesomeIcon>
                        <FontAwesomeIcon style={{ color: "#1c3988" }} className="mr-2" icon={faLinkedin}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;