import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Featured from "../components/featured/Featured";
import ChooseUs from "../components/chooseUs/ChooseUs";
import Trainers from "../components/trainers/Trainers";
import Testimonials from "../components/testimonials/Testimonial";
import Gallery from "../components/gallery/Gallery";
import BmiCalc from "../components/bmi/BmiCalc";
import Pricing from "../components/pricing/Pricing";
import Blog from "../components/blog/Blog";
import CtaBanner from "../components/ctaBanner/CtaBanner";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Featured />
      <ChooseUs />
      <Trainers />
      <Testimonials />
      <Gallery />
      <BmiCalc />
      <Pricing />
      <Blog />
      <CtaBanner />
      <Footer />
    </>
  );
};

export default Home;
