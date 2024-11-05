import React from 'react';
import * as motion from 'framer-motion/client';

const FramerComponent = () => {
    return (
        <div className="h-full w-full flex gap-4 justify-around">
            <motion.div
                className="h-10 w-10 rounded-xl bg-red-500"
                initial={{ opacity: 0.2 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                animate={{ x: 100, y: 100 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.5 }}
            ></motion.div>
            {/* zooming in place  */}
            <motion.div
                className=" h-20 w-20 rounded-full bg-blue-500"
                initial={{ opacity: 0, scale: 0.5 }}
                transition={{duration:0.6}}
                animate={{ opacity: 1, scale: 1 }}
            ></motion.div>
            {/* keyframes */}
            <motion.div className='h-24 w-24 bg-black '
           animate={{
            scale:[1,2,3,2,1],
            borderRadius:["10%","30%","50%","30%","10%"],
            rotate: [0, 0, 270, 270, 0],
           }} 
           transition={{duration:1.4}}
            >
            </motion.div>
            {/* gestures */}
            <motion.div className='h-20 w-20 rounded-xl bg-green-500'
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            >


            </motion.div>
        </div>
    );
};

export default FramerComponent;
