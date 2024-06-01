import FooterLogo from "../../images/logo/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="container page-padding py-[10rem]">
        <div className="flex justify-between min620:flex-col min620:items-center min620:text-center min620:gap-[5rem] !text-left">
          <div className="flex flex-col w-1/3 gap-8">
            <img src={FooterLogo} alt="footer_logo" className="w-[18rem]" />
            <p className="text-[15px] font-medium text-white">
              Transform your body and health with our thorough program crafted
              to assist you in meeting your fitness objectives.
            </p>
            {/* socials  */}
            <div className="flex gap-7 text-[18px] text-[#646464] min540:justify-center">
              <i
                style={{ transition: "all 0.3s" }}
                className="fa-brands fa-facebook-f bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ff0366] hover:text-white"
              />
              <i
                style={{ transition: "all 0.3s" }}
                className="fa-brands fa-twitter bg-[#efefef] p-4 rounded-full hover:bg-[#ff0366] hover:text-white"
              />
              <i
                style={{ transition: "all 0.3s" }}
                className="fa-brands fa-pinterest-p bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ff0366] hover:text-white"
              />
              <i
                style={{ transition: "all 0.3s" }}
                className="fa-brands fa-youtube bg-[#efefef] p-4 rounded-full hover:bg-[#ff0366] hover:text-white"
              />
            </div>
            <p className="text-[16px] font-medium text-[#ada1a1]">
              Privacy Policy | © {new Date().getFullYear()} Gymate <br /> Design
              by{" "}
              <a
                target="_blanck"
                rel="noreferrer"
                href="https://www.radiustheme.com/"
              >
                RadiusTheme
              </a>
            </p>
          </div>
          {/* middle div  */}
          <div className="flex flex-col gap-8 relative">
            <p className="text-[22px] font-bold footer-main">Our Classes</p>
            <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>
            <p className="text-[16px] hover:text-[#ff0336] cursor-pointer text-[#d5c1c1] font-medium hover:font-bold">
              Fitness Classes
            </p>
            <p className="text-[16px] hover:text-[#ff0336] cursor-pointer text-[#d5c1c1] font-medium hover:font-bold">
              Aerobic Classes
            </p>
            <p className="text-[16px] hover:text-[#ff0336] cursor-pointer text-[#d5c1c1] font-medium hover:font-bold">
              Yoga Classes
            </p>
            <p className="text-[16px] hover:text-[#ff0336] cursor-pointer text-[#d5c1c1] font-medium hover:font-bold">
              Boxing Classes
            </p>
            <p className="text-[16px] hover:text-[#ff0336] cursor-pointer text-[#d5c1c1] font-medium hover:font-bold">
              Karate Classes
            </p>
          </div>
          {/* right div  */}
          <div className="flex flex-col gap-8 relative">
            <p className="text-[22px] font-bold footer-main">Working Hours</p>
            <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0336]"></span>
            <p className="text-[16px] text-[#d5c1c1] font-bold">
              Monday - Friday:
            </p>
            <p className="text-[16px] text-[#d5c1c1] font-medium">
              8:00am-22:00pm
            </p>
            <p className="text-[16px] text-[#d5c1c1] font-bold">Saturday:</p>
            <p className="text-[16px] text-[#d5c1c1] font-medium">
              6:00am-22:00pm
            </p>
            <p className="text-[16px] text-[#d5c1c1] font-bold">
              Sunday - Closed
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
