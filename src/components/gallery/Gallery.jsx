import TitleRed from "../../images/who-we-are/title-bg.svg";

const Gallery = () => {
  return (
    <>
      <section className="">
        <div className="container page-padding py-[10rem]">
          {/* title div  */}
          <div className="flex flex-col items-center text-center relative">
            <p className="text-white relative z-10 text-[16px] uppercase font-bold mb-10">
              gymat gallery
            </p>
            <img
              src={TitleRed}
              alt="title_bg"
              className="absolute w-[21rem] -top-[6px]"
            />
            <h2 className="text-[3.4rem] font-bold mb-4">
              Our Workplace Gallery
            </h2>
            <p className="text-[#646464] font-medium text-[15px]">
              Our Workplace Gallery features modern office, team collaboration,
              and fun culture.
              <br />
              Attracts talents and showcases company's work atmosphere
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
