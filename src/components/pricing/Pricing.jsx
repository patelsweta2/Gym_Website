import PricingBox from "./PricingBox";
import TitleRed from "../../images/who-we-are/title-bg.svg";
import BgText from "../../images/pricing/bg-text.png";
import BgDumbell from "../../images/pricing/bg-dumbell.png";
import Img1 from "../../images/pricing/img1.jpg";
import Img2 from "../../images/pricing/img2.jpg";
import Img3 from "../../images/pricing/img5.jpg";

const Pricing = () => {
  return (
    <>
      <section id="pricing" className="pricing-section relative">
        <div className="container page-padding py-[12rem]">
          <img src={BgText} alt="bg_img" className="left-0 absolute" />
          <div className="flex flex-col text-center relative items-center">
            <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8">
              pricing chart
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[23rem] absolute -top-[10px]"
            />
            <h2 className="text-[3.4rem] font-bold mb-4">
              Exclusive Pricing Plan
            </h2>
            <p className="text-[#646464] font-medium text-[15px]">
              Gymat, by an unknown printer, involved taking a galley of type and
              scrambling <br />
              it to create a type specimen book.
            </p>
          </div>
          {/* Pricing box  */}
          <div className="flex gap-10 mt-32 relative z-[2] md1000:flex-col md1000:items-center">
            <PricingBox img={Img1} price={34} />
            <PricingBox img={Img2} price={78} />
            <PricingBox img={Img3} price={100} />
          </div>
          <img
            src={BgDumbell}
            alt="bg_icon"
            className="right-0 bottom-0 absolute z-[1]"
          />
        </div>
      </section>
    </>
  );
};

export default Pricing;
