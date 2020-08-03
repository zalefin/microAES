import React from 'react';
import {motion} from 'framer-motion';


class Cell extends React.Component {
    render() {
	return (
	    <motion.div className='cell' animate={this.props.offset}>
	    {this.props.value}
	    </motion.div>
	);
    }
}

export default Cell;
