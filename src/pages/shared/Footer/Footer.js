import React from 'react';
import { Link } from 'react-router-dom';
import footemrimg from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-16"
                style={{
                    background: `url(${footemrimg})`,
                    backgroundSize: 'cover'
                }}
            >
                <div className="footer ">
                    <div>
                        <span className="footer-title">Services</span>
                        <Link to='/' className="link link-hover">Branding</Link>
                        <Link to='/' className="link link-hover">Design</Link>
                        <Link to='/' className="link link-hover">Marketing</Link>
                        <Link to='/' className="link link-hover">Advertisement</Link>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <Link to='/' className="link link-hover">About us</Link>
                        <Link to='/' className="link link-hover">Contact</Link>
                        <Link to='/' className="link link-hover">Jobs</Link>
                        <Link to='/' className="link link-hover">Press kit</Link>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <Link to='/' className="link link-hover">Terms of use</Link>
                        <Link to='/' className="link link-hover">Privacy policy</Link>
                        <Link to='/' className="link link-hover">Cookie policy</Link>
                    </div>
                </div>

            </footer>
            <div className='text-center mt-10 mb-6 text-sm text-gray-500'>
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
        </div>
    );
};

export default Footer;