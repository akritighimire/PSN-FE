import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Assuming you are using React Router for navigation
import PropTypes from "prop-types";

const JrrmcSearchModal = ({ closeSearchModal }) => {
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const navigate = useNavigate(); // React Router's hook for programmatic navigation

  // Function to handle the search operation
  const handleSearch = () => {
    // If there's no search query, do nothing
    if (!searchQuery.trim()) return;

    // Close the search modal
    closeSearchModal();

    // Redirect to the DoctorProfile page with the search query as a parameter
    navigate(`/jrrmc-dr-profile/${searchQuery}`);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 text-black"
      onClick={closeSearchModal}
    >
      <div
        className="relative bg-white rounded-lg shadow-lg max-w-lg w-full mx-4 mt-20"
        onClick={(e) => e.stopPropagation()} // Stop propagation to prevent modal from closing on click inside
      >
        <div className="flex items-center justify-between p-4 border-b rounded-t">
          <h3 className="text-xl font-semibold text-gray-900">Search Doctors</h3>
          <button
            type="button"
            className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto"
            onClick={closeSearchModal}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, specialization, NMC number, etc."
            className="w-full p-2 border border-gray-300 rounded-md"
          />

          <div className="mt-4 flex justify-end">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
JrrmcSearchModal.propTypes = {
  closeSearchModal: PropTypes.func.isRequired, // Ensuring closeSearchModal is a required function
};

export default JrrmcSearchModal;
