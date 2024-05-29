import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Featured from "../components/featured/Featured";
import ChooseUs from "../components/chooseUs/ChooseUs";
import Trainers from "../components/trainers/Trainers";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Featured />
      <ChooseUs />
      <Trainers />
    </>
  );
};

export default Home;
