import Footer from "../components/footer/Footer";
import Pricing from "../components/pricing/Pricing";

const Price = () => {
  return (
    <>
      <section className="login-section">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Pricing
          </h1>
        </div>
        <Pricing />
        <Footer />
      </section>
    </>
  );
};

export default Price;
