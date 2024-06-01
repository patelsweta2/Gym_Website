import MainButton from "../MainButton";

const CtaBanner = () => {
  return (
    <>
      <section className="cta-section w-full h-auto">
        <div className="container page-padding py-[7rem] text-white">
          <h2 className="text-[36px] font-bold">Need a Fitness Trainer</h2>
          <h3 className="text-[28px] font-bold mb-20">
            <span className="text-[#ff0336] ">Call:</span>+91 - 1000300670
          </h3>
          <MainButton
            color={`text-black`}
            bg={`bg-[#ff0336]`}
            text="Purchase now"
            arrowColor={`text-white`}
            cN="pricing-cta cta-banner-btn"
            goTo="/contact"
          />
        </div>
      </section>
    </>
  );
};

export default CtaBanner;
