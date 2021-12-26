import React from "react";
import "./footer.scss";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"

function index(props) {
    return (
        <div className="section">
            <footer id="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
                <div className="footer-newsletter">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h4>Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                            </div>
                            <div className="col-lg-6">
                                <form action="" method="post">
                                    <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Working Hours</h4>
                                <p>
                                    Monday to Sunday
                                    7 am to 9 pm
                                    
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Contact us</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Support</a></li>
                                    
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h4>Contact Us</h4>
                                <p>
                                    A108 Adam Street <br></br>
                                    Oyo, OY 535022<br></br>
                                    Nigeria<br></br>
                                    <strong>Phone:</strong> +243 55488 55<br></br>
                                    <strong>Email:</strong> info@example.com<br></br>
                                </p>

                            </div>

                            <div className="col-lg-3 col-md-6 footer-info">
                                <h3>About Moderna</h3>
                                <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                                <div class="social-links mt-3">
                                 
                                    <a href="#" class="facebook"><FaFacebookSquare /></a>
                                    <a href="#" class="instagram"><FaInstagram  /></a>
                                   
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>M medics</span></strong>. All Rights Reserved
                    </div>

                </div>

            </footer>
        </div>
    );
}

export default index;
