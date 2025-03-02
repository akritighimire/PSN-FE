import { useState, useEffect } from "react";
import Sidebar from "../../Components/dashboard/admin/sidebar";

const JrrmcDoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [editingDoctorId, setEditingDoctorId] = useState(null);

  // Fetch doctors from the database (simulated)
  useEffect(() => {
    // Replace with actual API call
    fetch("https://api.example.com/doctors")
      .then((response) => response.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.error("Error fetching doctors:", error));
  }, []);

  // Update doctor in the database
  const handleUpdateDoctor = (id, updatedDoctor) => {
    fetch(`https://api.example.com/doctors/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedDoctor),
    })
      .then((response) => response.json())
      .then((data) => {
        setDoctors((prevDoctors) =>
          prevDoctors.map((doctor) => (doctor.id === id ? data : doctor))
        );
        setEditingDoctorId(null);
      })
      .catch((error) => console.error("Error updating doctor:", error));
  };

  // Delete doctor
  const handleDeleteDoctor = (id) => {
    fetch(`https://api.example.com/doctors/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setDoctors((prevDoctors) => prevDoctors.filter((doctor) => doctor.id !== id));
      })
      .catch((error) => console.error("Error deleting doctor:", error));
  };

  // Handle input changes while editing a doctor
  const handleInputChange = (e, id, field) => {
    const updatedDoctors = doctors.map((doctor) => {
      if (doctor.id === id) {
        return { ...doctor, [field]: e.target.value };
      }
      return doctor;
    });
    setDoctors(updatedDoctors);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-3/4 flex-1 p-10">
          <h1 className="text-2xl font-bold mb-6">JRRMC Doctors</h1>

          {/* Doctor Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead className="bg-gray-200">
                <tr>
                  <th className="text-left py-2 px-4">SN</th>
                  <th className="text-left py-2 px-4">Name</th>
                  <th className="text-left py-2 px-4">Batch</th>
                  <th className="text-left py-2 px-4">Degree</th>
                  <th className="text-left py-2 px-4">Email</th>
                  <th className="text-left py-2 px-4">Work Place</th>
                  <th className="text-left py-2 px-4">Specialize</th>
                  <th className="text-left py-2 px-4">NMC</th>
                  <th className="text-left py-2 px-4">PH NO</th>
                  <th className="text-left py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((doctor, index) => (
                  <tr key={doctor.id} className="border-b">
                    <td className="py-2 px-4">{index + 1}</td>

                    {editingDoctorId === doctor.id ? (
                      <>
                        <td className="py-2 px-4">
                          <input
                            className="border border-gray-300 p-1"
                            value={doctor.name || ""}
                            onChange={(e) => handleInputChange(e, doctor.id, "name")}
                          />
                        </td>
                        <td className="py-2 px-4">
                          <input
                            className="border border-gray-300 p-1"
                            value={doctor.batch || ""}
                            onChange={(e) => handleInputChange(e, doctor.id, "batch")}
                          />
                        </td>
                        <td className="py-2 px-4">
                          <input
                            className="border border-gray-300 p-1"
                            value={doctor.degree || ""}
                            onChange={(e) => handleInputChange(e, doctor.id, "degree")}
                          />
                        </td>
                        <td className="py-2 px-4">
                          <input
                            className="border border-gray-300 p-1"
                            value={doctor.email || ""}
                            onChange={(e) => handleInputChange(e, doctor.id, "email")}
                          />
                        </td>
                        <td className="py-2 px-4">
                          <input
                            className="border border-gray-300 p-1"
                            value={doctor.workPlace || ""}
                            onChange={(e) => handleInputChange(e, doctor.id, "workPlace")}
                          />
                        </td>
                        <td className="py-2 px-4">
                          <input
                            className="border border-gray-300 p-1"
                            value={doctor.specialize || ""}
                            onChange={(e) => handleInputChange(e, doctor.id, "specialize")}
                          />
                        </td>
                        <td className="py-2 px-4">
                          <input
                            className="border border-gray-300 p-1"
                            value={doctor.nmc || ""}
                            onChange={(e) => handleInputChange(e, doctor.id, "nmc")}
                          />
                        </td>
                        <td className="py-2 px-4">
                          <input
                            className="border border-gray-300 p-1"
                            value={doctor.phone || ""}
                            onChange={(e) => handleInputChange(e, doctor.id, "phone")}
                          />
                        </td>
                        <td className="py-2 px-4 flex items-center">
                          <button
                            className="text-green-500 hover:text-green-700 mx-2"
                            onClick={() => handleUpdateDoctor(doctor.id, doctor)}
                          >
                            ✔️
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="py-2 px-4">{doctor.name}</td>
                        <td className="py-2 px-4">{doctor.batch}</td>
                        <td className="py-2 px-4">{doctor.degree}</td>
                        <td className="py-2 px-4">{doctor.email}</td>
                        <td className="py-2 px-4">{doctor.workPlace}</td>
                        <td className="py-2 px-4">{doctor.specialize}</td>
                        <td className="py-2 px-4">{doctor.nmc}</td>
                        <td className="py-2 px-4">{doctor.phone}</td>
                        <td className="py-2 px-4 flex items-center">
                          <button
                            className="text-blue-500 hover:text-blue-700 mx-2"
                            onClick={() => setEditingDoctorId(doctor.id)}
                          >
                            ✏️
                          </button>
                          <button
                            className="text-red-500 hover:text-red-700 mx-2"
                            onClick={() => handleDeleteDoctor(doctor.id)}
                          >
                            🗑️
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JrrmcDoctorList;
