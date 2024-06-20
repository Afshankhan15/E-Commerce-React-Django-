// import React from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";

// const Confirmation = ({close, onConfirm }) => {
//   return (
//     <div className='w-full h-[100vh] flex justify-center items-center'>
//         <div className='flex flex-col border rounded-lg bg-white px-6 py-6 max-w-[400px] shadow-xl'>
            // <p onClick={close} className='flex justify-end text-xl font-medium hover:text-gray-600 cursor-pointer mb-2'>
            //    <FontAwesomeIcon icon={faXmark} />
            // </p>
//            <div className='flex flex-col items-center'>
//            <h1 className='text-xl font-bold'>Add Product</h1>
//             <p className=''>Are you sure you would like to Buy this?</p>
//             <div className='flex gap-6 mt-3'>
//                 <button
//                 onClick={() => {
//                     onConfirm(); 
//                     close(); 
//                   }} 
//                 className='border rounded-lg px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold'>Yes</button>
//                 <button onClick={close} className='border rounded-lg px-6 py-2 bg-red-500 hover:bg-red-700 text-white font-semibold'>No</button>
//             </div>
//            </div>
//         </div>
//     </div>
//   )
// }

// export default Confirmation

import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Confirmation = ({close}) => {
  return (
    <div className='w-full flex justify-end'>
      <div className='flex justify-between items-center px-6 py-3 min-w-[320px] border border-green-700 rounded-lg mt-2 mr-2 bg-green-400 text-white'>
        <h1 className='text-xl leading-5 font-medium'>Success</h1>
        <p onClick={close} className='flex justify-end text-xl font-medium text-white cursor-pointer'>
               <FontAwesomeIcon icon={faXmark} />
          </p>
      </div>
    </div>
  )
}

export default Confirmation