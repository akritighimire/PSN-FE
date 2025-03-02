import  { useEffect } from 'react'
import { useNavigate } from 'react-router';
import Cookies from "js-cookie";
import { Link} from 'react-router';


const DoctorDashboard = () => {
    const navigate=useNavigate();
    const token=Cookies.get("user-token");
    const handlelogout=()=>{
      Cookies.remove("user-token")
      Cookies.remove("user-detail");

    }
    useEffect(()=>{
        if(!token){
            navigate("/login");
        }
    },[token,navigate])
  return (
    <>
    <div>DoctorDashboard</div>
   <Link to="/login"> <button className='bg-blue-500 text-white p-2' onClick={handlelogout}>Logout</button></Link>
    </>

  )
}

export default DoctorDashboard