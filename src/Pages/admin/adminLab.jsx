import { Pencil, Eye, Download } from "lucide-react"; // Import icons
import Sidebar from "../../Components/dashboard/admin/sidebar";

const LabAdmin = () => {
  const appointments = [
    {
      id: 1,
      name: "Ajsdkbcks Gjnskdc",
      investigation: "Blood Test",
      date: "18/10/2081",
      status: "Processing",
    },
    {
      id: 2,
      name: "Dnsdcn Hjsdck",
      investigation: "Blood Test",
      date: "18/10/2081",  
      status: "Completed",
    },
    {
      id: 3,
      name: "Fsdcs Hkjnskdcs",
      investigation: "Urine Test",
      date: "18/10/2081",
      status: "Processing",
    },
    {
      id: 4,
      name: "Gsdchs Jkjdksd",
      investigation: "Stool Test",
      date: "18/10/2081",
      status: "Completed",
    },
    {
      id: 5,
      name: "Hbdsbckb Tjbdsck",
      investigation: "X-ray",
      date: "18/10/2081",
      status: "Completed",
    },
    {
      id: 6,
      name: "Lsbckj Tskxcksc",
      investigation: "X-ray",
      date: "18/10/2081",
      status: "Processing",
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
<div className="w-1/4"><Sidebar/></div>

      {/* Main Content */}
      <div className="w-3/4 bg-gray-100 p-8">
        <h1 className="text-3xl font-bold">Kirtipur Hospital Lab</h1>
        <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded mt-4 mb-6">
          Download
        </button>

        {/* Appointment Table */}
        <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-4 px-6 text-left text-sm font-bold">SN</th>
              <th className="py-4 px-6 text-left text-sm font-bold">
                PATIENT’S NAME
              </th>
              <th className="py-4 px-6 text-left text-sm font-bold">
                INVESTIGATION
              </th>
              <th className="py-4 px-6 text-left text-sm font-bold">DATE</th>
              <th className="py-4 px-6 text-left text-sm font-bold">UPDATE</th>
              <th className="py-4 px-6 text-left text-sm font-bold">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={appointment.id} className="border-b">
                <td className="py-4 px-6">{index + 1}</td>
                <td className="py-4 px-6">{appointment.name}</td>
                <td className="py-4 px-6">{appointment.investigation}</td>
                <td className="py-4 px-6">{appointment.date}</td>
                <td className="py-4 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      appointment.status === "Completed"
                        ? "bg-green-500"
                        : "bg-blue-500"
                    }`}
                  >
                    {appointment.status}
                  </span>
                </td>
                <td className="py-4 px-6 flex space-x-4">
                  <button className="text-black">
                    <Pencil className="w-5 h-5" />
                  </button>
                  <button className="text-black">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="text-black">
                    <Download className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LabAdmin;
