import React from 'react';
import {motion} from 'framer-motion';


const SmoothButton = function(onClick, text, delay) {
    return (
	<motion.div
	className='button'
	onClick={onClick}
	initial={{opacity: 0}}
	animate={{opacity: 1, transition: {duration: 1.5, delay: delay}}}
	whileHover={{scale: 1.05, transition: {duration: 0.3}}}
	whileTap={{scale: 0.9}}>
	{text}
	</motion.div>
    );
}

export default SmoothButton;
