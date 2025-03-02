import { useState } from "react";
import background from "../assets/HomeImage/Bg.png"; // Assuming this is the path to your background image

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    appointmentDate: "",
    preferredTime: "",
    fullName: "",
    gender: "",
    email: "",
    age: "",
    address: "",
    phoneNumber: "",
    problemDescription: "",
    consent: false,
  });

  const [message, setMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Handle the form submission (post to your backend)
      const response = await fetch(
        "http://localhost:3000/api/user/appointment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setMessage(`Appointment registered successfully! ID: ${data.id}`);
      } else {
        const data = await response.json();
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to register appointment");
    }
  };

  return (
    <div
      className="relative flex flex-col justify-between items-center p-8 md:p-16 bg-cover bg-center h-full text-white"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-2xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Appointment Form
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-8">
          {/* Appointment Date */}
          <div className="mb-4">
            <input
              placeholder="Appointment Date"
              type="date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              className="px-4 py-2 w-[280px] focus:outline-none bg-transparent border-b-2"
              required
            />
          </div>

          {/* Preferred Time */}
          <div className="mb-4">
            <input
              placeholder="Preferred Time"
              type="time"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="px-4 py-2 w-[280px] focus:outline-none bg-transparent border-b-2"
              required
            />
          </div>

          {/* Full Name */}
          <div className="mb-4">
            <input
              placeholder="Full Name"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="px-4 py-2 w-[280px] focus:outline-none bg-transparent border-b-2"
              required
            />
          </div>

          {/* Gender */}
          <div className="mb-4">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-[280px] px-4 py-2 focus:outline-none bg-transparent border-b-2"
              required
            >
              <option className="text-black" value="">
                Select Gender
              </option>
              <option className="text-black" value="Male">
                Male
              </option>
              <option className="text-black" value="Female">
                Female
              </option>
              <option className="text-black" value="Other">
                Other
              </option>
            </select>
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              placeholder="E-mail"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-[280px] px-4 py-2 focus:outline-none bg-transparent border-b-2"
              required
            />
          </div>

          {/* Age */}
          <div className="mb-4">
            <input
              placeholder="Age"
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-[280px] px-4 py-2 focus:outline-none bg-transparent border-b-2"
              required
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <input
              placeholder="Address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-[280px] px-4 py-2 focus:outline-none bg-transparent border-b-2"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <input
              placeholder="Phone Number"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-[280px] px-4 py-2 focus:outline-none bg-transparent border-b-2"
              required
            />
          </div>

          {/* Problem Description */}
          <div className="mb-4 w-full">
            <textarea
              placeholder="Describe Your Problem"
              name="problemDescription"
              value={formData.problemDescription}
              onChange={handleChange}
              className="w-full px-4 py-2 focus:outline-none bg-transparent border-b-2"
              rows="4"
              required
            />
          </div>

          {/* Consent */}
          <div className="mb-4 w-full">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="form-checkbox"
                required
              />
              <span className="ml-2 text-white">
                I agree to the terms and conditions
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary hover:text-black transition duration-300"
          >
            Submit
          </button>
        </form>

        {message && <p className="mt-4 text-white">{message}</p>}
      </div>
    </div>
  );
};

export default AppointmentForm;
