import React from "react";
import Doctor1 from "../assets/HomeImage/Doctor/Doctor1.png";
// import Bg from "../assets/HomeImage/Doctor/Bg.png";
import Bg from "../assets/HomeImage/Bg.png";
import OurTeam from "./OurTeam";


const Doctor = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative max-w-7xl mx-auto h-full flex flex-col items-center px-16 py-16 ">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-4xl font-bold text-white">
            Find Your Doctor
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4">
            Book an appointment with the best specialists to take care of your health.
          </p>
        </div> 
        <DoctorCompo name=" Dr. Kritika Ghimire" specification="General Physician | Endocrinology" NMC="5676778" qual=" MBBS, MD (Internal Medicine)" schedule=" Sun - Fri : 3 PM to 8 PM (Lalitpur)"/>
<DoctorCompo name=" Dr. Akriti Sapkota " specification="Pediatric Surgeon" NMC="5676678" qual=" MBBS, MD (Internal Medicine)" schedule=" Sun - Fri : 3 PM to 8 PM (Lalitpur)" />
<DoctorCompo name=" Dr. Sabina Karki" specification="Psychiatrist" NMC="5676678" qual=" MBBS, MD (Internal Medicine)" schedule=" Sun - Fri : 3 PM to 8 PM (Lalitpur)" />

        </div>
    </div>
  
  );
};

export default Doctor;


const DoctorCompo = ({name,specification,NMC,qual,schedule}) => {
  return (
  <>
   {/* Container */}
   {/* <div className="relative max-w-7xl mx-auto h-full flex flex-col items-center px-16 py-16"> */}
    

        {/* Content Section */}
        <div className="flex items-center justify-between w-full gap-16 mt-5">
          {/* Section 1: Image */}
          <div className="flex items-center justify-center">
            <img
              src={Doctor1}
              alt="Doctor"
              className="rounded-lg shadow-lg w-80 h-80 md:w-96 md:h-96 object-cover"
            />
          </div>

          {/* Section 2: Details */}
          <div className="flex-[1] bg-gray-100 bg-opacity-90 shadow-xl rounded-lg p-16 flex flex-col justify-center max-w-[700px] h-[380px]">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
             
               {name}
            </h2>
            <p className="text-gray-700 text-base mb-2">
              <strong>Department: </strong> 
              {/* General Physician | Endocrinology */}
              {specification}
            </p>
            <p className="text-gray-700 text-base mb-2">
              <strong>NMC No: </strong>
               {/* 5676778 */}
              {NMC}
            </p>
            <p className="text-gray-700 text-base mb-2">
              <strong>Qualification: </strong> 
              {qual}
              {/* MBBS, MD (Internal Medicine) */}
            </p>
            <p className="text-gray-700 text-base mb-2">
              <strong>OPD Schedule: </strong>
              {schedule} 
              {/* Sun - Fri : 3 PM to 8 PM (Lalitpur) */}
            </p>
          

            {/* Buttons */}
            <div className="flex flex-col gap-4">
              <button className="w-full md:w-auto px-6 py-3 bg-[#A53860] text-white rounded-lg shadow-md hover:bg-pink-700 transition">
                Make Appointment
              </button>
              <button className="w-full md:w-auto px-6 py-3 bg-[#A53860] text-white rounded-lg shadow-md hover:bg-pink-700 transition">
                Send Inquiry
              </button>
            </div>
          </div>
        </div>
      {/* </div> */}
  </>
  )
}


