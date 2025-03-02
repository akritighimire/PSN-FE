import Sidebar from "../../Components/dashboard/admin/sidebar";
import { Pencil, Eye } from "lucide-react"; // Import icons

const AdminViewReports = () => {
  const reports = [
    {
      id: 1,
      hospital: "Kirtipur Hospital",
      investigation: "Blood Test",
      date: "18/10/2081",
      update: "Processing",
    },
    {
      id: 2,
      hospital: "Kirtipur Hospital",
      investigation: "Blood Test",
      date: "18/10/2081",
      update: "Completed",
    },
    {
      id: 3,
      hospital: "Kirtipur Hospital",
      investigation: "Urine Test",
      date: "18/10/2081",
      update: "Processing",
    },
    {
      id: 4,
      hospital: "Kirtipur Hospital",
      investigation: "Stool Test",
      date: "18/10/2081",
      update: "Completed",
    },
    {
      id: 5,
      hospital: "Kirtipur Hospital",
      investigation: "X-ray",
      date: "18/10/2081",
      update: "Completed",
    },
    {
      id: 6,
      hospital: "Kirtipur Hospital",
      investigation: "X-ray",
      date: "18/10/2081",
      update: "Processing",
    },
  ];

  return (
    <div className="flex">
      <div className="w-1/4">
        <Sidebar />
      </div>

      <div className="p-6 w-3/4">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">New Reports</h2>
          <button className="bg-gray-200 px-4 py-2 rounded-md mb-4">
            Download
          </button>
          <div>
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left border-b">
                  <th className="p-2">SN</th>
                  <th className="p-2">HOSPITAL</th>
                  <th className="p-2">INVESTIGATION</th>
                  <th className="p-2">DATE</th>
                  <th className="p-2">UPDATE</th>
                  <th className="p-2">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report, index) => (
                  <tr key={report.id} className="border-b">
                    <td className="p-2">{index + 1}</td>
                    <td className="p-2">{report.hospital}</td>
                    <td className="p-2">{report.investigation}</td>
                    <td className="p-2">{report.date}</td>
                    <td className="p-2">
                      <span
                        className={`px-3 py-1 text-white text-sm rounded-md ${
                          report.update === "Completed"
                            ? "bg-green-500"
                            : "bg-blue-500"
                        }`}
                      >
                        {report.update}
                      </span>
                    </td>
                    <td className="p-2 flex space-x-2">
                      <button className="text-gray-600">
                        <Pencil className="w-5 h-5" />
                      </button>
                      <button className="text-gray-600">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded-md">
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
    </div>
  );
};

export default AdminViewReports;
