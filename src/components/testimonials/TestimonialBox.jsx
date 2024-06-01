import Quotes from "../../images/testimonials/quotes.png";
import BoxShape from "../../images/testimonials/testimonial-shape.svg";

const TestimonialBox = ({ text, name, job }) => {
  return (
    <div className="absolute flex flex-col bg-emerald-900 top-0 right-0 w-[60%] md1000:w-full h-full py-[47px] px-[50px] min540:py-[24px] min540:h-[40rem] min375:h-[50rem]">
      <img src={Quotes} alt="quote_img" className="w-[6rem]" />
      <p className="text-[16px] italic text-[#dedede] my-6 z-10">{text}</p>
      <h3 className="text-white text-[21px] mb-1 font-bold">{name}</h3>
      <p className="text-[14px] font-medium text-[#dedede]">{job}</p>
      <img
        src={BoxShape}
        alt="box_img"
        className="w-[17.5rem] absolute bottom-1 right-[13.5rem] invert opacity-40"
      />
    </div>
  );
};

export default TestimonialBox;
