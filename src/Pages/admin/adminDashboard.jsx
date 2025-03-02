import { Link } from "react-router-dom"; // Corrected import path
import Sidebar from "../../Components/dashboard/admin/sidebar";

const AdminDashboard = () => {
  const doctors = [
    "Dr. Roshan Shah",
    "Dr. Anjali Gurung",
    "Dr. Nisha Tamang",
    "Dr. Manish Poudel",
    "Dr. Gopal Bhattarai",
    "Dr. Prakash KC",
  ];

  const labs = [
    "Kirtipur Hospital",
    "Patan Hospital",
    "Kanti Bal Hospital",
    "Mediciti Hospital",
    "Norvic Hospital",
    "Abc Hospital",
  ];

  // Example download handler for doctors and labs (you can add actual file download logic)
  const handleDownload = (name) => {
    console.log(`Downloading details for: ${name}`);
    // Add real download logic here (such as generating or downloading a file)
  };

  return (
    <div className="flex">
      <div className="w-1/4 ">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-gray-100 p-8">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

        {/* Doctor's Dashboard */}
        <div className="bg-white p-6 rounded-2xl shadow mb-6">
          <h2 className="text-xl font-bold mb-4">Go to Doctor’s Dashboard</h2>
          <ul>
            {doctors.map((doctor, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-2 border-b last:border-none"
              >
                <span>
                  {index + 1}. {doctor}
                </span>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleDownload(doctor)}
                    className="bg-gray-300 text-gray-800 px-4 py-1 rounded-lg"
                  >
                    Download
                  </button>
                  <Link to={"/admin-doctor"}>
                    <button className="bg-primary text-white px-4 py-1 rounded-lg">
                      View Details
                    </button>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Lab's Dashboard */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-bold mb-4">Go to Lab’s Dashboard</h2>
          <ul>
            {labs.map((lab, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-2 border-b last:border-none"
              >
                <span>
                  {index + 1}. {lab}
                </span>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleDownload(lab)}
                    className="bg-gray-300 text-gray-800 px-4 py-1 rounded-lg"
                  >
                    Download
                  </button>
                  {/* Add navigation for Lab Dashboard */}
                  <Link to={"/admin-lab"}>
                    <button className="bg-primary text-white px-4 py-1 rounded-lg">
                      View Details
                    </button>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
