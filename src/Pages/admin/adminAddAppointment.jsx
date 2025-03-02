import Sidebar from "../../Components/dashboard/admin/sidebar";

const AddAppointmentForm = () => {
  return (
    <div className="flex">
      <div className="w-1/4">
        <Sidebar />
      </div>

      <div className="flex-1 p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Appointment Form</h2>
          <p className="text-gray-500 mb-8">
            Lorem ipsum dolor sit amet consectetur. Ac lectus sollicitudin id
            habitant mattis integer amet.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block font-medium mb-2"
                htmlFor="appointmentDate"
              >
                Appointment Date
              </label>
              <input
                type="date"
                id="appointmentDate"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block font-medium mb-2" htmlFor="preferredTime">
                Preferred Time
              </label>
              <input
                type="time"
                id="preferredTime"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block font-medium mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block font-medium mb-2" htmlFor="age">
                Age
              </label>
              <input
                type="number"
                id="age"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block font-medium mb-2" htmlFor="gender">
                Gender
              </label>
              <select
                id="gender"
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-2" htmlFor="gender">
                Doctor
              </label>
              <select
                id="gender"
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="">Select Doctor</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-2" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block font-medium mb-2" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block font-medium mb-2" htmlFor="description">
                Problems/Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                className="w-full p-2 border border-gray-300 rounded h-32"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-pink-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAppointmentForm;
