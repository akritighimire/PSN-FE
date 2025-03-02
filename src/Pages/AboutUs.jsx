import { useState } from "react";
// import Img1 from "../assets/about1.jpg";
import Img1 from "../assets/Aboutpage/about1.jpg";
import Img2 from "../assets/Aboutpage/about2.jpg";
import Img3 from "../assets/Aboutpage/about3.jpg";


import background from "../assets/HomeImage/Bg.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faEnvelope,
  faLocationDot,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  const [activeComponent, setActiveComponent] = useState("Component1");

  // Function to set the active component
  const showComponent = (componentName) => {
    setActiveComponent(componentName);
  };

  const Component1 = () => (
    <div className="flex">
      <div className="flex flex-col  w-2/3">
        <p className="pb-4 pr-16">
          At our pediatric surgery practice, we are committed to leveraging the
          latest in modern technology to provide the highest standard of care
          for children in Nepal. From advanced diagnostic tools to minimally
          invasive surgical techniques, modern technology allows us to enhance
          precision, improve outcomes, and reduce recovery times for young
          patients. Our surgeons stay updated with global advancements, ensuring
          that children receive the most effective, safe, and compassionate
          treatment available. We believe that embracing innovation is key to
          delivering the best healthcare possible for the next generation.
        </p>
        <ul className="list-disc px-4">
          <li>Minimally Invasive Surgery</li>
          <li>Precision Diagnostics</li>
          <li>Telemedicine</li>
          <li>Real-Time Monitoring</li>
          <li>Global Best Practices</li>
        </ul>
      </div>
      <div className="w-1/3 h-auto">
        <img src={Img1} alt="img" />
      </div>
    </div>
  );
  const Component2 = () => (
    <div className="flex h-full">
      <div className="flex flex-col w-2/3">
        <p className="pb-4 pr-16">
          At our pediatric surgery practice, we take pride in delivering
          successful treatments for children across Nepal. Our high success rate
          is the result of a combination of personalized care, advanced
          technology, and a dedicated team of specialists who are experienced in
          pediatric healthcare. By utilizing state-of-the-art equipment and
          modern surgical techniques, we ensure that each treatment is safe,
          effective, and tailored to the unique needs of every child. We also
          emphasize continuous post-operative care to ensure a smooth recovery
          and positive long-term outcomes. Our commitment to providing the best
          care, supported by cutting-edge technology, means that families can
          trust us to deliver optimal results for their children.
        </p>
        <ul className="list-disc px-4">
          <li>Personalized Care Plans</li>
          <li>Advanced Technology</li>
          <li>Expert Team</li>
          <li>Post-Operative Support</li>
        </ul>
      </div>
      <div className="w-1/3 h-auto">
        <img src={Img2} alt="img" />
      </div>
    </div>
  );

  const Component3 = () => (
    <div className="flex">
      <div className="flex flex-col w-2/3">
        <p className="pb-4 pr-16">
          Our team of pediatric surgeons is composed of highly trained and
          certified professionals who are dedicated to providing the best care
          for children. Each doctor at our practice holds advanced
          certifications and specialized training in pediatric surgery, ensuring
          that your child is in the hands of experts. We continuously update our
          knowledge and skills to stay at the forefront of medical advancements.
          Our doctors are committed to delivering compassionate care while
          maintaining the highest standards of safety and professionalism. With
          years of experience and a passion for improving the health of
          children, our certified doctors are here to provide the best possible
          treatment for your child.
        </p>
        <ul className="list-disc px-4">
          <li>Advanced Qualifications</li>
          <li>Board Certification</li>
          <li>Continual Learning</li>
          <li>Compassionate Care</li>
          <li>Experience and Expertise </li>
        </ul>
      </div>
      <div className="w-1/3 h-auto">
        <img src={Img3} alt="img" />
      </div>
    </div>
  );

  return (
    <>
      <div
        className="relative flex flex-col justify-between items-center p-8 md:p-16 bg-cover bg-center h-full text-white"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col w-full  mb-8 md:mb-0">
          <div className="text-center text-white">
            <h1 className="text-secondary text-2xl md:text-3xl font-bold pb-4 ">
              About Us
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ac lectus sollicitudin id
              habitant mattis integer amet.
            </p>
          </div>

          <div className="App py-16 px-16 flex gap-8 ">
            <button
              className="border-b-4 w-1/3 text-xl hover:text-secondary"
              onClick={() => showComponent("Component1")}
            >
              Modern Technology
            </button>
            <button
              className="border-b-4 w-1/3 text-xl hover:text-secondary"
              onClick={() => showComponent("Component2")}
            >
              Success of Treatments
            </button>
            <button
              className="border-b-4 w-1/3 text-xl hover:text-secondary"
              onClick={() => showComponent("Component3")}
            >
              Certified Doctors
            </button>
          </div>

          {/* Conditional Rendering */}
          {activeComponent === "Component1" && <Component1 />}
          {activeComponent === "Component2" && <Component2 />}
          {activeComponent === "Component3" && <Component3 />}
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between p-6 md:p-12 lg:p-16 gap-8 md:gap-4">
        <div className="flex flex-col items-center text-center">
          <FontAwesomeIcon
            icon={faLocationDot}
            size="2x"
            className="text-primary text-4xl md:text-6xl pb-2 md:pb-4"
          />
          <span className="text-xl md:text-2xl font-semibold pb-1 md:pb-2">
            Address
          </span>
          <span className="text-black text-base md:text-xl">
            Abc, abc, Kathmandu
          </span>
        </div>
        <div className="flex flex-col items-center text-center">
          <FontAwesomeIcon
            icon={faMobileScreen}
            size="2x"
            className="text-primary text-4xl md:text-6xl pb-2 md:pb-4"
          />
          <span className="text-xl md:text-2xl font-semibold pb-1 md:pb-2">
            Phone Number
          </span>
          <span className="text-black  text-base md:text-xl">9876543210</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            className="text-primary text-4xl md:text-6xl pb-2 md:pb-4"
          />
          <span className="text-xl md:text-2xl font-semibold pb-1 md:pb-2">
            E-mail Address
          </span>
          <span className="text-black  text-base md:text-xl">
            abc.nepal@gmail.com
          </span>
        </div>
        <div className="flex flex-col items-center text-center">
          <FontAwesomeIcon
            icon={faCalendarDays}
            size="2x"
            className="text-primary text-4xl md:text-6xl pb-2 md:pb-4"
          />
          <span className="text-xl md:text-2xl font-semibold pb-1 md:pb-2">
            Working Days/Hours
          </span>
          <span className="text-black  text-base md:text-xl">
            24 Hours/ 7 days a week
          </span>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
