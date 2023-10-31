import { useState, useEffect } from 'react'; // Make sure to import 'React' and 'useState' from the 'react' library.
import Data from './data';
import AllCard from './AllCard';
import { motion } from 'framer-motion';
const FilterGal = () => {
    const [collection, setCollection] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
  
    useEffect(() => {
      setCollection([...new Set(Data.map((item) => item.title))]);
    }, []);
  
    const gallery_filter = (itemData) => {
      setSelectedItem(itemData);
    }
  
    return (
    <>
        <div className="w-full mx-auto mb-5">
            <ul className="flex bg-black mt-5 justify-center px-4 py-2">
            <li>
                <motion.button
                    className="px-6 py-4 bg-slate-500 text-white rounded-lg"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", duration:0.8, stiffness: 400, damping: 10 }}
                    onClick={() => setSelectedItem(null)} // Deselect by clicking "All"
                >
                    All
                </motion.button>
            </li>
            {collection.map((item) => (
            <li key={item} className="ml-2">
                <motion.button
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", duration:0.8, stiffness: 400, damping: 10 }}
                    className="bg-slate-500 px-6 py-4 cursor-pointer text-white rounded-lg"
                    onClick={() => gallery_filter(item)}
                >
                <span>{item}</span>
                </motion.button>
            </li>
            ))}
            </ul>
        </div>

        <div className="flex flex-row flex-wrap gap-3 justify-center items-stretch">
          {selectedItem === null ? (
            <AllCard />
          ) : (
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
                }}
                className="flex flex-row flex-wrap"
            >
            {Data.filter((item) => item.title === selectedItem).map((item) => (
              <div key={item.id} className="w-full px-10 h-2/4 flex flex-wrap justify-center gap-2">
                {item.image.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className='w-1/4 h-2/4'
                  >
                    <img className='w-full object-cover rounded-[9999px]' src={image} alt={item.title} />
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
          )}
        </div>
    </>
    );
  };
  
  export default FilterGal;