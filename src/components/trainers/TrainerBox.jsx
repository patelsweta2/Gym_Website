import { useState } from "react";
import Trainer1 from "../../images/trainers/trainer1.png";
import Trainer2 from "../../images/trainers/trainer2.png";
import Trainer3 from "../../images/trainers/trainer3.png";
import Shape from "../../images/trainers/shape.png";

const TrainerBox = () => {
  const [imgHover, setImgHover] = useState(false);
  const hoverBox = () => {
    setImgHover(true);
  };
  const hoverBoxRemove = () => {
    setImgHover(false);
  };
  const trainers = [
    { img: Trainer1, name: "Dylan Brooks", job: "Karate Trainer" },
    { img: Trainer2, name: "Jordan Blake", job: "Yoga Trainer" },
    { img: Trainer3, name: "Mia Collins", job: "Personal Trainer" },
  ];

  return (
    <>
      <div
        className="flex justify-center gap-[5rem] md1200:flex-wrap"
        style={{ margin: "0 auto" }}
      >
        {trainers.map((train, id) => (
          <div
            onMouseEnter={hoverBox}
            onMouseLeave={hoverBoxRemove}
            key={id}
            className="relative cursor-pointer w-[35rem] min450:w-full flex flex-col bg-red-600 rounded-lg select-none"
          >
            {/* trainer img */}
            <img
              src={train.img}
              alt="trainer"
              className={`w-[22rem] z-10 relative grayscale mx-auto 
                ${imgHover ? "hover:grayscale-0" : ""}`}
            />

            {/* trainer description  */}
            <div className="box-desc bg-white w-full text-center shadow-lg z-20 rounded-[6px] px-[20px] py-[30px] absolute -bottom-[31px]">
              <img
                src={Shape}
                alt="shape"
                className="absolute -top-[25px] left-[113px]"
              />
              <i className="fa-solid fa-angle-up absolute -top-[16px] left-[162px] text-3xl" />
              <h3 className="font-bold text-[2.4rem]">{train.name}</h3>
              <p className="font-medium text-[1.5rem] text-[#646464]">
                {train.job}
              </p>
              <div className="flex gap-8 text-[#646464] w-full justify-center mt-5 text-[1.6rem]">
                <i className="fa-brands fa-facebook-f" />
                <i className="fa-brands fa-twitter" />
                <i className="fa-brands fa-instagram" />
                <i className="fa-regular fa-envelope" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TrainerBox;
