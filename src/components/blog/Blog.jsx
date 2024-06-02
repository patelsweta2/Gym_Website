import TitleRed from "../../images/who-we-are/title-bg.svg";
import BlogBox from "./BlogBox";

const Blog = () => {
  return (
    <>
      <section id="blog" className="bg-white">
        <div className="container page-padding py-[10rem]">
          {/* title div -- */}
          <div className="flex flex-col text-center relative items-center">
            <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8">
              latest blog
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[23rem] absolute -top-[10px]"
            />

            <h2 className="text-[3.4rem] font-bold mb-4">Our Recent News</h2>
            <p className="text-[#646464] font-medium text-[15px] ">
              Gymat an unknown printer took a galley of type and scrambled
              <br /> make a type specimen book.
            </p>
          </div>
          {/* blog boxes  */}
          <div className="flex gap-6 w-full mt-[5rem] md1200:justify-center flex-wrap">
            <BlogBox
              bgClass="box1Bg"
              date="02.06.2024"
              title="Yoga for Everyone in 2024"
              description="This program is designed to make yoga practice beneficial for individuals of all ages, abilities, and backgrounds."
            />
            <BlogBox
              bgClass="box1Bg"
              date="02.06.2024"
              title="Yoga for Everyone in 2024"
              description="This program is designed to make yoga practice beneficial for individuals of all ages, abilities, and backgrounds."
            />
            <BlogBox
              bgClass="box1Bg"
              date="02.06.2024"
              title="Yoga for Everyone in 2024"
              description="This program is designed to make yoga practice beneficial for individuals of all ages, abilities, and backgrounds."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
