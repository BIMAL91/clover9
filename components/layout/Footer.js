/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <footer className="footer mt-10">
                <div className="container">
                    <div className="footer-bottom mt-0">
                        <div className="row">
                            <div className="col-md-5 offset-md-1 offset-lg-4">
                                {/* Your contact links or other content */}
                                <Link href="/page-terms" legacyBehavior>
                                    <a className="text-body-text color-gray-400 ml-50">Privacy policy</a>
                                </Link>
                                <Link href="#" legacyBehavior>
                                    <a className="text-body-text color-gray-400 ml-50">Cookies</a>
                                </Link>
                                <Link href="#" legacyBehavior>
                                    <a className="text-body-text color-gray-400 ml-50">Terms of service</a>
                                </Link>
                            </div>
                            <div className="col-md-6 col-lg-3 text-center text-md-end">
                                {/* Your social icons */}
                                <div className="footer-social">
                                    <Link href="https://facebook.com" legacyBehavior>
                                        <a className="icon-socials icon-facebook"></a>
                                    </Link>
                                    <Link href="https://twitter.com" legacyBehavior>
                                        <a className="icon-socials icon-twitter"></a>
                                    </Link>
                                    <Link href="https://www.instagram.com" legacyBehavior>
                                        <a className="icon-socials icon-instagram"></a>
                                    </Link>
                                    <Link href="https://www.linkedin.com" legacyBehavior>
                                        <a className="icon-socials icon-linkedin"></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-12 foot">
                    <div className="row">
                        <div className="col-md-12">
                            <span className="color-gray-400">MyClover 2023 All Rights Reserved</span>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Footer;