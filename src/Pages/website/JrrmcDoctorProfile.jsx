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
      .get(`/api/jrrm/doctors/search?query=${searchQuery}`) // Send the search query to the backend
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
    return (
      <div className="text-center text-red-500">
        {error}
      </div>
    );
  }

  if (doctors.length === 0) {
    return (
      <div className="text-center text-red-500">
        No doctor found for `{searchQuery}`
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doctor) => (
          <div key={doctor._id} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <img
                className="w-64 h-64 rounded-full shadow-lg border-4 border-pink-500"
                src={doctor.photo || "/default-image.jpg"} // Use default image if no photo
                alt={doctor.fullName}
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Dr. {doctor.fullName || "Name Not Available"}
            </h1>
            <p className="text-lg font-medium text-gray-700">Batch: {doctor.batch || "Not Provided"}</p>
            <p className="text-lg font-medium text-gray-700">Degree: {doctor.degree || "Not Provided"}</p>
            <p className="text-lg font-medium text-gray-700">Specialization: {doctor.specialization || "Not Provided"}</p>
            <p className="text-lg font-medium text-gray-700">NMC No: {doctor.nmcNumber || "Not Provided"}</p>
            <p className="text-lg font-medium text-gray-700">Work Place: {doctor.workingPlace || "Not Provided"}</p>
            <p className="text-lg font-medium text-gray-700">Email: {doctor.email || "Not Provided"}</p>
            <p className="text-lg font-medium text-gray-700">Address: {doctor.address || "Not Provided"}</p>
            <p className="text-lg font-medium text-gray-700">Phone Number: {doctor.phoneNumber || "Not Provided"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JrrmcDoctorProfile;
