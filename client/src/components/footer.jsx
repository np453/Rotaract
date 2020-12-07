import React from 'react';
import { Link } from 'react-router-dom';

const Footer = props => {
    return (
        <div className="container mt-5">
            <span className="mt-5 mb-5 col-md-12 d-flex footer__line"></span>
            <footer>
                <div className="row m-0">
                    <div className="social__media__links col-md-4">
                        <h4>Follow us on</h4>
                        <h6>Facebook</h6>
                        <h6>Instagram</h6>
                        <h6>Twitter</h6>
                    </div>
                    <div className="col-md-4">
                        <Link to="/gallery">Visit our gallery</Link>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </footer>
        </div>
    );
}
export default Footer;