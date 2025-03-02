import { useState } from "react";
import { Pencil, Eye } from "lucide-react";
import Sidebar from "../../Components/dashboard/admin/sidebar";

const DoctorAdmin = () => {
  const [appointments] = useState([
    {
      id: 1,
      hospital: "Kirtipur Hospital",
      patient: "Ajsdkbcks Gjnskdc",
      date: "18/10/2081",
      time: "10:00 AM",
    },
    {
      id: 2,
      hospital: "Kirtipur Hospital",
      patient: "Dnsdcn Hjsdck",
      date: "18/10/2081",
      time: "10:00 AM",
    },
    {
      id: 3,
      hospital: "Kirtipur Hospital",
      patient: "Fsddcs Hkjnskdcs",
      date: "18/10/2081",
      time: "10:00 AM",
    },
    {
      id: 4,
      hospital: "Kirtipur Hospital",
      patient: "Gsdchs Jkjdksd",
      date: "18/10/2081",
      time: "10:00 AM",
    },
    {
      id: 5,
      hospital: "Kirtipur Hospital",
      patient: "Hbdskcb Tjbdsck",
      date: "18/10/2081",
      time: "10:00 AM",
    },
    {
      id: 6,
      hospital: "Kirtipur Hospital",
      patient: "Lsbcj Tskxcksc",
      date: "18/10/2081",
      time: "10:00 AM",
    },
  ]);

  return (
    <div className="flex">
      <div className="w-1/4">
        <Sidebar />
      </div>

      <main className="w-3/4 flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">Dr. Roshan Shah</h1>
        <button className="mb-6">Download</button>
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white shadow-md rounded-md">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="px-4 py-2">SN</th>
                <th className="px-4 py-2">Hospital</th>
                <th className="px-4 py-2">Patient`s Name</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={appointment.id} className="border-t">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{appointment.hospital}</td>
                  <td className="px-4 py-2">{appointment.patient}</td>
                  <td className="px-4 py-2">{appointment.date}</td>
                  <td className="px-4 py-2">{appointment.time}</td>
                  <td className="px-4 py-2 space-x-4">
                    <button className="inline-flex items-center space-x-1">
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button className="inline-flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="bg-primary text-white px-4 py-1 rounded-lg">Proceed</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default DoctorAdmin;
