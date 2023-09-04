import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Footer()
{
    return(


        <div className="footer-container w-full bg-sky-700 mb-0 p-5 flex flex-col">

            <div className="footer-body w-full p-5 flex flex-col lg:flex-row  text-white space-y-5">


                    <div className="footer-section w-full text-left p-2 leading-8 ">
                            <h3 className="uppercase text-[14pt] font-semibold"> Smart Speacker</h3>
                            <p>"Smart Speaker" Enhancing any person ability to deliver English Speeches indipendently with a Web Application </p>


                    </div>


                    <div className="footer-section w-full text-left p-2 leading-8">
                            <h3 className="uppercase text-[14pt] font-semibold"> Our Services</h3>
                            

                            <ul>
                                <Link to=""><li>Content Analyzing</li></Link>
                                <Link to=""><li>Flow Completeness</li></Link>
                                <Link to=""><li>Analyzing</li></Link>
                                <Link to=""><li>Grammar Checking</li></Link>
                                <Link to=""><li>Facial Expression Analyzing</li></Link>
                            </ul>


                    </div>


                    <div className="footer-section w-full text-left p-2 leading-8">
                            <h3 className="uppercase text-[14pt] font-semibold"> Contact Us</h3>
                            <span>smartspeaker@gmail.com</span><br/>
                            <span>01128899635</span>

                            <div className="text-left mt-3 text-[16pt] center text-white w-1/2 flex space-x-5">
                                
                                <FontAwesomeIcon icon={faFacebookSquare} />
                                <FontAwesomeIcon icon={faLinkedin} />
                            </div>


                    </div>


            </div>


            <div className="footer-bottom bg-sky-900 p-3 text-white text center w-full">
            <p className="text-center"> © copyright Smart Speaker | All rights reserved </p>

            </div>

        </div>
    );
}

export default Footer;