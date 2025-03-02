import  { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PediatricSurgery } from "../Data/PediatricSurgData";
import bannerimg from "../assets/PediatricSurg/Bgimg1.jpg"

import Aboutimg from "../assets/Pediatricsurg/Aboutimg.jpeg"


const PediatricSurgDetails = () => {
  const { slug } = useParams();
  const detail = PediatricSurgery.find(item => item.slug === slug);

  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  if (!detail) {
    return <div className="text-center text-red-500 mt-10">Item not found!</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Page Banner */}
      <div className="relative h-96 mb-8">
        <img
          // src={detail['page-banner'].img}
          src={bannerimg}
          alt={detail.title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-4xl font-bold text-white mb-4">{detail['page-banner'].title}</h1>
          <p className="text-lg text-white text-center max-w-2xl">{detail['page-banner'].description}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="flex-1 mt-[-140px]">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{detail['content-description'].title}</h2>
          <p className="text-lg text-gray-700">{detail['content-description'].description}</p>
        </div>
        <div className="flex-1">
          <img
            // src={detail['content-description']?.img}
            src={Aboutimg}
            alt={detail['content-description'].title}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {detail.feature.description.map((feature, index) => (
          <div
            key={index}
            className="border border-gray rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={detail.feature.img}
              alt={feature}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">{detail.feature.title}</h3>
            <p className="text-gray-700">{feature}</p>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
        {detail.faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray py-4"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
              <span className="text-xl text-gray-600">
                {openFaqIndex === index ? '-' : '+'}
              </span>
            </div>
            {openFaqIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
   
    </div>
  );
};

export default PediatricSurgDetails;