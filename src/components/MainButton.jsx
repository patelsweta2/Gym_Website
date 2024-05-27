import { Link } from "react-router-dom";

const MainButton = ({ color, bg, cN, arrowColor, hover, text, goTo }) => {
  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <Link
      onClick={goTop}
      to={goTo}
      className={`text-[15px] ${color} ${bg} ${cN} text-center pt-[18px] font-[600] w-[20rem] h-[5.5rem] uppercase hero-cta relative ml-2 ${hover}`}
    >
      {text} &nbsp;
      <i className={`fa-solid fa-arrow-right text-[#ff0336] ${arrowColor}`} />
    </Link>
  );
};

export default MainButton;
