import { Pencil, Eye } from "lucide-react"; // Import icons
import Sidebar from "../../Components/dashboard/admin/sidebar";

const AdminAppointment = () => {
  const appointments = [
    {
      sn: 1,
      doctor: "Dr. Roshan Shah",
      username: "rshah",
      hospital: "Kirtipur Hospital",
      date: "18/10/2081",
      time: "10:00 AM",
    },
    {
      sn: 2,
      doctor: "Dr. Anjali Gurung",
      username: "rshah",
      hospital: "Kirtipur Hospital",
      date: "18/10/2081",
      time: "10:00 AM",
    },
    {
      sn: 3,
      doctor: "Dr. Nisha Tamang",
      username: "rshah",
      hospital: "Kirtipur Hospital",
      date: "18/10/2081",
      time: "10:00 AM",
    },
    {
      sn: 4,
      doctor: "Dr. Manish Poudel",
      username: "rshah",
      hospital: "Kirtipur Hospital",
      date: "18/10/2081",
      time: "10:00 AM",
    },
    {
      sn: 5,
      doctor: "Dr. Gopal Bhattarai",
      username: "rshah",
      hospital: "Kirtipur Hospital",
      date: "18/10/2081",
      time: "10:00 AM",
    },
    {
      sn: 6,
      doctor: "Dr. Prakash KC",
      username: "rshah",
      hospital: "Kirtipur Hospital",
      date: "18/10/2081",
      time: "10:00 AM",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4">
          <Sidebar />
        </div>

        {/* Main content */}
        <div className="w-3/4 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Appointments</h1>
            <button className="bg-gray-300 text-black px-4 py-2 rounded-md">
              Download
            </button>
          </div>

          {/* Appointments Table */}
          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-6 py-4 font-semibold">SN</th>
                <th className="text-left px-6 py-4 font-semibold">
                  Name of Doctor
                </th>
                <th className="text-left px-4 py-4 font-semibold">Username</th>
                <th className="text-left px-4 py-4 font-semibold">Hospital</th>
                <th className="text-left px-4 py-4 font-semibold">Date</th>
                <th className="text-left px-4 py-4 font-semibold">Time</th>
                <th className="text-left px-4 py-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-4">{appointment.sn}</td>
                  <td className="px-4 py-4">{appointment.doctor}</td>
                  <td className="px-4 py-4">{appointment.username}</td>
                  <td className="px-4 py-4">{appointment.hospital}</td>
                  <td className="px-4 py-4">{appointment.date}</td>
                  <td className="px-4 py-4">{appointment.time}</td>
                  <td className="px-4 py-4 flex align-center space-x-2">
                    <button>
                      <Pencil />
                    </button>
                    <button>
                      <Eye />
                    </button>
                    <button className="bg-primary text-white px-3 py-1 rounded-md">
                      Proceed
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminAppointment;
