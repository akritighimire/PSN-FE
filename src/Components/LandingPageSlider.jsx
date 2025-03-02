import { useState, useEffect } from "react";

// import bgImage from '../assets/HomeImage/LandingPage/img3.png';
import slideImage1 from "../assets/HomeImage/LandingPage/img1.jpg";
import slideImage2 from "../assets/HomeImage/LandingPage/img2.jpg";
import slideImage3 from "../assets/HomeImage/LandingPage/img3.png";
import { Link } from "react-router";

const LandingPageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Slide index state

  const slideImages = [slideImage1, slideImage2, slideImage3];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideImages.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative">
      {/* Background Image Slider */}
      <div className="relative">
        <img
          src={slideImages[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-[500px] object-cover opacity-90"
        />

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Polygon Shape with left slant and text */}
        <Link
          to="/jrrmc"
          className="absolute top-10 right-0 w-60 h-16 bg-primary text-white flex items-center justify-center font-bold"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%)" }}
        >
          JRRMC ALUMNI
        </Link>

        {/* Slider Dots */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slideImages.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPageSlider;
