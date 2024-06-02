import { Link } from "react-router-dom";

const BlogBox = ({ date, title, description }) => {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "none",
    });
  };
  return (
    <>
      <div className="w-[37rem] min540:w-[100%] shadow-xl bg-rose-300 flex flex-col px-[3rem] py-[5rem]">
        {/* data  */}
        <p className="text-[15px] font-bold text-[#323232] border-[#323232] border-solid rounded-full border-[1px] w-fit px-5 py-2 mb-6">
          {date}
        </p>
        {/* title  */}
        <h3 className="text-[22px] font-bold py-5">{title}</h3>
        <p className="text-[15px] text-[#646464] font-medium">{description}</p>
        {/* blog cta  */}
        <Link
          to="/blog"
          onClick={goTop}
          className="text-[15px] uppercase font-bold mt-10 w-[16rem] h-[5rem] bg-[#ff0336] text-white text-center pt-[14px]"
        >
          Read more &nbsp;
          <i className="fa-solid fa-arrow-right" />
        </Link>
      </div>
    </>
  );
};

export default BlogBox;
