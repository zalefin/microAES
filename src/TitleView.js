import React from 'react';
import {motion} from 'framer-motion';
import SmoothButton from './SmoothButton';

class TitleView extends React.Component {
    constructor(props) {
	super(props);

    }

    render() {
	return (
	    <div className='scene'>
	    <div style={{marginBottom: '40px'}}>
	    <motion.div className='title'
		initial={{opacity: 0}}
		animate={{opacity: 1, transition: {duration: 1.5}}}
	    >microAES</motion.div>
	    <motion.div
		style={{'font-size': '10px'}}
		initial={{opacity: 0}}
		animate={{opacity: 1, transition: {duration: 1.5}}}
	    >a visual demonstration of the Rijndael algorithm. minified.</motion.div>
	    </div>
	    {SmoothButton(this.props.encryptHandler, 'encrypt', 1)}
	    {SmoothButton(this.props.decryptHandler, 'decrpyt', 1.2)}
	    </div>

	);
    }
}

export default TitleView;
