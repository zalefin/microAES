import React from 'react';
import './App.css';
import {motion} from 'framer-motion';

class TitleScene extends React.Component {
    constructor(props) {
	super(props);

    }

    render() {
	return (
	    <div className='scene'>
	    <motion.div className='title'
		initial={{opacity: 0}}
		animate={{opacity: 1, transition: {duration: 1.5}}}
	    >microAES</motion.div>
	    <motion.div
		className='button'
		onClick={this.props.encryptHandler}
		initial={{opacity: 0}}
		animate={{opacity: 1, transition: {duration: 1.5, delay: 1}}}
		whileHover={{scale: 1.05, transition: {duration: 0.5}}}
		whileTap={{scale: 0.9}}>
		encrypt
	    </motion.div>
	    <motion.div
		className='button'
		initial={{opacity: 0}}
		animate={{opacity: 1, transition: {duration: 1.5, delay: 1.2}}}
		whileHover={{scale: 1.05, transition: {duration: 0.5}}}
		whileTap={{scale: 0.9}}>
		decrypt
	    </motion.div>
	    </div>

	);
    }
}

class CipherStory extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    scene: "title",
	}
    }

    render() {
	let scene;
	switch(this.state.scene) {
	    case 'title':
		scene = <TitleScene encryptHandler={() => this.setState({scene: "encrypt"})}/>;
		break;
	    case 'input':
		scene = <InputScene />;
		break;
	}
	return (
	    <div className='story'>
	    {scene}
	    </div>
	);
    }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
	<CipherStory/>
      </header>
    </div>
  );
}

export default App;
