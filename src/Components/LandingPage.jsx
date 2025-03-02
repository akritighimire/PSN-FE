// import Doctor from "../assets/HomeImage/LandingPage/Doctor.png";
// import Surgery from "../assets/HomeImage/LandingPage/Surgery.png";

// import img1 from "../assets/HomeImage/Babies/img1.png";
// import img2 from "../assets/HomeImage/Babies/img2.png";
// import img3 from "../assets/HomeImage/Babies/img3.png";
// import img4 from "../assets/HomeImage/Babies/img4.png";
// import img5 from "../assets/HomeImage/Babies/img5.png";
// import img6 from "../assets/HomeImage/Babies/img6.png";
// import cartimg1 from "../assets/HomeImage/LandingPage/img2.jpg";
// import cartimg2 from "../assets/HomeImage/LandingPage/img1.jpg";
// import cartimg3 from "../assets/HomeImage/LandingPage/img3.png";

// const LandingPage = () => {
//   const images = [img1, img2, img3, img4, img5, img6];
//   const cases = [
//     {
//       title: "Congenital Heart Defects",
//       description:
//         "Surgical intervention is often required for congenital heart defects like holes in the heart or valve abnormalities.",
//       image: cartimg1,
//     },
//     {
//       title: "Spina Bifida",
//       description:
//         "Surgery is necessary to close the gap in the spinal cord and protect the spinal nerves.",
//       image: cartimg2,
//     },
//     {
//       title: "Cleft Lip and Palate",
//       description:
//         "Surgical repair of cleft lip and palate is done to restore appearance and function.",
//       image: cartimg3,
//     },
//     // {
//     //   title: "Appendicitis",
//     //   description: "Emergency surgery may be needed to remove the appendix if it's inflamed or ruptured.",
//     //   image: cartimg2
//     // },
//     // {
//     //   title: "Hernias",
//     //   description: "In cases of large or painful hernias, surgery is performed to correct the issue.",
//     //   image: cartimg1
//     // },
//   ];

//   return (
//     <>
//       <div className="mt-10">
//         {/* Babies image */}
//         <div className="flex justify-center mx-auto w-full">
//           <div className="flex flex-wrap gap-16 lg:gap-20 mb-14 justify-center w-[90%] sm:w-[83%]">
//             {images.map((image, index) => (
//               <div key={index} className="cursor-pointer text-center w-[100px]">
//                 <img
//                   src={image}
//                   className="w-full h-[100px] hover:mt-[-20px]"
//                   alt="image"
//                 />
//                 <p className="mt-2">
//                   {
//                     [
//                       "Child Growth and Development",
//                       "Healthy Newborn Features",
//                       "Breast Feeding",
//                       "Vaccine",
//                       "Care of Newborn",
//                       "Hospitalization Criteria",
//                       "Young Adult",
//                     ][index]
//                   }
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex w-full justify-center">
//           <h1 className="bg-[#A53860] w-full lg:w-[86%] h-[7px] mb-12"></h1>
//         </div>

//         <div className="flex flex-col sm:flex-row justify-around mx-auto px-5 section1">
//           <div className="w-full sm:w-[45%] text-justify">
//             <h1 className="font-bold text-[24px] mb-4 lg:text-left text-center ">
//               Comprehensive Pediatric Surgical Care
//             </h1>
//             <p className="pb-5">
//               Pediatric surgery is a specialized field of medicine dedicated to
//               the surgical care of infants, children, and adolescents. At our
//               clinic in Nepal, we provide comprehensive surgical solutions for a
//               wide range of conditions, from congenital anomalies to traumatic
//               injuries. Our team of highly skilled pediatric surgeons is
//               committed to delivering the highest standard of care, ensuring the
//               well-being and healthy development of your child. Whether its a
//               routine procedure or a complex surgery, we prioritize minimally
//               invasive techniques to reduce recovery time and ensure better
//               outcomes. Trust us to provide compassionate, family-centered care
//               for your little ones.
//             </p>
//             <p className="text-[#A53860] text-right font-bold cursor-pointer hover:text-[#762542] mb-10">
//               Read More...
//             </p>
//           </div>

