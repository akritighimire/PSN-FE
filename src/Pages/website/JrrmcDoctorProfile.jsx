import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const JrrmcDoctorProfile = () => {
  const { searchQuery } = useParams(); // Get the search query (doctor fields like name, batch, etc.)
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Search Query:", searchQuery); // Log the search query for debugging
    axios
      .get(`http://localhost:3000/api/jrrm/doctors/search?query=${searchQuery}`) // Send the search query to the backend
      .then((response) => {
        console.log("Response Data:", response.data); // Log the response data
        if (Array.isArray(response.data)) {
          setDoctors(response.data); // If multiple doctors found
        } else {
          setDoctors([response.data]); // If only one doctor found
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching doctor data:", error);
        setError("Failed to fetch doctor data.");
        setLoading(false);
      });
  }, [searchQuery]); // Re-run when the search query changes

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (doctors.length === 0) {
    return (
      <div className="text-center text-red-500">
        No doctor found for `{searchQuery}`
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="">
        {doctors.map((doctor) => (
          <div
            key={doctor._id}
            className="flex w-1/2 bg-white p-8 rounded-lg shadow-lg"
          >
            <div className=" flex mb-4">
              <img
                className="m-8 w-64 h-64 rounded-full shadow-lg border-4 border-pink-500"
                src={doctor.photo} // Use default image if no photo
                // alt={doctor.fullName}
              />
            </div>
            <div className="">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Dr.
                {doctor.fullName || "Name Not Available"}
              </h1>
              <p className="text-lg font-medium">
                <span className="text-lg font-bold">Batch: </span>
                {doctor.batch || "Not Provided"}
              </p>
              <p className="text-lg font-medium">
                <span className="text-lg font-bold">Degree: </span>
                {doctor.degree || "Not Provided"}
              </p>
              <p className="text-lg font-medium text-gray-700">
                <span className="text-lg font-bold">Specialization: </span>
                {doctor.specialization || "Not Provided"}
              </p>
              <p className="text-lg font-medium text-gray-700">
                <span className="text-lg font-bold">NMC No: </span>
                {doctor.nmcNumber || "Not Provided"}
              </p>
              <p className="text-lg font-medium text-gray-700">
                <span className="text-lg font-bold">Work Place: </span>
                {doctor.workingPlace || "Not Provided"}
              </p>
              <p className="text-lg font-medium text-gray-700">
                <span className="text-lg font-bold">Email: </span>
                {doctor.email || "Not Provided"}
              </p>
              <p className="text-lg font-medium text-gray-700">
                <span className="text-lg font-bold">Address: </span>
                {doctor.address || "Not Provided"}
              </p>
              <p className="text-lg font-medium text-gray-700">
                <span className="text-lg font-bold">Phone Number: </span>
                {doctor.phoneNumber || "Not Provided"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JrrmcDoctorProfile;
