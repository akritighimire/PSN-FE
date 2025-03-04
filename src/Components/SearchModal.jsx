import { Pediatrics } from '../Data/Pediatric';
import {PediatricSurgery} from '../Data/PediatricSurgData'
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const SearchModal = ({ closeSearchModal, searchInput,refreshfield }) => {
        // Filter the Pediatrics data based on the searchInput
        const filteredDataPediatric = Pediatrics.filter((item) => {
            // Check if the title or description matches the search input (case-insensitive)
            return (
                item?.title?.toLowerCase().includes(searchInput?.toLowerCase()) ||
                item?.description?.toLowerCase().includes(searchInput?.toLowerCase())
            );
        });
        const filteredDataPediatricSurg = PediatricSurgery.filter((item) => {
            // Check if the title or description matches the search input (case-insensitive)
            return (
                item?.title?.toLowerCase().includes(searchInput?.toLowerCase()) ||
                item?.description?.toLowerCase().includes(searchInput?.toLowerCase())
            );
        });
     console.log(refreshfield)

        // console.log(filteredData)
    return (
        <div
            className="fixed inset-0 z-50 flex items-center  justify-center bg-black bg-opacity-50 text-black"
        >
            <div
                className="relative bg-white rounded-lg shadow-lg dark:bg-white max-w-2xl w-full mx-4 mt-[120px]"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-black text-center items-center ">
                        Searched Items
                    </h3>
                    <button
                        type="button"
                        className="text-gray-400 hover:bg-gray hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-black"
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
                <div className='grid grid-cols-2 gap-4'>

                <div className="p-4 md:p-5 space-y-4 max-h-[60vh] overflow-y-auto">
                    <h1 className='font-bold text-xl'>Pediatric</h1>
                {filteredDataPediatric && filteredDataPediatric.map((item,i) => (
                    
                   <div key={i} onClick={closeSearchModal}>
                        <Link to={`/pediatrics/${item.slug}`}>{item.title}</Link> 
                        </div>
                ))}
                </div>
                <div className="p-4 md:p-5 space-y-4 max-h-[60vh] overflow-y-auto">
                <h1 className='font-bold text-xl'>Pediatric Surgery</h1>

                {filteredDataPediatricSurg && filteredDataPediatricSurg.map((item,i) => (
                   <div key={i} onClick={()=>{closeSearchModal();
 refreshfield();
                   }}>
                        <Link to={`/pediatrics/${item.slug}`}>{item.title}</Link> 
                        </div>
                ))}
                </div>
                </div>

            </div>
        </div>
    );
};


SearchModal.propTypes = {
    closeSearchModal: PropTypes.func.isRequired,
    searchInput: PropTypes.string.isRequired,
    refreshfield: PropTypes.func.isRequired,
};

export default SearchModal;