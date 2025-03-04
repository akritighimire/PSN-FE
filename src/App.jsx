import Home from "./Pages/Home";
// import Vaccines from "./Navcompo/Vaccines"
import Vaccines from "./Pages/Vaccines";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PediatricSurgDetails from "./Components/PediatricSurgDetails";
import Navbar from "./Components/Navbar";
import PediatricDetails from "./Components/Pediatric";
import Doctor from "./Pages/Doctor";
import OurTeam from "./Pages/OurTeam";
import Login from "./Pages/Login(draft)";
import DoctorDashboard from "./Pages/DoctorDashboard";
import AboutUs from "./Pages/AboutUs";
import Footer from "./Components/Footer";
import ContactUs from "./Pages/ContactUs";
import RegisterDr from "./Pages/RegisterDr";
import AppointmentForm from "./Pages/AppointmentForm";
import AdminDashboard from "./Pages/admin/adminDashboard";
import DoctorAdmin from "./Pages/admin/doctorAdmin";
import Sidebar from "./Components/dashboard/admin/sidebar";
import AdminAppointment from "./Pages/admin/adminAppointment";
import AddDoctor from "./Pages/admin/AddDoctor";
import AddAppointmentForm from "./Pages/admin/adminAddAppointment";
import AdminViewReports from "./Pages/admin/adminViewReports";
import LabAdmin from "./Pages/admin/adminLab";
import JrrmcDoctorList from "./Pages/admin/JrrmcDoctorList";
import JrrmcDoctorProfile from "./Pages/website/JrrmcDoctorProfile";
// import DoctorProfile from "./Pages/website/JrrmcDoctorProfile";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/pediatricsurgery/:slug"
            element={
              <>
                <Navbar />
                <PediatricSurgDetails />
                <ContactUs />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/pediatrics/:slug"
            element={
              <>
                <Navbar />
                <PediatricDetails />
                <ContactUs />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/vaccine"
            element={
              <>
                <Navbar />
                <Vaccines />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <AboutUs />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/doctors"
            element={
              <>
                <Navbar />
                <Doctor />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/our-team"
            element={
              <>
                <Navbar />
                <OurTeam />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/admin-login"
            element={
              <>
                <Navbar />
                <Login />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <>
                <Navbar />
                <DoctorDashboard />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <ContactUs />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/jrrmc"
            element={
              <>
                <Navbar />
                <RegisterDr />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/make-an-appointment"
            element={
              <>
                <Navbar />
                <AppointmentForm />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/admin-dashboard"
            element={
              <>
                <AdminDashboard />
              </>
            }
          ></Route>
          <Route
            path="/admin-doctor"
            element={
              <>
                <DoctorAdmin />
              </>
            }
          ></Route>
          <Route
            path="/admin-appointment"
            element={
              <>
                <AdminAppointment />
              </>
            }
          ></Route>
          <Route
            path="admin-adddoctor"
            element={
              <>
                <AddDoctor />
              </>
            }
          ></Route>
          <Route
            path="/sidebar"
            element={
              <>
                <Sidebar />
              </>
            }
          ></Route>
          <Route
            path="/admin-addappointment"
            element={
              <>
                <AddAppointmentForm />
              </>
            }
          ></Route>
          <Route
            path="/admin-viewreports"
            element={
              <>
                <AdminViewReports />
              </>
            }
          ></Route>
          <Route
            path="/admin-lab"
            element={
              <>
                <LabAdmin />
              </>
            }
          ></Route>
          {/* <Route
            path="/jrrmc-dr-profile/:id"
            element={
              <>
                <Navbar />
                <JrrmcDoctorProfile />
                <Footer />
              </>
            }
          ></Route> */}

          <Route path="/jrrmc-dr-profile/:searchQuery" element={
            <>
              <Navbar/>
              <JrrmcDoctorProfile/>
              <Footer/>
            </>
          } />


          <Route
            path="/admin-jrrmcdoctor-list"
            element={
              <>
                <JrrmcDoctorList />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
      {/* <Home/> */}
    </div>
  );
};

export default App;
