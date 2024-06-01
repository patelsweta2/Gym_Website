import TitleRed from "../../images/who-we-are/title-bg.svg";
import TestimonialImg from "../../images/testimonials/testimonial-new.jpg";
import TestimonialBoxes from "./TestimonialBoxes";
import Logo1 from "../../images/testimonials/logo1.png";
import Logo2 from "../../images/testimonials/logo2.png";
import Logo3 from "../../images/testimonials/logo3.png";
import Logo4 from "../../images/testimonials/logo4.png";
import Logo5 from "../../images/testimonials/logo5.png";

const Testimonial = () => {
  return (
    <>
      <section className="my-[10rem] mx-auto">
        <div className="container page-padding">
          {/* title div  */}
          <div className="flex flex-col w-full items-center text-center relative">
            <p className="text-white relative z-10 text-[16px] uppercase font-bold -mb-[10.5rem]">
              Testimonials
            </p>
            <img
              src={TitleRed}
              alt="title_bg"
              className="absolute w-[21rem] -top-[6px]"
            />
          </div>
          {/* testimonial wrapper  */}
          <div className="border-[#efefef] mt-[17rem] md1000:mt-[9rem] bg-white border-solid border-[9px] p-[30px] min540:h-[48rem] min375:h-[60rem]">
            <div className="relative bg-emerald-900 overflow-x-clip w-full h-[33rem]">
              <img
                src={TestimonialImg}
                alt="girl_img"
                className="absolute bottom-0 -left-[10px] z-20 h-[46rem] rounded-tr-[200px] md1000:hidden"
              />
              <div className="flex">
                <TestimonialBoxes />
              </div>
              {/* buttons  */}
              <div className="flex gap-3 absolute bottom-[25px] right-[35px] z-20 min540:-bottom-[52px] min540:right-[17px]">
                <button
                  title="left"
                  style={{ transition: "all 0.2s" }}
                  className="py-5 px-7 bg-amber-400 text-black text-2xl hover:bg-[#ff0336] hover:text-white"
                >
                  <i className="fa-solid fa-arrow-left" />
                </button>
                <button
                  title="right"
                  style={{ transition: "all 0.2s" }}
                  className="py-5 px-7 bg-amber-400 text-black text-2xl hover:bg-[#ff0336] hover:text-white"
                >
                  <i className="fa-solid fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* brands logos  */}
        <div className="flex gap-5 justify-center mt-32 border-b border-solid border-[#64646438] pb-28 flex-wrap">
          <img
            src={Logo1}
            alt="logo"
            className="scale-[.8] hover:invert"
            style={{ transition: "all 0.3s" }}
          />
          <img
            src={Logo2}
            alt="logo"
            className="scale-[.8] hover:invert"
            style={{ transition: "all 0.3s" }}
          />
          <img
            src={Logo3}
            alt="logo"
            className="scale-[.8] hover:invert"
            style={{ transition: "all 0.3s" }}
          />
          <img
            src={Logo4}
            alt="logo"
            className="scale-[.8] hover:invert"
            style={{ transition: "all 0.3s" }}
          />
          <img
            src={Logo5}
            alt="logo"
            className="scale-[.8] hover:invert"
            style={{ transition: "all 0.3s" }}
          />
        </div>
      </section>
    </>
  );
};

export default Testimonial;
