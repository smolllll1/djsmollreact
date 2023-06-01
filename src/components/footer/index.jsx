import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { AuthenticationData } from "../data/authentication-data";
import logo from '../../svg/logo-footer.svg';

import './footer.css';

const Footer = () => {

    const { responseLogin } = useContext(AuthenticationData);

    return (
        <footer className="d-flex row w-100">
            <nav className="d-flex justify-content-around w-100 text-white flex-wrap py-4">
                <div>
                    <Link to={`/`}>
                        <img src={logo} alt="logo" width={100} />
                    </Link>
                    {responseLogin ?
                        <div className="w-100 bg-white rounded justify-content-center mt-4 p-2 d-flex align-items-center fw-bold"
                            style={{ color: 'rgb(1, 180, 228)' }}>
                            Hi
                            <p className="ms-1 mt-0 m-0 p-0">
                                <Link to={`users/account/${responseLogin?.username}`}
                                    style={{ textDecoration: 'none', color: 'rgb(1, 180, 228)' }}>
                                    {responseLogin?.username}
                                </Link>
                            </p>
                            !
                        </div>
                        :
                        <div className="w-100 bg-white rounded justify-content-center mt-4 p-2 d-flex align-items-center fw-bold">
                            <p className="mt-0 m-0 p-0">
                                <Link to="registration" style={{ textDecoration: 'none', color: 'rgb(1, 180, 228)' }}>
                                    JOIN THE COMMUNITY
                                </Link>
                            </p>
                        </div>
                    }
                </div>
                <div>
                    <h3>The Basics</h3>
                    <ul className="p-0 list-unstyled">
                        <li><Link to={"/about"} className="text-decoration-none text-white">About Us</Link></li>
                        <li><Link to={"/contacts"} className="text-decoration-none text-white">Contact Us</Link></li>
                        <li><Link to={"updated"} className="text-decoration-none text-white">Support</Link></li>
                        <li><Link to={"updated"} className="text-decoration-none text-white">API</Link></li>
                        <li><Link to={"updated"} className="text-decoration-none text-white">Service</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Get Involved</h3>
                    <ul className="p-0 list-unstyled">
                        <li><Link to={"updated"} className="text-decoration-none text-white">Contribution Bible
                        </Link>
                        </li>
                        <li><Link to={"updated"} className="text-decoration-none text-white">Add New Movie
                        </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Community</h3>
                    <ul className="p-0 list-unstyled">
                        <li><Link to={"updated"} className="text-decoration-none text-white">Guidelines</Link></li>
                        <li><Link to={"updated"} className="text-decoration-none text-white">Discussions</Link></li>
                        <li><Link to={"updated"} className="text-decoration-none text-white">Leaderboard</Link></li>
                        <li><Link to={"updated"} className="text-decoration-none text-white">Twitter</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Legal</h3>
                    <ul className="p-0 list-unstyled">
                        <li><Link to={"terms"} className="text-decoration-none text-white">Terms of Use</Link></li>
                        <li><Link to={"updated"} className="text-decoration-none text-white">API Terms of Use</Link>
                        </li>
                        <li><Link to={"privacy-policy"} className="text-decoration-none text-white">Privacy Policy
                        </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <section>Build 2023 (april)</section>
        </footer>
    )
}

export default Footer;