//           <img
//             className="w-[460px] lg:h-[450px] rounded-md shadow-combined h-[400px] m-auto lg:m-0 img"
//             src={Doctor}
//             alt="doctor"
//           />
//         </div>

//         {/* Cases need to operate */}
//         {/* <div className='flex mx-auto mb-14'>
//           <h1 className='mx-auto font-bold text-[20px] mt-10'>Cases Need to Operate</h1>
//         </div> */}
//         <div className="flex justify-center">
//           <h1 className="mx-auto font-bold text-[20px] mt-10">
//             Cases Need to Operate
//           </h1>
//         </div>
//         <div className="flex flex-wrap justify-center mx-auto gap-8 mt-6 mb-10 ">
//           {cases.map((caseItem, index) => (
//             <div
//               key={index}
//               className=" bg-white shadow-md rounded-lg overflow-hidden text-center w-[350px] transform hover:scale-105 transition duration-300 ease-in-out"
//             >
//               <div className="relative">
//                 <img
//                   src={caseItem.image}
//                   alt={caseItem.title}
//                   className="w-full h-[200px] object-cover rounded-t-lg transition duration-300 ease-in-out hover:opacity-80"
//                 />
//               </div>
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   {caseItem.title}
//                 </h3>
//                 <p className="mt-2 text-gray-600">{caseItem.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-around flex-col sm:flex-row mx-auto px-5 section1 mb-10">
//           <img
//             className="w-[400px] lg:h-[450px] rounded-md lg:m-0 h-[400px] m-auto lg:mt-0 img"
//             src={Surgery}
//             alt="surgery"
//           />

//           <div className="sm:w-[45%] w-full text-justify">
//             <h1 className="font-bold text-[24px] mb-4 text-center lg:text-left lg:mt-0 h1 ">
//               When Does Your Child Need Surgery?
//             </h1>
//             <p className="pb-5">
//               Children may require surgery for various conditions, including
//               congenital defects, appendicitis, hernias, or trauma-related
//               injuries. Some common cases we handle include cleft lip and palate
//               repair, undescended testicles, pyloric stenosis, and congenital
//               heart defects. Early diagnosis and timely intervention are crucial
//               for ensuring the best possible outcomes. Our team works closely
//               with pediatricians and other specialists to provide a
//               multidisciplinary approach to care. If your child requires
//               surgery, rest assured that they are in safe hands. We are
//               dedicated to making the surgical experience as comfortable and
//               stress-free as possible for both the child and their family.
//             </p>
//             <p className="text-[#A53860] text-right font-bold cursor-pointer hover:text-[#762542] mb-10">
//               Read More...
//             </p>
//           </div>
//         </div>

//         {/* Additional cases need to operate (cards) */}
//       </div>
//     </>
//   );
// };

// export default LandingPage;

import Doctor from "../assets/HomeImage/LandingPage/Doctor.png";
import Surgery from "../assets/HomeImage/LandingPage/Surgery.png";

import img1 from "../assets/HomeImage/Babies/img1.png";
import img2 from "../assets/HomeImage/Babies/img2.png";
import img3 from "../assets/HomeImage/Babies/img3.png";
import img4 from "../assets/HomeImage/Babies/img4.png";
import img5 from "../assets/HomeImage/Babies/img5.png";
import img6 from "../assets/HomeImage/Babies/img6.png";
import cartimg1 from "../assets/HomeImage/LandingPage/img2.jpg";
import cartimg2 from "../assets/HomeImage/LandingPage/img1.jpg";
import cartimg3 from "../assets/HomeImage/LandingPage/img3.png";

