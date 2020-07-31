import React from 'react';
import './App.css';
import {motion} from 'framer-motion';

const smoothButton = function(onClick, text, delay) {
    return (
	<motion.div
	className='button'
	onClick={onClick}
	initial={{opacity: 0}}
	animate={{opacity: 1, transition: {duration: 1.5, delay: delay}}}
	whileHover={{scale: 1.05, transition: {duration: 0.5}}}
	whileTap={{scale: 0.9}}>
	{text}
	</motion.div>
    );
}

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
	    {smoothButton(this.props.encryptHandler, 'encrypt', 1)}
	    {smoothButton(this.props.decryptHandler, 'decrpyt', 1.2)}
	    </div>

	);
    }
}

class DataForm extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    data: '',
	    key: '',
	};

	this.handleChangeData = this.handleChangeData.bind(this);
	this.handleChangeKey = this.handleChangeKey.bind(this);
	this.handleSubmit = this.props.handleSubmit.bind(this);
    }

    handleChangeData(event) {
	this.setState({data: event.target.value});
    }

    handleChangeKey(event) {
	this.setState({key: event.target.value});
    }

    render() {
	return (
	    <div>
	    <input id='datain' type="text" value={this.state.data} onChange={this.handleChangeData} />
	    <br/>
	    <input id='keyin' type="text" value={this.state.key} onChange={this.handleChangeKey} />
	    {smoothButton(this.handleSubmit, 'begin', 1)}
	    </div>
	);
    }
}

class InputScene extends React.Component {
    constructor(props) {
	super(props)
    }
    render() {
	return (
	    <span>
	    <div>&#x1F82C</div>
	    <div className='scene'>
	    <DataForm handleSubmit={this.props.beginHandler}/>
	    </div>
	    <div>&#x1F82E</div>
	    </span>
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
		scene = <TitleScene encryptHandler={() => this.setState({scene: 'input'})}/>;
		break;
	    case 'input':
		scene = <InputScene beginHandler={() => this.setState({scene: 'firstop'})}/>;
		break;
	    case 'firstop':
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
