import React from 'react';
import './App.css';
import {motion} from 'framer-motion';
import {SUB, INV_SUB} from './microaes';
import SmoothButton from './SmoothButton';


class TitleScene extends React.Component {
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
	    {SmoothButton(this.handleSubmit, 'begin', 1)}
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
	    <div className='scene'>
	    <DataForm handleSubmit={this.props.beginHandler}/>
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
	    <div className='scenectl'> {'\u2190'} </div>
	    {scene}
	    <div className='scenectl'> {'\u2192'} </div>
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