const LandingPage = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const cases = [
    {
      title: "Congenital Heart Defects",
      description:
        "Surgical intervention is often required for congenital heart defects like holes in the heart or valve abnormalities.",
      image: cartimg1,
    },
    {
      title: "Spina Bifida",
      description:
        "Surgery is necessary to close the gap in the spinal cord and protect the spinal nerves.",
      image: cartimg2,
    },
    {
      title: "Cleft Lip and Palate",
      description:
        "Surgical repair of cleft lip and palate is done to restore appearance and function.",
      image: cartimg3,
    },
  ];

  return (
    <>
      <div className="mt-10">
        {/* Babies image */}
        <div className="flex justify-center mx-auto w-full">
          <div className="flex flex-wrap gap-16 lg:gap-20 mb-14 justify-center w-[90%] sm:w-[83%]">
            {images.map((image, index) => (
              <div key={index} className="cursor-pointer text-center w-[100px]">
                <img
                  src={image}
                  className="w-full h-[100px] hover:mt-[-20px] transition-all duration-500 ease-in-out"
                  alt="image"
                />
                <p className="mt-2 transition-all duration-300 ease-in-out hover:text-[#A53860]">
                  {
                    [
                      "Child Growth and Development",
                      "Healthy Newborn Features",
                      "Breast Feeding",
                      "Vaccine",
                      "Care of Newborn",
                      "Hospitalization Criteria",
                      "Young Adult",
                    ][index]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full justify-center">
          <h1 className="bg-[#A53860] w-full lg:w-[86%] h-[7px] mb-12 transition-colors duration-300"></h1>
        </div>

        <div className="flex flex-col sm:flex-row justify-around mx-auto px-5 section1">
          <div className="w-full sm:w-[45%] text-justify">
            <h1 className="font-bold text-[24px] mb-4 lg:text-left text-center ">
              Comprehensive Pediatric Surgical Care
            </h1>
            <p className="pb-5">
              Pediatric surgery is a specialized field of medicine dedicated to
              the surgical care of infants, children, and adolescents. At our
              clinic in Nepal, we provide comprehensive surgical solutions for a
              wide range of conditions, from congenital anomalies to traumatic
              injuries. Our team of highly skilled pediatric surgeons is
              committed to delivering the highest standard of care, ensuring the
              well-being and healthy development of your child. Whether its a
              routine procedure or a complex surgery, we prioritize minimally
              invasive techniques to reduce recovery time and ensure better
              outcomes. Trust us to provide compassionate, family-centered care
              for your little ones.
            </p>
            <p className="text-[#A53860] text-right font-bold cursor-pointer hover:text-[#762542] transition-colors duration-300 mb-10">
              Read More...
            </p>
          </div>

          <img
            className="w-[460px] lg:h-[450px] rounded-md shadow-combined h-[400px] m-auto lg:m-0 transition-transform duration-500 hover:scale-105"
            src={Doctor}
            alt="doctor"
          />
        </div>

        <div className="flex justify-center">
          <h1 className="mx-auto font-bold text-[20px] mt-10">
            Cases Need to Operate
          </h1>
        </div>
        <div className="flex flex-wrap justify-center mx-auto gap-8 mt-6 mb-10">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden text-center w-[350px] transform hover:scale-105 transition-transform duration-500 ease-in-out"
            >
              <div className="relative">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-[200px] object-cover rounded-t-lg transition-opacity duration-300 ease-in-out hover:opacity-80"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {caseItem.title}
                </h3>
                <p className="mt-2 text-gray-600">{caseItem.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-around flex-col sm:flex-row mx-auto px-5 section1 mb-10">
          <img
            className="w-[400px] lg:h-[450px] rounded-md lg:m-0 h-[400px] m-auto lg:mt-0 transition-transform duration-500 hover:scale-105"
            src={Surgery}
            alt="surgery"
          />

          <div className="sm:w-[45%] w-full text-justify">
            <h1 className="font-bold text-[24px] mb-4 text-center lg:text-left lg:mt-0 transition-colors duration-300 hover:text-[#A53860]">
              When Does Your Child Need Surgery?
            </h1>
            <p className="pb-5">
              Children may require surgery for various conditions, including
              congenital defects, appendicitis, hernias, or trauma-related
              injuries. Some common cases we handle include cleft lip and palate
              repair, undescended testicles, pyloric stenosis, and congenital
              heart defects. Early diagnosis and timely intervention are crucial
              for ensuring the best possible outcomes. Our team works closely
              with pediatricians and other specialists to provide a
              multidisciplinary approach to care. If your child requires
              surgery, rest assured that they are in safe hands. We are
              dedicated to making the surgical experience as comfortable and
              stress-free as possible for both the child and their family.
            </p>
            <p className="text-[#A53860] text-right font-bold cursor-pointer hover:text-[#762542] transition-colors duration-300 mb-10">
              Read More...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
