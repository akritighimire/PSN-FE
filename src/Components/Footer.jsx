import Logo from "../assets/HomeImage/logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row flex-wrap lg:justify-between lg:flex-row bg-primary text-white p-8 lg:p-16 gap-8">
        <div className="flex flex-col mb-8 lg:mb-0">
          <div className="flex pb-3">
            <img className="w-16 h-12 pr-2" src={Logo} alt="logo" />
            <div className="text-secondary">
              <span className="text-2xl">PEDIATRIC</span> <p>Surgeon Nepal</p>
            </div>
          </div>
          <div className="pb-3">
            <p>
              <span className="text-secondary">Email: </span>
              <a href="mailto:pedsurg.nepal@gmail.com">
                pedsurg.nepal@gmail.com
              </a>
            </p>
            <p>
              <span className="text-secondary">Phone:</span>{" "}
              <a href="tel:01-4411550">01-4411550</a>
            </p>
          </div>
          <div className="flex space-x-4 pr-12">
            <a href="#">
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                className="text-secondary"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="text-secondary"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="text-secondary"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col mb-8 lg:mb-0">
          <ul className="text-lg font-semibold">
            <li className="pb-4 hover:text-secondary hover:underline">
              <a href="#">Home</a>
            </li>
            <li className="pb-4 hover:text-secondary hover:underline">
              <a href="#">E-Pharmacy</a>
            </li>
            <li className="pb-4 hover:text-secondary hover:underline">
              <a href="#">Contact Us</a>
            </li>
            <li className="pb-4 hover:text-secondary hover:underline">
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col mb-8 lg:mb-0">
          <div className="text-lg font-semibold pb-2 hover:text-secondary hover:underline">
            Pediatrics
          </div>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-secondary">
              <a href="#">General Pediatrics</a>
            </li>
            <li className="hover:text-secondary">
              <a href="#">Infant Care</a>
            </li>
            <li className="hover:text-secondary">
              <a href="#">Adolescent Care</a>
            </li>
            <li className="hover:text-secondary">
              <a href="#">Chronic Conditions</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col mb-8 lg:mb-0">
          <div className="text-lg font-semibold pb-2 hover:text-secondary hover:underline">
            Pediatric Surgery
          </div>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-secondary">
              <a href="#">Emergency Surgeries</a>
            </li>
            <li className="hover:text-secondary">
              <a href="#">Pre-Surgery Preparation</a>
            </li>
            <li className="hover:text-secondary">
              <a href="#">Post-Surgery Care</a>
            </li>
            <li className="hover:text-secondary">
              <a href="#">Common Pediatric Surgeries</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col mb-8 lg:mb-0">
          <div className="text-lg font-semibold pb-2 hover:text-secondary hover:underline">
            Vaccines
          </div>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-secondary">
              <a href="#">Routine </a>
            </li>
            <li className="hover:text-secondary">
              <a href="#">Seasonal</a>
            </li>
            <li className="hover:text-secondary">
              <a href="#">Immunization</a>
            </li>
            <li className="hover:text-secondary">
              <a href="#">Travel Vaccines</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <div className="text-lg font-semibold pb-2 hover:text-secondary hover:underline">
            Doctors
          </div>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-secondary">
              <a href="#">Pediatricians </a>
            </li>
            <li className="hover:text-secondary">
              <a href="#">Surgeons</a>
            </li>
            <li className="hover:text-secondary">
              <a href="#">Appointment</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
