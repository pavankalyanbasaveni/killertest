import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./components_css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
    faAnglesRight,
    faBars,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [actNum, setActNum] = useState(0);

    const mobnavRef = useRef();
    const servRef = useRef();
    const indRef = useRef();
    const mobNavDevref = useRef();

    const handleClick = (value) => {
        setActNum(value);
    };

    const showMobNav = () => {
        mobnavRef.current.classList.toggle("responsive_nav");
    };

    const showServeNav = () => {
        servRef.current.classList.toggle("responsive_serv");
        servRef.current.classList.remove("responsive_serv_back");
        mobNavDevref.current.classList.toggle("navlisthide");
    };

    const hideServNav = () => {
        servRef.current.classList.toggle("responsive_serv_back");
        servRef.current.classList.remove("responsive_serv");
        mobNavDevref.current.classList.remove("navlisthide");
    };

    const showIndNav = () => {
        indRef.current.classList.toggle("responsive_serv");
        indRef.current.classList.remove("responsive_serv_back");
        mobNavDevref.current.classList.toggle("navlisthide");
    };

    const hideIndNav = () => {
        indRef.current.classList.toggle("responsive_serv_back");
        indRef.current.classList.remove("responsive_serv");
        mobNavDevref.current.classList.remove("navlisthide");
    };

    return (
        <div className="navbar">
            <nav>
                <img
                    // src=" OIAE -logos_black_1.png"
                    src="OAIESLog3.png"
                    alt="OIAE"
                />
                <div />
                <ul className="navlist desktop">
                    <div className="desktop">
                        <button className="back-mob-menu" onClick={showMobNav}>
                            <FontAwesomeIcon
                                className="nav-close"
                                icon={faXmark}
                            />
                        </button>

                        <Link onClick={showMobNav} to="/">
                            <li
                                className={` ${actNum == 0 ? "active" : 0} `}
                                onClick={() => handleClick(0)}
                            >
                                Home
                            </li>
                        </Link>

                        <li
                            className={`nav_serv ${
                                actNum == 1 ? "active" : 0
                            } `}
                        >
                            Services
                            <ul onClick={() => handleClick(1)} id="servlist">
                                <Link to="/erp">
                                    <li>
                                        Enterprise Resource Planning Cloud (ERP)
                                    </li>
                                </Link>

                                <Link to="/epm">
                                    <li>
                                        Enterprise Performance Management Cloud
                                        (EPM)
                                    </li>
                                </Link>
                                <Link to="/scm">
                                    <li>
                                        Supply Chain & Manufacturing Cloud (SCM)
                                    </li>
                                </Link>
                                <Link to="/hcm">
                                    <li>
                                        Human Capital Management Cloud (HCM)
                                    </li>
                                </Link>

                                <Link to="/cx">
                                    <li>Sales Cloud (CX)</li>
                                </Link>

                                <Link to="/att">
                                    <li>Automation and AI transformation</li>
                                </Link>
                                <Link to="/paas">
                                    <li>Platform as a Service (PaaS)</li>
                                </Link>
                                <Link to="/ams">
                                    <li>Application Managed Services (AMS)</li>
                                </Link>
                            </ul>
                        </li>

                        <li
                            className={`nav_ind ${actNum == 2 ? "active" : 0} `}
                            onClick={() => handleClick(2)}
                        >
                            Industries
                            <ul id="indlist">
                                <Link to="/financial">
                                    <li>Financial Services</li>
                                </Link>

                                <Link to="/mediaentertainment">
                                    <li>Media & Entertainment</li>
                                </Link>
                                <Link to="/professional">
                                    <li>Professional Services</li>
                                </Link>

                                <Link to="/retails">
                                    <li>Retail</li>
                                </Link>

                                <Link to="/transportationandLogistics">
                                    <li>Transportation & Logistics</li>
                                </Link>
                                <Link to="/consumerproducts">
                                    <li>Consumer Products</li>
                                </Link>
                                <Link to="/hightechnology">
                                    <li>High Technology</li>
                                </Link>
                                <Link to="/industrialmanufacturing">
                                    <li>Industrial Manufacturing</li>
                                </Link>

                                <Link to="/lifesciences">
                                    <li>Life Sciences</li>
                                </Link>

                                {/* <li>
                                <Link to="/">Wholesale Distribution</Link>
                            </li> */}

                                <Link to="/healthcare">
                                    <li>Healthcare</li>
                                </Link>
                            </ul>
                            <FontAwesomeIcon
                                className="fa-right"
                                icon={faAnglesRight}
                            />
                        </li>
                        <Link onClick={showMobNav} to="/career">
                            <li
                                className={` ${actNum == 3 ? "active" : 0} `}
                                onClick={() => handleClick(3)}
                            >
                                Career
                            </li>
                        </Link>
                        <Link onClick={showMobNav} to="/about">
                            <li
                                className={` ${actNum == 4 ? "active" : 0} `}
                                onClick={() => handleClick(4)}
                            >
                                About
                            </li>
                        </Link>
                    </div>
                </ul>
                {/* Mobile Responsive */}
                <ul ref={mobnavRef} className="navlist mobile">
                    <div ref={mobNavDevref} className="mobile_div">
                        <button className="back-mob-menu" onClick={showMobNav}>
                            <FontAwesomeIcon
                                className="nav-close"
                                icon={faXmark}
                            />
                        </button>

                        <Link onClick={showMobNav} to="/">
                            <li
                                className={` ${actNum == 0 ? "active" : 0} `}
                                onClick={() => handleClick(0)}
                            >
                                Home
                            </li>
                        </Link>
                        <li onClick={showServeNav} className="mob_ser_list">
                            Services
                            <FontAwesomeIcon
                                className="fa-right"
                                icon={faChevronRight}
                            />
                        </li>

                        <li
                            className={`nav_ind ${actNum == 2 ? "active" : 0} `}
                            onClick={showIndNav}
                        >
                            Industries
                            <FontAwesomeIcon
                                className="fa-right"
                                icon={faChevronRight}
                            />
                        </li>

                        <Link onClick={showMobNav} to="/career">
                            <li
                                className={` ${actNum == 3 ? "active" : 0} `}
                                onClick={() => handleClick(3)}
                            >
                                Career
                            </li>
                        </Link>
                        <Link onClick={showMobNav} to="/about">
                            <li
                                className={` ${actNum == 4 ? "active" : 0} `}
                                onClick={() => handleClick(4)}
                            >
                                About
                            </li>
                        </Link>
                    </div>
                    <ul
                        ref={servRef}
                        onClick={hideServNav}
                        className="servlist"
                    >
                        <li>
                            <FontAwesomeIcon
                                style={{ marginRight: "10px" }}
                                icon={faChevronLeft}
                            />
                            Services
                        </li>
                        <Link onClick={showMobNav} to="/erp">
                            <li>Enterprise Resource Planning Cloud (ERP)</li>
                        </Link>

                        <Link onClick={showMobNav} to="/epm">
                            <li>
                                Enterprise Performance Management Cloud (EPM)
                            </li>
                        </Link>
                        <Link onClick={showMobNav} to="/scm">
                            <li>Supply Chain & Manufacturing Cloud (SCM)</li>
                        </Link>
                        <Link onClick={showMobNav} to="/hcm">
                            <li>Human Capital Management Cloud (HCM)</li>
                        </Link>

                        <Link onClick={showMobNav} to="/cx">
                            <li>Sales Cloud (CX)</li>
                        </Link>

                        <Link onClick={showMobNav} to="/att">
                            <li>Automation and AI transformation</li>
                        </Link>
                        <Link onClick={showMobNav} to="/paas">
                            <li>Platform as a Service (PaaS)</li>
                        </Link>
                        <Link onClick={showMobNav} to="/ams">
                            <li>Application Managed Services (AMS)</li>
                        </Link>
                    </ul>

                    <ul ref={indRef} onClick={hideIndNav} className="servlist ">
                        <li>
                            <FontAwesomeIcon
                                style={{ marginRight: "10px" }}
                                icon={faChevronLeft}
                            />
                            Industries
                        </li>
                        <Link onClick={showMobNav} to="/financial">
                            <li>Financial Services</li>
                        </Link>

                        <Link onClick={showMobNav} to="/mediaentertainment">
                            <li>Media & Entertainment</li>
                        </Link>
                        <Link onClick={showMobNav} to="/professional">
                            <li>Professional Services</li>
                        </Link>

                        <Link onClick={showMobNav} to="/retails">
                            <li>Retail</li>
                        </Link>

                        <Link
                            onClick={showMobNav}
                            to="/transportationandLogistics"
                        >
                            <li>Transportation & Logistics</li>
                        </Link>
                        <Link onClick={showMobNav} to="/consumerproducts">
                            <li>Consumer Products</li>
                        </Link>
                        <Link onClick={showMobNav} to="/hightechnology">
                            <li>High Technology</li>
                        </Link>
                        <Link
                            onClick={showMobNav}
                            to="/industrialmanufacturing"
                        >
                            <li>Industrial Manufacturing</li>
                        </Link>

                        <Link onClick={showMobNav} to="/lifesciences">
                            <li>Life Sciences</li>
                        </Link>
                        <Link onClick={showMobNav} to="/healthcare">
                            <li>Healthcare</li>
                        </Link>
                    </ul>
                </ul>
            </nav>
            <button onClick={showMobNav} className="mob-menu">
                <FontAwesomeIcon className="nav-open" icon={faBars} />
            </button>
        </div>
    );
};

export default Navbar;
