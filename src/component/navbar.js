import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub,faLinkedin,faTelegram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
const Navbar=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#my_works">My Works</a>
                        </li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/C7-2know/">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"  href="https://github.com/C7-2know/" target="_blank" rel="">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link"  href="https://github.com/C7-2know/">
                                <FontAwesomeIcon icon={faTelegram} />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"  href="https://github.com/C7-2know/">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;