import TestimonialBox from "./TestimonialBox";
import { useState, useEffect } from "react";

const testimonials = [
  {
    text: "I've been part of Gymate for 6 months, and it's been incredible. The trainers are skilled and supportive, the equipment is high-quality, and the community is welcoming and motivating.",
    name: "Ravi Shashtri",
    job: "Indian Actor",
  },
  {
    text: "I've been part of Gymate for 6 months, and it's been incredible. The trainers are skilled and supportive, the equipment is high-quality, and the community is welcoming and motivating.",
    name: "Ravi Shashtri",
    job: "Indian Actor",
  },
  {
    text: "I've been part of Gymate for 6 months, and it's been incredible. The trainers are skilled and supportive, the equipment is high-quality, and the community is welcoming and motivating.",
    name: "Ravi Shashtri",
    job: "Indian Actor",
  },
];

const TestimonialBoxes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="testimonial-container">
      <div
        className="testimonial-slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-box-wrapper" key={index}>
            <TestimonialBox
              text={testimonial.text}
              name={testimonial.name}
              job={testimonial.job}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialBoxes;
