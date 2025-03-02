import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import background from "../assets/contactus-bg.jpg";

const Login = () => {
  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload

    try {
      const response = await axios.post(
        "http://localhost:3000/api/admin/signin",
        {
          email,
          password,
        }
      );
      // Handle success response
      setMessage(response.data.message); // Display success message
      console.log(response.data); // You can redirect or show success notification here
    } catch (error) {
      // Handle error response
      if (error.response) {
        // The request was made, and the server responded with a status code outside of the range of 2xx
        setMessage(error.response.data.message); // Display error message from backend
        // console.log(error);
      } else {
        setMessage("An unexpected error occurred");
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div
        className="relative flex flex-col md:flex-row justify-between items-center p-8 md:p-16 bg-cover bg-center h-full"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Content */}
        <div className="relative flex flex-col w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-secondary text-2xl md:text-3xl font-bold pb-4 md:pb-8">
            Hey, welcome back!
          </h2>
          <p className="text-white text-lg md:pr-16">
            It`s great to see you again. Let`s continue providing exceptional
            care and making a difference together.
          </p>
        </div>

        <div className="relative w-1/2">
          <div className="flex flex-col max-w-xl p-8 md:p-16 bg-gray rounded-lg shadow-lg">
            <span className="text-2xl font-semibold pb-4 md:pb-8 text-black">
              Log In
            </span>
            <form onSubmit={handleSubmit}>
              <div
              // className="flex gap-4 mb-8"
              >
                <div>
                  <input
                    type="email"
                    value={email}
                    placeholder="Email *"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    value={password}
                    placeholder="Password *"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-secondary hover:text-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Login
              </button>
            </form>
            {message && <p>{message}</p>} {/* Display login result message */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
