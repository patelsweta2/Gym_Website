import TitleRed from "../../images/who-we-are/title-bg.svg";
import TrainerBox from "./TrainerBox";

const Trainers = () => {
  return (
    <>
      <section id="team" className="trainers-section">
        <div className="container page-padding py-[10rem]">
          {/* title div  */}
          <div className="flex flex-col items-center text-center relative">
            <p className="text-white relative z-10 text-[16px] uppercase font-bold mb-10">
              gym trainers
            </p>
            <img
              src={TitleRed}
              alt="title_bg"
              className="absolute w-[21rem] -top-[6px]"
            />
            <h2 className="text-[3.4rem] font-bold mb-4">
              Specialized Coaching Experts
            </h2>
            <p className="text-[#646464] font-medium text-[15px]">
              Expert team of coaches helps you succeed in any goal,
              <br />
              personalized guidance and motivation provided!
            </p>
          </div>

          <div className="flex mt-20">
            <TrainerBox />
          </div>
        </div>
      </section>
    </>
  );
};

export default Trainers;
