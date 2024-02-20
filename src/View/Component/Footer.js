
import React from 'react';
import { Container, ListGroup, Row } from 'react-bootstrap';
import '../Assets/scss/Footer.scss'; // Import CSS file if needed
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowRight } from "react-icons/fa6";
function Footer() {
    return (

        <footer>
            <div className="footer-area footer-bg footer-padding" style={{ height: '250px' }}>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-between">
                        <div className="single-footer-caption mb-50">
                            <h4>About Us</h4>
                            <div className="footer-pera">
                                <p>Heaven fruitful doesn't cover lesser dvsays appear creeping seasons so behold.</p>
                            </div>
                        </div>
                        <div className="single-footer-caption mb-50">
                            <h4>Contact Info</h4>
                            <ul>
                                <li>
                                    <p>Address: Your address goes here, your demo address.</p>
                                </li>
                                <li><a href="#">Phone: +84 981818239</a></li>
                                <li><a href="#">Email: group1@fpt.edu.vn</a></li>
                            </ul>
                        </div>
                        <div className="single-footer-caption mb-50">
                            <h4>Important Link</h4>
                            <ul>
                                <li><a href="#">View Project</a></li>
                                <li><a href="./contact">Contact Us</a></li>
                                <li><a href="#">Testimonial</a></li>
                                <li><a href="#">Properties</a></li>
                                <li><a href="#">Support</a></li>
                            </ul>
                        </div>
                        <div className="single-footer-caption mb-50">
                            <h4>Newsletter</h4>
                            <div className="footer-pera footer-pera2">
                                <p>Heaven fruitful doesn't over lesser in days. Appear creeping.</p>
                            </div>
                            <div className="footer-form">
                                <div id="mc_embed_signup">
                                    <form
                                        target="_blank"
                                        action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                        method="get"
                                        className="subscribe_form relative mail_part"
                                    >
                                        <input
                                            type="email"
                                            name="email"
                                            id="newsletter-form-email"
                                            placeholder="Email Address"
                                            className="placeholder hide-on-focus"
                                        />
                                        <button variant="light" style={{ height: '29px', width: '15px' }}><FaArrowRight /></button>{' '}
                                        <div className="mt-10 info"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>


    );
}

export default Footer;
