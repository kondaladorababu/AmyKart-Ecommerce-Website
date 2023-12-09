import React from 'react';
import '../styles/Footer.css';

function Footer() {
    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className='footer_container'>
            <div onClick={handleBackToTop} className="back_to_top">
                <p>Back To Top</p>
            </div>
            <div className="footer_content">
                <div className="box">
                    <h5>Get To Know Us</h5>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Press releases</li>
                        <li>AmyKart Science</li>
                    </ul>
                </div>
                <div className="box">
                    <h5>Connect With Us</h5>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                <div className="box">
                    <h5>Make Money With Us</h5>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Press releases</li>
                        <li>AmyKart Science</li>
                        <li>Press releases</li>
                        <li>AmyKart Science</li>
                        <li>Press releases</li>
                    </ul>
                </div>
                <div className="box">
                    <h5>Let Us Help You</h5>
                    <ul>
                        <li>Contact Us</li>
                        <li>Ideas</li>
                        <li>help improve</li>
                        <li>AmyKart Science</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
