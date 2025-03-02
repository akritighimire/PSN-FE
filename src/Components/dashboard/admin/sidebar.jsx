import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/HomeImage/logo.jpeg";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleItemClick = (item, path) => {
    setActiveItem(item);
    navigate(path); // Navigate to the specified path
  };

  return (
    <>
      <div className="w-1/4 bg-primary h-full text-white px-8 py-4 fixed">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-20 h-16 mr-4" />
          <div>
            <h2 className="text-2xl uppercase font-bold">PEDIATRIC</h2>
            <h2 className="font-poppins text-[20px]">Surgeon Nepal</h2>
          </div>
        </div>
        <ul className="space-y-4 mt-8 px-4">
          <li
            className={`text-lg py-2 mx-[-48px] pl-[48px] font-bold ${
              activeItem === "Home"
                ? "bg-white text-primary"
                : "hover:bg-white hover:text-primary"
            }`}
            onClick={() => handleItemClick("Home", "/admin-dashboard")}
          >
            Home
          </li>
          <li
            className={`text-lg py-2 mx-[-48px] pl-[48px] font-bold ${
              activeItem === "Appointments"
                ? "bg-white text-primary"
                : "hover:bg-white hover:text-primary"
            }`}
            onClick={() =>
              handleItemClick("Appointments", "/admin-appointment")
            }
          >
            Appointments
          </li>
          <li
            className={`text-lg py-2 mx-[-48px] pl-[48px] font-bold ${
              activeItem === "Add Appointment"
                ? "bg-white text-primary"
                : "hover:bg-white hover:text-primary"
            }`}
            onClick={() =>
              handleItemClick("Add Appointment", "/admin-addappointment")
            }
          >
            Add Appointment
          </li>
          <li
            className={`text-lg py-2 mx-[-48px] pl-[48px] font-bold ${
              activeItem === "View Reports"
                ? "bg-white text-primary"
                : "hover:bg-white hover:text-primary"
            }`}
            onClick={() =>
              handleItemClick("View Reports", "/admin-viewreports")
            }
          >
            View Reports
          </li>
          <li
            className={`text-lg py-2 mx-[-48px] pl-[48px] font-bold ${
              activeItem === "Add Doctor"
                ? "bg-white text-primary"
                : "hover:bg-white hover:text-primary"
            }`}
            onClick={() => handleItemClick("Add Doctor", "/admin-adddoctor")}
          >
            Add Doctor
          </li>
          <li
            className={`text-lg py-2 mx-[-48px] pl-[48px] font-bold ${
              activeItem === "Add Doctor"
                ? "bg-white text-primary"
                : "hover:bg-white hover:text-primary"
            }`}
            onClick={() =>
              handleItemClick("Jrrmc Doctor List", "/admin-jrrmcdoctor-list")
            }
          >
            JRRMC Doctors
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
