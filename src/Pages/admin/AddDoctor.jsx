import Sidebar from "../../Components/dashboard/admin/sidebar";

const AddDoctor = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-gray-100 p-10">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

        {/* Add Doctor Form */}
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Add Doctor</h2>

          <form>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Name *"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A53860]"
              />
              <input
                type="text"
                placeholder="Phone *"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A53860]"
              />
              <input
                type="email"
                placeholder="Email *"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A53860]"
              />
              <input
                type="text"
                placeholder="Address *"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A53860]"
              />
              <input
                type="password"
                placeholder="Password *"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A53860]"
              />
              <input
                type="password"
                placeholder="Confirm Password *"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A53860]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#A53860] text-white font-bold py-3 rounded-md hover:bg-[#762542] transition-colors"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
