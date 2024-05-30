import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Featured from "../components/featured/Featured";
import ChooseUs from "../components/chooseUs/ChooseUs";
import Trainers from "../components/trainers/Trainers";
import Testimonials from "../components/testimonials/Testimonial";
import Gallery from "../components/gallery/Gallery";

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
    </>
  );
};

export default Home;
