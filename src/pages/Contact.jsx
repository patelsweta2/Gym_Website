import Footer from "../components/footer/Footer";

const Contact = () => {
  return (
    <>
      <section>
        <div className="login-banner relative justify-center flex">
          <h1 className="bottom-[25px] text-[#ff0336] absolute text-[3rem] font-bold">
            Contact Us
          </h1>
        </div>
        {/* contact  */}
        <div className="bg-white py-[12rem] page-padding grid grid-cols-2 container gap-10 items-center md1000:grid-cols-1">
          {/* column-1  */}
          <div className="md1000:w-[60%] md1000:flex md1000:flex-col md1000:mx-auto min800:w-[90%] min620:w-full">
            <h2 className="text-black text-[36px] font-bold leading-[1.2]">
              We are here to support you in achieving your body shape goals!
            </h2>
            <p className="text-[16px] w-[95%] text-[#646464] font-medium my-[40px]">
              At FitPhysique, we are committed to helping you achieve your dream
              body. Our expert trainers and nutritionists will collaborate with
              you to create a personalized fitness and nutrition plan that meets
              your specific goals.
            </p>
            <div className="grid grid-cols-2 grid-rows-2 gap-y-20 min620:grid-cols-1 min620:mx-auto">
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">Bihar, India</h3>
                <span className="bg-[#ff0336] w-[60px] h-[4px] absolute top-[33px]"></span>
                <p className="text-[15px] font-medium text-[#646464]">
                  Ram Krishna Nagar,
                  <br />
                  pin:-80027
                </p>
              </div>
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">Opening Hours</h3>
                <span className="bg-[#ff0336] w-[60px] h-[4px] absolute top-[33px]"></span>
                <div className="text-[15px] font-medium text-[#646464]">
                  <p>Mon to Fri: 7:30 am — 1:00 am</p>
                  <p>Mon to Fri: 7:30 am — 1:00 am</p>
                </div>
              </div>
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">Information</h3>
                <span className="bg-[#ff0336] w-[60px] h-[4px] absolute top-[33px]"></span>
                <div className="text-[15px] font-medium text-[#646464]">
                  <p>+91- 1000300670</p>
                  <p>fitphysique@gxmail.com</p>
                </div>
              </div>
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">Follow Us On</h3>
                <span className="bg-[#ff0336] w-[60px] h-[4px] absolute top-[33px]"></span>
                <div className="text-[18px] font-medium text-black flex gap-5">
                  <i className="fa-brands fa-facebook-f px-[16px] py-[13px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white" />
                  <i className="fa-brands fa-twitter px-[16px] py-[13px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white" />
                  <i className="fa-brands fa-instagram px-[16px] py-[13px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white" />
                  <i className="fa-brands fa-pinterest-p px-[16px] py-[13px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white" />
                </div>
              </div>
            </div>
          </div>
          {/* second col  */}
          <form className="flex flex-col pt-[30px] pr-[50px] pb-[50px] pl-[45px] bg-[#d4bfbf] relative md1000:flex-col md1000:mx-auto md1000:mt-14 min800:w-[90%] min620:w-full">
            <h3 className="text-[28px] font-bold mb-14">Leave Us your Info</h3>
            <span className="bg-[#ff0336] w-[60px] h-[4px] absolute top-[77px]"></span>
            <input
              type="text"
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="Full Name *"
            />
            <input
              type="email"
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="Email Address *"
            />
            <select className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8">
              <option>Select Class</option>
              <option>Body Building</option>
              <option>Boxing</option>
              <option>Meditation</option>
              <option>Cycling</option>
              <option>Yoga</option>
              <option>Running</option>
              <option>Fitness</option>
              <option>Workout</option>
              <option>Katate</option>
            </select>
            <textarea
              placeholder="Comment"
              className="w-full py-[12px] px-[20px] h-[140px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
            />
            <button
              type="submit"
              className="text-white bg-[#ff0336] w-fit py-[15px] px-[30px] font-bold text-[14px] uppercase self-center mt-6"
            >
              Submit now
            </button>
          </form>
        </div>
        {/* map  */}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28791.487789001814!2d85.13562590023623!3d25.573796819538696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a764d4c9b843%3A0xddf40629db0746c!2sRamkrishan%20Nagar%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1717407739464!5m2!1sen!2sin"
          title="map"
          allowfullscreen=""
          samesite="Strict"
          loading="lazy"
          style={{ width: "100%", height: "45rem", border: "0px" }}
        ></iframe>
        <Footer />
      </section>
    </>
  );
};

export default Contact;
