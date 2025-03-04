import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FaCaretDown,  } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router';
import logo from "../assets/HomeImage/logo.jpeg";
import "./hello.css"
import { PediatricSurgery } from '../Data/PediatricSurgData';
import { Pediatrics } from '../Data/Pediatric';
import SearchModal from './SearchModal';
import { motion } from "framer-motion";

const Navbar = () => {
  const [searchModal, setSearchModal] = useState(false);
  const [searchInput, setSearchInput] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  const closeSearchModal = () => {
    setSearchModal(false);
  }
  const refreshfield = () => {
    setSearchInput(null)
  }
  // console.log(searchInput)
  return (
    <>
      <div className=''>
        <div className='flex justify-between items-center p-4 px-7 mx-auto bg-[#A53860] text-white w-full '>
          {/* Logo and Title */}
          <div className='hidden items-center gap-3 md:flex '>
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
            <p className='cursor-pointer'>info@Pediatric.com.np</p>

          </div>
          <div className='hidden items-center gap-3 md:flex phonenum '>
            <FontAwesomeIcon icon="fa-solid fa-phone" />
            <p>01-64332834 / 9853782239</p>
          </div>
          {/* Search Bar and Login Button */}
          <div className=' gap-5 items-center hidden md:flex'>
            {/* Search Bar */}
            <div className='relative h-9 w-[200px] sm:w-[400px] md:w-[400px] search'>

              <input
                type='text'
                className='text-[#2d2c2c] rounded-xl pl-9 w-full h-full focus:outline-none'
                placeholder='Search'
                onFocus={() => setSearchModal(true)}
                onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput}

              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className='absolute cursor-pointer right-1 top-1/2 transform -translate-y-1/2 text-[#A53860] p-2 text-lg'
              />
              {searchModal && <SearchModal closeSearchModal={closeSearchModal} searchInput={searchInput} refreshfield={refreshfield} />}

            </div>

            {/* Login Button */}
            <div>
              <Link to="/doctors">
                <button className='text-[#A53860] bg-white w-52 h-9 rounded-md hover:bg-[#7b1c40] hover:text-white login'>
                  Book an Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile view: Stack the content */}
        <div className="block md:hidden p-4 bg-[#A53860]  text-white">
          <div className="flex flex-col items-center text-xl ">
            {/* <img src={logo} className="w-14 h-14 rounded-full mb-2" alt="Logo" /> */}
            {/* <h1 className="text-lg text-center font-bold"> */}
            {/* <span className='uppercase'>Pediatric</span> Surgeon Nepal */}
            {/* </h1> */}
            <div className=' items-center gap-3 flex mb-2 '>
              <FontAwesomeIcon icon="fa-solid fa-envelope" />
              <p className='cursor-pointer'>info@Pediatric.com.np</p>

            </div>
            <div className=' items-center gap-3 flex '>
              <FontAwesomeIcon icon="fa-solid fa-phone" />
              <p>01-64332834 / 9853782239</p>
            </div>


            {/* Search bar for mobile */}
            <div className='flex gap-5'>
              <div className='relative mt-4 w-[140px] searchmb'>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className='absolute left-2 top-1/2 transform -translate-y-1/2 text-[#A53860] text-lg'
                />
                <input
                  type='text'
                  className='text-black rounded-xl pl-9 w-full h-12 focus:outline-none'
                  placeholder='Search'
                />
              </div>

              {/* Book Appointment Button for mobile */}
              <div className="mt-4 w-[210px]">
                <button className='text-[#A53860] bg-white w-full h-12 rounded-md hover:bg-[#7b1c40] hover:text-white loginmb'>
                  Book An Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* navitems for medium and laptop size*/}
        <div className=" left-0 w-full text-black nav2 ">
          <div className="justify-between items-center mx-auto px-4 hidden md:flex  noham">
            <div className='flex gap-2 items-center '>
              <Link to="/"> <img src={logo} className='w-[79px] h-[79px] rounded-full' alt="Logo" /></Link>
              <h1 className="text-xl sm:text-xl  text-[#A53860] font-poppins  ">
                <Link to="/" className="flex flex-col "> <span className=' text-2xl uppercase font-bold '>Pediatric</span>  <span className='font-poppins text-[20px]'>Surgeon Nepal</span></Link>

              </h1>
            </div>

            <ul className="flex justify-between items-center mx-auto navs ">

              <Link className="py-3 cursor-pointer hover:text-[#A53860] nav-link" to="/">Home</Link>
              <li className="py-3 relative group cursor-pointer hover:text-[#A53860] nav-link">
                Pediatrics
                <FaCaretDown className="inline ml-2 text-[#A53860] font-bold" />
                <ul className="absolute hidden group-hover:grid bg-white text-black shadow-lg p-2   ml-[-220px] w-[950px]  mt-[10px] transition-all duration-300 ease-in-out transform hover:scale-[1.04]"

                  style={{
                    gridAutoFlow: 'column',
                    gridTemplateRows: "repeat(4,auto)"
                  }}
                >
                  {Pediatrics.map((value, index) => (
                    <Link to={`/pediatrics/${value.slug}`} key={index}>

                      <li className="hover:bg-[#A53860] cursor-pointer p-4 gap-0 h-[45px] w-[300px] li hover:text-white transition-all duration-300 ease-in-out transform hover:scale-102  " style={{ borderBottom: "1px dashed black", lineHeight: "1" }} >

                        {value.title}
                      </li>
                    </Link>

                  ))}
                </ul>
              </li>
              <li className="py-3 relative group cursor-pointer hover:text-[#A53860]  nav-link" >
                Pediatric Surgery
                <FaCaretDown className="inline ml-2 text-[#A53860] font-bold" />
                <ul
                  className="absolute hidden group-hover:grid bg-white text-black shadow-lg p-2 gap-0  ml-[-365px] w-[1000px]  mt-[10px] transition-all  duration-[300] ease-in-out transform hover:scale-[1.04]"
                  style={{
                    // display: "grid",
                    gridAutoFlow: "column",
                    gridTemplateRows: "repeat(10, auto)",
                    // gap:"1rem"
                  }}

                >
                  {PediatricSurgery.map((value, index) => (
                    <>
                      <Link key={index} to={`/pediatricsurgery/${value.slug}`} >
                        <li className="hover:bg-[#A53860] cursor-pointer p-4 h-[45px] w-[230px] li hover:text-white  transition-all duration-300 ease-in-out transform hover:scale-102 " style={{ borderBottom: "1px dashed black", lineHeight: "1" }} >
                          {value.title}
                        </li></Link>
                    </>
                  ))}

                </ul>


              </li>
              {/* <Link to="/doctors"> */}
              {/* <li className="py-3 relative group cursor-pointer hover:text-[#A53860] nav-link text-black">
                Doctors */}
              {/* <FaCaretDown className="inline ml-2 text-[#A53860] font-bold" />
                <ul
  className="absolute hidden group-hover:grid bg-white text-black shadow-lg p-2 gap-0  ml-[-500px] w-[1000px]  mt-[10px] transition-all  duration-[300] ease-in-out transform hover:scale-[1.04]"
  style={{
    // display: "grid",
    gridAutoFlow: "column",
    gridTemplateRows: "repeat(7, auto)",
    // gap:"1rem"
  }}>
                {pediatricSpecializations.map((value,index)=>(
                  <>
                   <li key={index} className="hover:bg-[#A53860] cursor-pointer p-4 h-[45px] w-[230px] li hover:text-white  transition-all duration-300 ease-in-out transform hover:scale-102 " style={{borderBottom:"1px dashed black",lineHeight:"1"}} >
      {value}
    </li>
                  </>
                ))}
                
                </ul> */}
              {/* </li></Link> */}
              <Link className="py-3 relative group cursor-pointer hover:text-[#A53860] nav-link" to="/vaccine" >
                Vaccines

              </Link>

              <Link to="/About">    <li className="py-3 cursor-pointer hover:text-[#A53860] nav-link">About Us </li></Link>
              <Link to="/teams">   <li className="py-3 cursor-pointer hover:text-[#A53860] nav-link">Our Team</li></Link>

              <Link to="/Contact"> <li className="py-3 cursor-pointer hover:text-[#A53860] nav-link">Contact Us </li></Link>
              {/* <Link to="/Contact"> <li className="py-3 cursor-pointer hover:text-[#A53860] nav-link">JRRMC Alumni </li></Link> */}

            </ul>
          </div>

          {/* Mobile Navbar */}
          <div className="left-0 w-full text-black bg-white nav2 flex">
            <div className="w-full flex justify-between items-center px-4">
              {/* Logo Section */}
              <div className="flex gap-2 items-center logo">
                <Link to="/"> <img src={logo} className="w-[79px] h-[79px] rounded-full" alt="Logo" /></Link>
                <h1 className="text-xl sm:text-xl md:text-[2] text-[#A53860]">
                  <Link to="/"> <span className="uppercase font-bold">Pediatric</span> <br /> Surgeon Nepal</Link>
                </h1>
              </div>
            </div>
            {/* Hamburger Menu Section */}
            <div className="md:hidden flex items-center hamburger z-50 p-4">
              {!isMobileMenuOpen && (
                <AiOutlineMenu
                  size={30}
                  color="black"
                  className="cursor-pointer"
                  onClick={toggleMobileMenu}
                />
              )}
              {isMobileMenuOpen && (
                <>
                  <AiOutlineClose
                    size={30}
                    color="black"
                    className="absolute right-4 cursor-pointer "
                    onClick={toggleMobileMenu}
                  />
                  {/* // <div className="absolute top-16 right-0 w-[40%]   bg-white shadow-2xl bg-opacity-80 flex flex-col items-end space-y-2 py-7 px-6 hammenu transition-all  ease-in-out duration-3000  "> */}
                  <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute px-4 top-36 text-[19px] w-[30%] bg-white shadow-2xl right-0 hammenu"
          >
            <ul className="text-black text-center space-y-4">
              <Link to="/">
                <li className="py-2 cursor-pointer hover:text-[#A53860] transition duration-300">Home</li>
              </Link>

              <li
                className="py-2 cursor-pointer hover:text-[#A53860] transition duration-300"
                onClick={() => toggleDropdown(0)}
              >
                Pediatrics
                <FaCaretDown className="inline ml-2 text-[#A53860] font-bold" />
                {openDropdown === 0 && (
                  <motion.ul
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="bg-white text-black shadow-lg p-2 mt-3 space-y-2"
                  >
                    {PediatricSurgery.map((value, index) => (
                      <li key={index} className="p-2 hover:bg-gray-200 cursor-pointer">{value}</li>
                    ))}
                  </motion.ul>
                )}
              </li>

              <li
                className="py-2 cursor-pointer hover:text-[#A53860] transition duration-300"
                onClick={() => toggleDropdown(1)}
              >
                Pediatric Surgery
                <FaCaretDown className="inline ml-2 text-[#A53860] font-bold" />
                {openDropdown === 1 && (
                  <motion.ul
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute bg-white text-black shadow-lg p-2 gap-0 w-[800px] mt-[10px]"
                  >
                    {PediatricSurgery.map((value, index) => (
                      <li
                        key={index}
                        className="hover:bg-[#A53860] cursor-pointer p-4 h-[45px] w-[230px] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
                        style={{ borderBottom: "1px dashed black", lineHeight: "1" }}
                      >
                        {value}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>

              <li className="py-2 cursor-pointer hover:text-[#A53860] transition duration-300">
                <Link to="/vaccine">Vaccines</Link>
              </li>

              <li className="py-2 cursor-pointer hover:text-[#A53860] transition duration-300">About Us</li>
              <li className="py-2 cursor-pointer hover:text-[#A53860] transition duration-300">Our Team</li>

              <li className="py-2 cursor-pointer hover:text-[#A53860] transition duration-300 pb-4">Contact Us</li>
            </ul>
          </motion.div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
