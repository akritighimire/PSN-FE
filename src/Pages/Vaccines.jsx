import immunizationData from '../Data/VaccineData'

const Vaccines = () => {
  return (
    <>
      <div className='m-auto p-6'>
        <h1 className='text-center mb-4 text-2xl text-[#b13737] font-bold'>Immunization Record</h1>
        <table className='items-center m-auto table-auto border-collapse border border-black w-full '>
          <thead className='bg-[#b13737] text-white'>
            <tr>
              <th className='border border-black px-4 py-2' >SN</th>
              <th className='border border-black px-4 py-2' >Recommended Age</th>
              <th className='border border-black px-4 py-2' >Vaccine</th>
              <th className='border border-black px-4 py-2'>Immunization Against</th>
              <th className='border border-black px-4 py-2'>Schedule</th>
              <th className='border border-black px-4 py-2'>No. of Dose</th>
              <th className='border border-black px-4 py-2'>Due Date</th>
              <th className='border border-black px-4 py-2'>Given Date</th>
              <th className='border border-black px-4 py-2'>Signature</th>

            </tr>
          </thead>
          <tbody>
            {immunizationData.map((item, index) => (
              // item.vaccines?  (
              <tr key={index} className='bg-yellow-200'>
                <td className='px-4 py-2 border border-black  '>{index + 1}</td>
                <td className='px-4 py-2 border border-black '>{item.age}</td>
                <td className='px-4 py-2 border border-black  '  >
                  {<VacineCom vaccines={item.vaccines} />}
                </td>
                <td className='px-4 py-2 border border-black '>
                  {<ImmunizationAgainst vaccines={item.vaccines} />}
                </td>
                <td className='px-4 py-2 border border-black '>
                  {<Schedule vaccines={item.vaccines} />}
                </td>
                <td className='px-4 py-2 border border-black '>
                  {<DoseNo vaccines={item.vaccines} />}
                </td>
                <td className='px-4 py-2 border border-black '>{item.dueDate}</td>
                <td className='px-4 py-2 border border-black '>{item.givenDate}</td>
                <td className='px-4 py-2 border border-black '>{item.signature}</td>



              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>

  )
}

export default Vaccines

const VacineCom = ({ vaccines }) => {

  return (
    <div>
      {vaccines.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  )
}
const ImmunizationAgainst = ({ vaccines }) => {

  return (
    <div>
      {vaccines.map((item, index) => (
        <div key={index}>
          <p>{item.immunizationAgainst}</p>
        </div>
      ))}
    </div>
  )
}
const Schedule = ({ vaccines }) => {

  return (
    <div>
      {vaccines.map((item, index) => (
        <div key={index}>
          <p>{item.schedule}</p>
        </div>
      ))}
    </div>
  )
}
const DoseNo = ({ vaccines }) => {

  return (
    <div>
      {vaccines.map((item, index) => (
        <div key={index}>
          <p>{item.numberOfDose}</p>
        </div>
      ))}
    </div>
  )
}