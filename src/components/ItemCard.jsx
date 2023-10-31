/* eslint-disable react/prop-types */
import { useState } from 'react';
import { motion } from 'framer-motion';
import items from './data';
function ItemCard() {
  const [selectedId, setSelectedId] = useState(null);

  return  (
    <div className="flex flex-wrap gap-4 p-4">
      {items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          initial={false} // Disable initial animation
          animate={{
            scale: selectedId === item.id ? 1.05 : 1, // Apply scaling animation for selected item
            backgroundColor: selectedId === item.id ? 'lightblue' : 'white', // Apply background color animation
          }}
          onClick={() => setSelectedId(item.id)}
          className={`p-4 border rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer flex-1 ${
            selectedId === item.id ? 'bg-blue-200' : ''
          }`}
        >
          <motion.h5 className="text-lg font-semibold">{item.subtitle}</motion.h5>
          <motion.h2 className="text-xl font-bold mt-2">{item.title}</motion.h2>
        </motion.div>
      ))}

      {selectedId && (
        <motion.div
          layoutId={selectedId}
          className=" w-4/5 h-4/5 flex justify-center items-center bg-gray-800 bg-opacity-80 z-50"
        //   onClick={() => setSelectedId(null)}
        >
          <motion.div
            layoutId={selectedId}
            className="p-6 bg-white rounded-lg shadow-lg text-center"
          >
            <motion.h5 className="text-lg font-semibold">
              {items.find((item) => item.id === selectedId).subtitle}
            </motion.h5>
            <motion.h2 className="text-xl font-bold mt-2">
              {items.find((item) => item.id === selectedId).title}
            </motion.h2>
            <motion.button
              onClick={() => setSelectedId(null)}
              className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300"
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );

}

// (
//     <div className="flex flex-wrap gap-4 p-4">
//       {items.map((item) => (
//         <motion.div
//           key={item.id}
//           layoutId={item.id}
//           onClick={() => setSelectedId(item.id)}
//           initial={false} // Disable initial animation
//           animate={{
//             scale: selectedId === item.id ? 1.05 : 1, // Apply scaling animation for selected item
//             backgroundColor: selectedId === item.id ? 'lightblue' : 'white', // Apply background color animation
//           }}
//           className={`p-4 border rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer flex-1`}
//         >
//           <motion.h5 className="text-lg font-semibold">{item.subtitle}</motion.h5>
//           <motion.h2 className="text-xl font-bold mt-2">{item.title}</motion.h2>
//         </motion.div>
//       ))}

//       <AnimatePresence>
//         {selectedId && (
//           <motion.div
//             layoutId={selectedId}
//             className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-80 z-50"
//             onClick={() => setSelectedId(null)}
//           >
//             <motion.div
//               layoutId={selectedId}
//               className="p-6 bg-white rounded-lg shadow-lg text-center"
//             >
//               <motion.h5 className="text-lg font-semibold">
//                 {items.find((item) => item.id === selectedId).subtitle}
//               </motion.h5>
//               <motion.h2 className="text-xl font-bold mt-2">
//                 {items.find((item) => item.id === selectedId).title}
//               </motion.h2>
//               <motion.button
//                 onClick={() => setSelectedId(null)}
//                 className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300"
//               >
//                 Close
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );


export default ItemCard;
{/* 
{items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          onClick={() => setSelectedId(item.id)}
          className="h-1/4 w-full border-2 border-red-700"
        >
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            <motion.h5>{items.find((item) => item.id === selectedId).subtitle}</motion.h5>
            <motion.h2>{items.find((item) => item.id === selectedId).title}</motion.h2>
            <motion.button onClick={() => setSelectedId(null)} />
          </motion.div>
        )}
      </AnimatePresence> */}