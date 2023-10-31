import AllData from './AllData';
import { useState } from 'react';
import {motion} from 'framer-motion';
import Bax from './Bax';
const AllCard = () => {
    const [rowsToShow, setRowsToShow] = useState(8);


  const handleLoadMore = () => {
    setRowsToShow((prevRows) => prevRows + 8);
  }
  return (
    <div className="flex flex-wrap px-3">
      {AllData.slice(0, rowsToShow).map((item) => (
          <Bax key={item.key} images={item.image} />
        // <div

        //     key={item.key} className="w-1/4 px-3 h-auto object-fill"
        // >
        //   {/* <img className="object-fill rounded-lg mb-3" loading="lazy" src={item.image} alt={item.key} /> */}
        // </div>
      ))}
      {AllData.length > rowsToShow && (
        <motion.button 
            className="w-full py-3 text-white bg-blue-500 overflow-hidden rounded-md mt-4"
            onClick={handleLoadMore}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}>    
          Load More
        </motion.button>
      )}
    </div>
  )
}

export default AllCard