import React, { useState } from 'react';
import { motion } from "framer-motion";
import './animationContainer.scss';

const AnimationContainer = () => {
    const [ ySpot, setYSpot ] = useState(0);

    const variants = {
        visible: { opacity: 1, transform: "scale(1)"},
        hidden: { opacity: 0, transform: "scale(0)"}
    };

    return ( 
        <div className="centered"> 
            <button className="button animation__button" onClick={() => ySpot === 0 ? setYSpot(102) : setYSpot(0)}>Move it</button>

            <motion.div className="box" transition={{ duration: 1}} animate={{ y: ySpot }} />


            <motion.div className="box2" initial="hidden" animate="visible" variants={variants} transition={{duration: 2}}></motion.div>

            <div className="box-container">
                Can you see it?
                <motion.div className="box3"  drag={true} dragConstraints={{ left: 0, right: 0, top: 0,bottom: 0 }}>Drag to see</motion.div>
            </div>
        </div>
     );
}
 
export default AnimationContainer;