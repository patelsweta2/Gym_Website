import TitleRed from "../../images/who-we-are/title-bg.svg";

const Testimonial = () => {
  return (
    <>
      <section className="my-[10rem] mx-auto">
        <div className="container page-padding">
          {/* title div  */}
          <div className="flex flex-col w-full items-center text-center relative">
            <p className="text-white relative z-10 text-[16px] uppercase font-bold -mb-[10.5rem]">
              Testimonials
            </p>
            <img
              src={TitleRed}
              alt="title_bg"
              className="absolute w-[21rem] -top-[6px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
