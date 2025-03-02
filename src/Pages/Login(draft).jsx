import { useState } from "react";
// import Footer from "./Footer";
import background from "../assets/HomeImage/Bg.png";
import axios from "axios";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import  { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const navigate=useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const response=await axios.post("http://localhost:4000/api/user/signin",{
        email,password
      });
      // console.log(response);
      if(response.data.token){
        // Cookies.set("user-token",response.data.token,{httpOnly:true});
        Cookies.set("user-token",response.data.token);

        Cookies.set("user-detail",JSON.stringify(response.data.user));

        toast.success(response.data.message,{
          // position: toast.POSITION.TOP_RIGHT,
          autoClose:2000,
        });
        // console.log("logged in successfully");
        setTimeout(()=>{
          navigate("/DoctorDashboard")
        },3000)
        // navigate("/DoctorDashboard")

      }
      else{
        // throw new Error("login failed!")
        toast.error(response.data.error);


      }
    }catch(err){
toast.error(err.response?.data?.message);
// toast.error(response.data.error)
    }
  }

  return (
    <div>
      <ToastContainer/>
      {/* <Navbar /> */}
      <div
        className="relative flex flex-col md:flex-row justify-between items-center p-8 md:p-16 bg-cover bg-center h-full"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Content */}
        <div className="relative flex flex-col w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-[#e5e58a] text-2xl md:text-3xl font-bold pb-4 md:pb-8 ">
          Hey Doctor, welcome back!
          </h2>
          <p className="text-white text-lg md:pr-16">
            It`s great to see you again. Let`s continue providing exceptional
            care and making a difference together.
          </p>
        </div>

        <div className="relative w-1/2">
          <div className="flex flex-col max-w-xl p-8 md:p-16 bg-white rounded-lg shadow-lg">
            <span className="text-2xl font-semibold pb-4 md:pb-8 text-[#2e2b2b]">
              Log In
            </span>
            <form onSubmit={handleSubmit} >
              <div className="items-center" 
              // className="flex gap-4 mb-8"
              >
                <div >
                  <input
                    type="email"
                    value={email}
                    placeholder="Email *"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-[350px] mb-4 p-2 border border-[gray] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    value={password}
                    placeholder="Password *"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-[350px] mb-4 p-2 border border-[gray] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-[220px] py-2 px-4 mx-10 bg-[#A53860] text-white rounded-md hover:bg-secondary hover:text-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
