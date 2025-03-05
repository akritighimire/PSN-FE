


import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import background from "../assets/HomeImage/Bg.png";

const RegisterDr = () => {
  const [JrrmcSearchInput, setJrrmcSearchInput] = useState(""); // Capture search input value
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const [formData, setFormData] = useState({
    fullName: "",
    batch: "",
    degree: "",
    email: "",
    workingPlace: "",
    photo: "", // File input
    address: "",
    nmcNumber: "",
    specialization: "",
    phoneNumber: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input changes (photo)
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photo: e.target.files[0],
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Creating a FormData object to handle file upload
    const submissionData = new FormData();
    Object.keys(formData).forEach((key) => {
      submissionData.append(key, formData[key]);
    });

    try {
      const response = await fetch("http://localhost:3000/api/jrrm/doctors", {
        method: "POST",
        body: submissionData, // Sending FormData (including file)
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(`Doctor registered successfully! ID: ${data.id}`);
      } else {
        const data = await response.json();
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to register doctor");
    }
  };

  // Handle search functionality with redirection
  const handleSearch = async () => {
    if (JrrmcSearchInput.trim() === "") {
      setMessage("Please enter a valid search query");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/jrrm/doctors/search?query=${JrrmcSearchInput}`
      );
      // console.log("JrrmSearchInput samma");

      if (response.ok) {
        const data = await response.json();

        // Check if any data is returned
        if (data && Array.isArray(data)) {
          // Filter the data based on the search query
          const filteredDoctor = data.find(
            (doctor) =>
              doctor.fullName
                .toLowerCase()
                .includes(JrrmcSearchInput.toLowerCase()) ||
              doctor.specialization
                .toLowerCase()
                .includes(JrrmcSearchInput.toLowerCase()) ||
              doctor.nmcNumber.includes(JrrmcSearchInput) ||
              doctor.batch.includes(JrrmcSearchInput) ||
              doctor.workingPlace
                .toLowerCase()
                .includes(JrrmcSearchInput.toLowerCase())
          );
          // If a matching doctor is found, navigate to their profile
          if (filteredDoctor) {
            // navigate(`/jrrmc-dr-profile/${filteredDoctor.id}`); // Redirect to the doctor's profile page with the ID
            navigate(`/jrrmc-dr-profile/${JrrmcSearchInput}`); // where searchTerm is the term entered by the user
          } else {
            setMessage("No doctor found matching the search query");
          }
        } else {
          setMessage("Error: No data returned from the server");
        }
      } else {
        const data = await response.json();
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to perform search");
    }
  };

  return (
    <>
      <div
        className="relative flex flex-col justify-between items-center p-8 md:p-16 bg-cover bg-center h-full text-white"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex justify-between w-full">
          <div className="relative max-w-2xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">
              Register as JRRMC Alumni
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-wrap gap-8">
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

              {/* Batch */}
              <div className="mb-4">
                <input
                  placeholder="Batch"
                  type="text"
                  name="batch"
                  value={formData.batch}
                  onChange={handleChange}
                  className="px-4 w-[280px] py-2 focus:outline-none bg-transparent border-b-2"
                  required
                />
              </div>

              {/* Degree */}
              <div className="mb-4">
                <select
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  className="w-[280px] px-4 py-2 focus:outline-none bg-transparent border-b-2"
                  required
                >
                  <option className="text-black" value="">
                    Select Degree
                  </option>
                  <option className="text-black" value="MBBS">
                    MBBS
                  </option>
                  <option className="text-black" value="MD">
                    MD
                  </option>
                  <option className="text-black" value="MS">
                    MS
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

              {/* Working Place */}
              <div className="mb-4">
                <input
                  placeholder="Working Place"
                  type="text"
                  name="workingPlace"
                  value={formData.workingPlace}
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

              {/* NMC Number */}
              <div className="mb-4">
                <input
                  placeholder="NMC Number"
                  type="text"
                  name="nmcNumber"
                  value={formData.nmcNumber}
                  onChange={handleChange}
                  className="w-[280px] px-4 py-2 focus:outline-none bg-transparent border-b-2"
                  required
                />
              </div>

              {/* Specialization */}
              <div className="mb-4">
                <input
                  placeholder="Specialization"
                  type="text"
                  name="specialization"
                  value={formData.specialization}
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

              {/* Photo Upload */}
              <div className="mb-4">
                <input
                  type="file"
                  name="photo"
                  onChange={handleFileChange}
                  className="w-[280px] px-4 py-2 focus:outline-none bg-transparent border-b-2"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary hover:text-black transition duration-300"
              >
                Submit
              </button>
            </form>
            {message && <p>{message}</p>}{" "}
            {/* Display registration result message */}
          </div>

          {/* Search Field */}
          <div className="relative">
            <div className="my-7 text-lg font-bold">
              Search for JRRMC alumni by name, specialization, NMC number,
              batch, or current place of employment.
            </div>
            <input
              type="search"
              placeholder="Search Alumni"
              className="px-4 py-2 rounded-lg text-black"
              value={JrrmcSearchInput}
              onChange={(e) => setJrrmcSearchInput(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-secondary hover:bg-primary rounded-lg ml-2"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterDr;



