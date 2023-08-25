import React from "react";
import { motion } from "framer-motion";

function ScrollAnimationTrigger() {
    return (
        <div 
        style = {{
            display: "flex",
            flexDirection: "column", 
            alignItems: "center"
        }}
        >
            <h2>React Scroll Animation with framer</h2>
        </div>
    )
}

function Box() {
    return (
        <motion.div
        initial={{opacity:0, scale:0, x: 500}}
        whileInView={{opacity: 1, scale: 1, x: 0}}
        transition={{duration: 0.6}}
        //viewport = {{once: true}}
        >
        </motion.div>
    );
};

export default Box;