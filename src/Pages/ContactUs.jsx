import { useState } from "react";
import background from "../assets/HomeImage/Bg.png";

// import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faEnvelope,
  faLocationDot,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set loading to true when form submission begins
    setLoading(true);

    const serviceID = "service_3s8uy2n";
    const templateID = "template_lbg09dc";
    const userID = "cUPZ5SqFTkfM39zNK"; //public key

    // Send email using emailjs
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccess(true);
        setError(null);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setError("Failed to send message. Please try again later.");
      })
      .finally(() => {
        // Set loading to false when form submission is complete
        setLoading(false);
      });
  };

  return (
    <>
      {/* <Navbar /> */}
      <div
        className="relative flex flex-col md:flex-row justify-between items-center p-8 md:p-16 bg-cover bg-center h-full"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="flex flex-wrap">
          <div className="relative flex flex-col justify-center w-full md:w-1/2 mb-8 md:mb-0 ">
            <h2 className="text-secondary text-2xl md:text-3xl font-bold pb-4 md:pb-8">
              Contact Us
            </h2>
            <p className="text-white text-lg md:pr-16">
              We are here to help! Whether you have questions about our
              services, need to schedule an appointment, or want to learn more
              about pediatric care, our team is ready to assist you. Reach out
              to us today, and we’ll get back to you as soon as possible.
            </p>
          </div>

          {/* Form */}
          <div className="relative">
            <div className="flex flex-col max-w-xl p-8 md:p-16 bg-[#F7F7F7] rounded-lg shadow-lg">
              <span className="text-2xl font-semibold pb-4 md:pb-8 text-black">
                We’d love to hear from you! <br />
                Let’s get in touch
              </span>

              <form onSubmit={handleSubmit}>
                {/* Name and Phone Input */}
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="mb-4 md:mb-0 md:mr-4 w-full">
                    <input
                      type="text"
                      id="name"
                      placeholder="Name *"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full mt-1 p-2 border border-[#8f8787] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="mb-4 md:mb-0 w-full">
                    <input
                      type="text"
                      id="phone"
                      placeholder="Phone *"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full mt-1 p-2 border border-[#8f8787] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Email and Address Input */}
                <div className="flex flex-col md:flex-row justify-between mt-4">
                  <div className="mb-4 md:mb-0 md:mr-4 w-full">
                    <input
                      type="email"
                      id="email"
                      placeholder="Email *"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full mt-1 p-2 border border-[#8f8787] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="mb-4 w-full">
                    <input
                      type="text"
                      id="address"
                      placeholder="Address *"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full mt-1 p-2 border border-[#8f8787] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="mb-4 mt-4">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 w-full h-32 border border-[#8f8787] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-secondary hover:text-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
                {success && (
                  <p className="text-green-500 mt-4">
                    Message sent successfully!
                  </p>
                )}
                {error && <p className="text-red-500 mt-4">{error}</p>}
              </form>
            </div>
          </div>
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
          <span className="text-black  text-base md:text-xl">
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
          <span className="text-black 0 text-base md:text-xl">9876543210</span>
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
          <span className="text-black text-base md:text-xl">
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
          <span className="text-black text-base md:text-xl">
            24 Hours/ 7 days a week
          </span>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
