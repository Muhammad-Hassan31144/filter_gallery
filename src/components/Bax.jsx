/* eslint-disable react/prop-types */
import  { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px`;

function Image({ image }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsLoaded(true);
    }
  }, [isInView]);

  return (
    <section className="flex w-1/4 flex-wrap">
      <motion.div
        initial={false}
        animate={
          isLoaded
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 2 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
        className="w-full flex px-3 h-auto object-fill"
      >
        <img
            className="object-fill rounded-lg mb-3" 
            src={image} alt="" />
      </motion.div>
    </section>
  );
}

function Bax({images}) {
//   const images = [imga, imgb, imgc, imgd, imge];
  return (
    <>
        <Image key={images} image={[images]} />
      {/* {images.image.map((image, index) => (
      ))} */}
    </>
  );
}

export default Bax;

