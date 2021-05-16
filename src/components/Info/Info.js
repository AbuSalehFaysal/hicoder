import React from 'react';
import { faClock, faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import './Info.css'

const Info = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-blue">
            <a class="navbar-brand" href="mailto:hello@hicoder.in"><small><FontAwesomeIcon icon={faEnvelope} /> hello@hicoder.in</small></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#"><FontAwesomeIcon icon={faPhoneVolume} /> (+91) 9206 980 980 <span class="sr-only">(current)</span></a>
                    </li>
                </ul>
                <ul class="navbar-nav my-2 my-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#"><FontAwesomeIcon icon={faClock} /> Mon - Fri: 10:00am - 06.00pm <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a href="#" className="nav-link"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
                    </li>
                    <li className="nav-item active">
                        <a href="#" className="nav-link"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                    </li>
                    <li className="nav-item active">
                        <a href="#" className="nav-link"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                    </li>
                    <li className="nav-item active">
                        <a href="#" className="nav-link"><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Info;