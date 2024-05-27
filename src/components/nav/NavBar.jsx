import { useState } from "react";
// import Logo from "../../images/logo/logo.png";
import Logo from "../../images/logo/logo.svg";
import NavList from "./NavList";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPlus,
//   faXmark,
//   faLocationDot,
//   faPhone,
//   faEnvelope,
//   faBars,
//   faChartBar,
//   faUser,
// } from "@fortawesome/free-solid-svg-icons";
// import {
//   faTwitter,
//   faInstagram,
//   faFacebookF,
// } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import LogoSide from "../../images/logo/logo-footer.svg";
import SideImg1 from "../../images/gallery/gal1.jpg";
import SideImg2 from "../../images/gallery/gal2.jpg";
import SideImg3 from "../../images/gallery/gal3.jpg";
import SideImg4 from "../../images/gallery/gal4.jpg";
import SideImg5 from "../../images/gallery/gal5.jpg";
import SideImg6 from "../../images/gallery/gal6.png";

const NavBar = () => {
  const [spin, setSpin] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  const joinSpin = () => {
    setSpin(true);
  };

  const stopSpin = () => {
    setSpin(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  // hamburger menu
  const toggleHamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  return (
    <>
      <nav
        className={`flex flex-row bg-red-400 items-center justify-between py-8 px-12 fixed top-0 left-0 right-0 w-full z-50 ${
          sticky ? "shadow-xl !bg-black" : ""
        }`}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="logo_img"
            onClick={goTop}
            className="w-full h-auto"
          />
        </Link>
        <div className="navlist-nav">
          <NavList />
        </div>
        <div className="flex item-center gap-10">
          <div className="flex gap-10 items-center">
            {/* mobile menu -------------- */}

            {/* hamburger menu */}
            <div
              className={`flex top-0 flex-col fixed w-full left-0 h-screen bg-white z-[9999999999] py-[60px] px-[40px] ease-in-out duration-500 ${
                hamburger ? "translate-x-0" : "-translate-x-full"
              } `}
            >
              <i
                onClick={toggleHamburgerMenu}
                className="fa-solid fa-xmark text-[#ff0336] text-[3.3rem] cursor-pointer self-end"
              />
              {/* links */}
              <ul className="text-center flex flex-col gap-10 absolute top-[50%] left-[50%] -translate-y-[50%]">
                <li onClick={toggleHamburgerMenu}>
                  <a
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    href="/#home"
                  >
                    Home
                  </a>
                </li>
                <li onClick={toggleHamburgerMenu}>
                  <Link
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li onClick={toggleHamburgerMenu}>
                  <Link
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    to="/gallery/page-1"
                  >
                    Gallery
                  </Link>
                </li>
                <li onClick={toggleHamburgerMenu}>
                  <Link
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    to="/schedule/monday"
                  >
                    Schedule
                  </Link>
                </li>
                <li onClick={toggleHamburgerMenu}>
                  <Link
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    to="/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li onClick={toggleHamburgerMenu}>
                  <Link
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li onClick={toggleHamburgerMenu}>
                  <Link
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    to="/pricing"
                  >
                    Pricing
                  </Link>
                </li>
                <li onClick={toggleHamburgerMenu}>
                  <Link
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    to="/classes"
                  >
                    Session
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div
                className={`flex flex-col fixed w-[40rem] min450:w-full h-[100vh] bg-white top-0 left-0 z-[9999999999] p-[45px] gap-24 overflow-x-hidden ease-in-out duration-[0.5s] ${
                  sidebar ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                {/* logo & X */}
                <div className="flex justify-between items-center">
                  <img src={LogoSide} alt="logo_img" className="w-[13rem]" />
                  <i
                    onClick={toggleSidebar}
                    className="fa-solid fa-xmark text-[#ff0336] text-[3.3rem] cursor-pointer"
                  />
                </div>
                {/* about-us */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">About Us</h3>
                  <p className="text-[1.6rem] fot-medium text-[#000000b1]">
                    Welcome to Gymate Our mission is to create a friendly and
                    motivating environment for all fitness levels. We offer a
                    variety of classes, including HIIT, yoga, strength training,
                    and cardio. Our trainers provide personalized programs and
                    nutrition advice to support your journey to better health.
                  </p>
                </div>
                {/* gallery  */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">Gallery</h3>
                  <div className="grid grid-cols-3 grid-rows-2 gap-4">
                    <img
                      src={SideImg1}
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer"
                    />
                    <img
                      src={SideImg2}
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer"
                    />
                    <img
                      src={SideImg3}
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer"
                    />
                    <img
                      src={SideImg4}
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer"
                    />
                    <img
                      src={SideImg5}
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer"
                    />
                    <img
                      src={SideImg6}
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer"
                    />
                  </div>
                </div>
                {/* contact */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">Contact Info</h3>
                  <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#ff0336] cursor-pointer ease-in duration-200">
                    <i className=" fa-solid fa-location-dot text-[#ff0336]" />
                    &nbsp; Ram Krishna Nagar, patna
                  </p>
                  <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#ff0336] cursor-pointer ease-in duration-200">
                    <i className="fa-solid fa-phone text-[#ff0336]" />
                    +91- 1000300670
                  </p>
                  <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#ff0336] cursor-pointer ease-in duration-200">
                    <i className="fa-solid fa-envelope text-[#ff0336]" />
                    &nbsp; gymabc@gxmail.com
                  </p>
                </div>
                {/* follow-us  */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">Follow Us</h3>
                  <div className="flex gap-5">
                    <span className="bg-[#ff0336] rounded-full py-[12px] px-[17px] cursor-pointer">
                      <i className="fa-brands fa-facebook-f text-[2.2rem] text-white" />
                    </span>
                    <span className="bg-[#ff0336] rounded-full py-[12px] px-[17px] cursor-pointer">
                      <i className="fa-brands fa-twitter text-[2.2rem] text-white" />
                    </span>
                    <span className="bg-[#ff0336] rounded-full py-[12px] px-[17px] cursor-pointer">
                      <i className="fa-brands fa-instagram text-[2.2rem] text-white" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* hamburger */}
            <i
              onClick={toggleHamburgerMenu}
              className="fa-bars fa-solid text-white hidden text-4xl cursor-pointer hover:text-[#ff0336] ease-in duration-200"
            />
            {/* account */}
            <Link onClick={goTop} to="/signup" title="signup_button">
              <i className="fa-regular fa-user text-white text-4xl cursor-pointer hover:text-[#ff0336] ease-in duration-200" />
            </Link>
            {/* sideBar */}
            <i
              onClick={toggleSidebar}
              className="fa-regular fa-chart-bar text-white text-4xl cursor-pointer hover:text-[#ff0336] ease-in duration-200"
            />
          </div>
          {/* spin box */}
          <div className="border-[rgb(255,255,255,0.3)] border-solid border-2 p-2 rounded-md min620:hidden">
            <Link
              onClick={goTop}
              to={"/contact"}
              onMouseEnter={joinSpin}
              onMouseLeave={stopSpin}
              className="flex items-center"
            >
              <i
                className={`fa-solid fa-plus bg-[#FF0336] text-white text-2xl py-3 px-4 rounded-md ${
                  spin ? "nav-btn-hover" : ""
                }`}
              />
              <h3 className="text-white text-[14px] font-bold uppercase ml-4 mr-8 tracking-wider">
                Join Class now
              </h3>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
