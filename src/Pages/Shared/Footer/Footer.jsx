import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer py-16 xl:py-28 bg-gray-100 text-base-content">
            <div className="w-full px-4 md:px-0 md:w-8/12 mx-auto">
                <div className="text-black grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-12 justify-center gap-8 xl:gap-10">
                    {/* Services Links */}
                    <div className="col-span-2 xl:col-span-3">
                        <NavLink className="text-xl uppercase Sitelogo pb-10">
                            {/* <img src={sitelogo} className="w-28" alt="" /> */}
                            <h2 className="text-3xl font-Jost">Gadgets Stock</h2>
                        </NavLink>

                        <p className="py-6">Sed ut perspiciatis undmnis is iste natus error sit amet voluptatem totam rem aperiam.</p>
                        <p className="">+012 (345) 678 99</p>
                    </div>


                    {/* Services Links */}
                    <div className="col-span-1 xl:col-span-3 text-center xl:text-start">
                        <nav className="flex flex-col">
                            <header className="text-black text-lg font-bold mb-4">Support</header>

                            <a href="#" className="link text-base text-gray-700 leading-10 link-hover">Help Center</a>
                            <a href="#" className="link text-base text-gray-700 leading-10 link-hover">Our COVID-19 Response</a>
                            <a href="#" className="link text-base text-gray-700 leading-10 link-hover">Cancellation options</a>
                            <a href="#" className="link text-base text-gray-700 leading-10 link-hover">Safety information</a>
                        </nav>
                    </div>

                    {/* Company Links */}
                    <div className="col-span-1 xl:col-span-2 text-center xl:text-start">
                        <nav className="flex flex-col">
                            <header className="text-black text-lg font-bold mb-4">Company</header>

                            <a href="#" className="link text-base text-gray-700 leading-10 link-hover">About us</a>
                            <a href="#" className="link text-base text-gray-700 leading-10 link-hover">Community Blog</a>
                            <a href="#" className="link text-base text-gray-700 leading-10 link-hover">Careers</a>
                            <a href="#" className="link text-base text-gray-700 leading-10 link-hover">Privacy policy</a>
                        </nav>
                    </div>

                    {/* Legal Links */}
                    <div className="col-span-1 xl:col-span-2 text-center xl:text-start">
                        <nav className="flex flex-col">
                            <header className="text-black text-lg font-bold mb-4">Contact</header>

                            <a href="#" className="link text-base text-gray-700 leading-10 link-hover">Partnerships</a>
                            <a href="#" className="link text-base text-gray-700 leading-10 link-hover">FAQ</a>
                            <a href="#" className="link text-base text-gray-700 leading-10 link-hover">Get in touch</a>
                        </nav>
                    </div>

                    {/* Follow Us On */}
                    <div className="col-span-1 xl:col-span-2 text-center xl:text-start">
                        <nav className="flex flex-col">
                            <header className="text-black text-lg font-bold mb-4">Follow Us On</header>

                            © 2025 TailGrids
                        </nav>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;