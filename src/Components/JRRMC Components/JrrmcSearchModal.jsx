import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const JrrmcSearchModal = ({ closeJrrmcSearchModal, JrrmcSearchInput }) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the data from the backend API with the search input as a query parameter
        const response = await fetch(
          `/api/jrrm/doctors/search?searchInput=${JrrmcSearchInput}`
        );
        const data = await response.json(); // assuming the API returns data in JSON format
        // console.log(data);
        setSearchResults(data); // Store the fetched data in the state
      } catch (error) {
        console.error("Error fetching data from database:", error);
      }
    };

    if (JrrmcSearchInput) {
      fetchData(); // Fetch data if search input is provided
    }
  }, [JrrmcSearchInput]);

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div
          className="relative bg-white rounded-lg shadow-lg dark:bg-gray-700 max-w-2xl w-full mx-4"
        >
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
              Searched Items
            </h3>
            <button
              type="button"
              className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={closeJrrmcSearchModal}
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
            </button>
          </div>

          <div className="p-4 md:p-5 space-y-4 max-h-[60vh] overflow-y-auto">
            <h1 className="font-bold text-xl">Search Results</h1>
            {searchResults.length > 0 ? (
              searchResults.map((item, i) => (
                <div key={i}>
                  <a href={`/details/${item._id}`}>{item.fullName}</a>
                  <p>{item.degree}</p>
                  <p>{item.workingPlace}</p>
                </div>
              ))
            ) : (
              <p>No results found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

// Prop validation
JrrmcSearchModal.propTypes = {
  closeJrrmcSearchModal: PropTypes.func.isRequired,
  JrrmcSearchInput: PropTypes.string,
};

export default JrrmcSearchModal;
