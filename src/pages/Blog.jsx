import BlogBox from "../components/blogBox/BlogBox";
import Footer from "../components/footer/Footer";
import Img1 from "../images/blogPage/blog2.jpg";
import Img2 from "../images/blogPage/blog4.jpg";
import Img3 from "../images/blogPage/blog1.jpg";
import Img4 from "../images/blogPage/blog3.jpg";
import Img5 from "../images/blogPage/blog5.jpg";
import Img6 from "../images/blogPage/blog6.jpg";
import Img7 from "../images/blogPage/blog7.jpg";
import Recent1 from "../images/blogPage/blog2_small.jpg";
import Recent2 from "../images/blogPage/blog4_small.jpg";
import Recent3 from "../images/blogPage/blog1_small.jpg";
import Recent4 from "../images/blogPage/blog3_small.jpg";
import Recent5 from "../images/blogPage/blog5_small.jpg";
import Recent6 from "../images/blogPage/blog6_small.jpg";

const Blog = () => {
  return (
    <>
      <section>
        <div className="login-banner relative justify-center flex">
          <h1 className="text-[#ff0336] absolute bottom-[25px] text-[3rem] font-bold">
            Blog
          </h1>
        </div>
        {/* blog  */}
        <div className="py-[10rem] container gap-16 page-padding grid grid-cols-[64fr_35fr] md1000:grid-cols-1 md1000:gap-32">
          <div className="flex flex-col gap-28">
            <BlogBox img={Img1} title="Yoga For Everyone in 2022" />
            <BlogBox
              img={Img2}
              title="Getting Back Into CrossFit After Vacation"
            />
            <BlogBox img={Img3} title="Meet Fitness Ambassador Grace" />
            <BlogBox img={Img4} title="The Best are European Materls Direct" />
            <BlogBox
              img={Img5}
              title="Give your Fitness a Boost with our Gym"
            />
            <BlogBox
              img={Img6}
              title="How to Get Fit Your Kids Moving Throughout The Summer"
            />
            <BlogBox
              img={Img7}
              title="Give your fitness a boost with our new gym challenge"
            />
          </div>
          {/* sidebar  */}
          <div>
            {/* form  */}
            <form className="flex">
              <input
                className="border-solid border-[1px] text-[#444] text-[16px] font-medium h-[60px] py-[5px] px-[20px] w-full rounded-tl-xl rounded-bl-xl outline-none"
                type="search"
                placeholder="Search..."
              />
              <button type="submit">
                <i className="fa-solid fa-magnifying-glass bg-[#ff0336] text-white text-[23px] h-[60px] w-[60px] rounded-br-xl rounded-tr-xl pt-[18px]" />
              </button>
            </form>
            {/* categories  */}
            <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
              <p className="text-[18px] text-black font-bold mb-5">
                categories
              </p>
              <span className="w-[50px] h-[3.5px] bg-[#ff0336]"></span>
              <ul className="text-[16px] text-[#7e7e7e] font-medium mt-10">
                <li className="flex cursor-pointer justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                  <p>
                    <i className="fa-solid fa-chevron-right text-[13px]" />
                    &nbsp; Body Building
                  </p>
                  <span>(4)</span>
                </li>
                <li className="flex cursor-pointer justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                  <p>
                    <i className="fa-solid fa-chevron-right text-[13px]" />
                    &nbsp; Cycling
                  </p>
                  <span>(4)</span>
                </li>
                <li className="flex cursor-pointer justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                  <p>
                    <i className="fa-solid fa-chevron-right text-[13px]" />
                    &nbsp; Boxing
                  </p>
                  <span>(4)</span>
                </li>
                <li className="flex cursor-pointer justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                  <p>
                    <i className="fa-solid fa-chevron-right text-[13px]" />
                    &nbsp; Crossfit
                  </p>
                  <span>(4)</span>
                </li>
                <li className="flex cursor-pointer justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                  <p>
                    <i className="fa-solid fa-chevron-right text-[13px]" />
                    &nbsp; Fitness
                  </p>
                  <span>(4)</span>
                </li>
                <li className="flex cursor-pointer justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                  <p>
                    <i className="fa-solid fa-chevron-right text-[13px]" />
                    &nbsp; Meditation
                  </p>
                  <span>(4)</span>
                </li>
              </ul>
            </div>
            {/* recent posts  */}
            <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
              <p className="text-[18px] text-black font-bold mb-5">
                Recent Posts
              </p>
              <span className="w-[50px] h-[3.5px] bg-[#ff0336] mb-7"></span>
              <div className="flex flex-col gap-7">
                {/*  */}
                <div className="flex gap-8">
                  <img src={Recent1} alt="recent_img" className="w-[10rem]" />
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      May 12, 2024
                    </p>
                    <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                      Yoga for everyone on 2024
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-8">
                  <img src={Recent2} alt="recent_img" className="w-[10rem]" />
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      May 12, 2024
                    </p>
                    <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                      Yoga for everyone on 2024
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-8">
                  <img src={Recent3} alt="recent_img" className="w-[10rem]" />
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      May 12, 2024
                    </p>
                    <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                      Yoga for everyone on 2024
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-8">
                  <img src={Recent4} alt="recent_img" className="w-[10rem]" />
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      May 12, 2024
                    </p>
                    <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                      Yoga for everyone on 2024
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-8">
                  <img src={Recent5} alt="recent_img" className="w-[10rem]" />
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      May 12, 2024
                    </p>
                    <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                      Yoga for everyone on 2024
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-8">
                  <img src={Recent6} alt="recent_img" className="w-[10rem]" />
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      May 12, 2024
                    </p>
                    <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                      Yoga for everyone on 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* popular tags  */}
            <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
              <p className="text-[18px] text-black font-bold mb-5">
                Popular Tags
              </p>
              <span className="w-[40px] h-[3.5px] bg-[#ff0336] mb-7"></span>
              <div className="flex gap-3 text-[16px] text-[#646464] font-medium flex-wrap">
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #crossfit
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Meditation
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Gym
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Fitness
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Workout
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Cycling
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Running
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Boxing
                </p>
              </div>
            </div>
            {/* banner  */}
            <div className="blog-banner w-full h-[56rem] relative">
              <p className="absolute text-[34px] font-bold uppercase top-38 left-10 z-[2]">
                FitPhysique
              </p>
              <span className="banner-shape top-34 left-0 z-[1] bg-white absolute w-[28.7rem] h-[64px]"></span>
              <div className="text-white flex flex-col absolute top-[10rem] left-10">
                <p className="text-[64px] font-bold">34%</p>
                <p className="text-[20px] font-bold -mt-[10px]">
                  Flat Discount
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
