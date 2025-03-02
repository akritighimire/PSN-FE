import { motion } from "framer-motion";
import img from "../assets/HomeImage/Doctor/Doctor1.png";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Dr. Kritika Sapkota",
      role: "General Physician",
      imgSrc: "../assets/HomeImage/Doctor/Doctor1.png",
    },
    {
      name: "Dr. Kritika Sapkota",
      role: "General Physician",
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Dr. Kritika Sapkota",
      role: "General Physician",
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Dr. Kritika Sapkota",
      role: "General Physician",
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Dr. Kritika Sapkota",
      role: "General Physician",
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Dr. Kritika Sapkota",
      role: "General Physician",
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Dr. Kritika Sapkota",
      role: "General Physician",
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Dr. Kritika Sapkota",
      role: "General Physician",
      imgSrc: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
        <p className="text-gray-600 mb-10">
          Meet the experts of Pediatric Surgeon Nepal, committed to advancing pediatric healthcare with skill and dedication.
        </p>
        <div className="flex flex-wrap justify-center gap-10 cursor-pointer">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white shadow-lg p-6 flex flex-col items-center rounded-lg hover:shadow-2xl transition-shadow duration-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
            >
              <img
                // src={member.imgSrc} 
                src={img}
                alt={member.name}
                className="w-48 h-48 object-cover  mb-4 border-4 border-gray"
              />
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
