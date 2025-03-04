import { useState, useEffect } from "react";
import Sidebar from "../../Components/dashboard/admin/sidebar";
import { Pencil, Trash, Check } from "lucide-react"; // Import icons

const JrrmcDoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [editingDoctorId, setEditingDoctorId] = useState(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null); // State for handling delete confirmation

  // Fetch doctors from the backend
  useEffect(() => {
    fetch("http://localhost:3000/api/jrrm/doctors") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.error("Error fetching doctors:", error));
  }, []);

  // Update doctor in the backend
  const handleUpdateDoctor = (id, updatedDoctor) => {
    fetch(`http://localhost:3000/api/jrrm/doctors/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedDoctor),
    })
      .then((response) => response.json())
      .then((data) => {
        setDoctors((prevDoctors) =>
          prevDoctors.map((doctor) =>
            doctor._id === id ? data.doctor : doctor
          )
        );
        setEditingDoctorId(null);
      })
      .catch((error) => console.error("Error updating doctor:", error));
  };

  // Delete doctor
  const handleDeleteDoctor = (id) => {
    fetch(`http://localhost:3000/api/jrrmdoctors/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setDoctors((prevDoctors) =>
          prevDoctors.filter((doctor) => doctor._id !== id)
        );
        setConfirmDeleteId(null); // Clear confirm delete state after deletion
      })
      .catch((error) => console.error("Error deleting doctor:", error));
  };

  // Handle input changes while editing a doctor
  const handleInputChange = (e, id, field) => {
    const updatedDoctors = doctors.map((doctor) => {
      if (doctor._id === id) {
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
                  <th className="text-left py-4 px-4">SN</th>
                  <th className="text-left py-4 px-4">Name</th>
                  <th className="text-left py-4 px-4">Batch</th>
                  <th className="text-left py-4 px-4">Degree</th>
                  <th className="text-left py-4 px-4">Email</th>
                  <th className="text-left py-4 px-4">Work Place</th>
                  <th className="text-left py-4 px-4">Specialization</th>
                  <th className="text-left py-4 px-4">NMC</th>
                  <th className="text-left py-4 px-4">Phone</th>
                  <th className="text-left py-4 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((doctor, index) => (
                  <tr key={doctor._id} className="border-b">
                    <td className="py-2 px-4">{index + 1}</td>

                    {editingDoctorId === doctor._id ? (
                      <>
                        <td className="py-2 px-4">
                          <input
                            className="border border-gray-300 p-1"
                            value={doctor.fullName || ""}
                            onChange={(e) =>
                              handleInputChange(e, doctor._id, "fullName")
                            }
                          />
                        </td>
                        <td className="py-2 px-4">
                          <input
                            className="border border-gray-300 p-1"
                            value={doctor.batch || ""}
                            onChange={(e) =>
                              handleInputChange(e, doctor._id, "batch")
                            }
                          />
                        </td>
                        <td className="py-2 px-4">
                          <input
                            className="border border-gray-300 p-1"
                            value={doctor.degree || ""}
                            onChange={(e) =>
                              handleInputChange(e, doctor._id, "degree")
                            }
                          />
                        </td>
                        <td className="py-2 px-4">
                          <input
                            className="border border-gray-300 p-1"
                            value={doctor.email || ""}
                            onChange={(e) =>
                              handleInputChange(e, doctor._id, "email")
                            }
                          />
                        </td>
                        <td className="py-2 px-4">
                          <input
                            className="border border-gray-300 p-1"
                            value={doctor.workingPlace || ""}
                            onChange={(e) =>
                              handleInputChange(e, doctor._id, "workingPlace")
                            }
                          />
                        </td>
                        <td className="py-2 px-4">
                          <input
                            className="border border-gray-300 p-1"
                            value={doctor.specialization || ""}
                            onChange={(e) =>
                              handleInputChange(e, doctor._id, "specialization")
                            }
                          />
                        </td>
                        <td className="py-2 px-4">
                          <input
                            className="border border-gray-300 p-1"
                            value={doctor.nmcNumber || ""}
                            onChange={(e) =>
                              handleInputChange(e, doctor._id, "nmcNumber")
                            }
                          />
                        </td>
                        <td className="py-2 px-4">
                          <input
                            className="border border-gray-300 p-1"
                            value={doctor.phoneNumber || ""}
                            onChange={(e) =>
                              handleInputChange(e, doctor._id, "phoneNumber")
                            }
                          />
                        </td>
                        <td className="py-2 px-4 flex items-center">
                          <button
                            className="mx-3"
                            onClick={() =>
                              handleUpdateDoctor(doctor._id, doctor)
                            }
                          >
                            <Check strokeWidth={3} size={30} color="green" />
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="py-4 px-4">{doctor.fullName}</td>
                        <td className="py-4 px-4">{doctor.batch}</td>
                        <td className="py-4 px-4">{doctor.degree}</td>
                        <td className="py-4 px-4">{doctor.email}</td>
                        <td className="py-4 px-4">{doctor.workingPlace}</td>
                        <td className="py-4 px-4">{doctor.specialization}</td>
                        <td className="py-4 px-4">{doctor.nmcNumber}</td>
                        <td className="py-4 px-4">{doctor.phoneNumber}</td>
                        <td className="py-4 px-4 flex items-center">
                          <button
                            className="t hover:text-blue-700 mx-2"
                            onClick={() => setEditingDoctorId(doctor._id)}
                          >
                            <Pencil />
                          </button>
                          <button
                            className="text-red-500 hover:text-red-700 mx-2"
                            onClick={() => setConfirmDeleteId(doctor._id)} // Open confirm delete popup
                          >
                            <Trash />
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Confirm Delete Popup */}
          {confirmDeleteId && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p>Are you sure you want to delete this doctor?</p>
                <div className="mt-4 flex justify-end">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                    onClick={() => handleDeleteDoctor(confirmDeleteId)}
                  >
                    Confirm
                  </button>
                  <button
                    className="bg-gray-300 text-black px-4 py-2 rounded-md"
                    onClick={() => setConfirmDeleteId(null)} // Close the popup
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JrrmcDoctorList;
