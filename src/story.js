import React from 'react';
import {motion} from 'framer-motion';
import Cell from './Cell';


export class CryptStory extends React.Component {
    constructor(props) {
	super(props);
	this.scene = [];
	this.pos = [];
	this.val = [];
    }

    compile() { }

    renderCell(i) {
    }

    render() {
	return (
	    <div>
	    </div>

	);
    }
}

export class EncryptStory extends CryptStory {

}


export class DecryptStory extends CryptStory {

}

export class FibStory extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    scenes_states: [1, 1]
	};
    }

    render_state(i) {
	let v;
	if(this.state.scenes_states[i+2]) {
	    v = this.state.scenes_states[i+2];
	}
	else {
	    v = this.state.scenes_states[i] + this.state.scenes_states[i+1];
	    this.setState({scenes_states: this.state.scenes_states.concat([v])});
	}

	return (
	    <div>
	    {v}
	    </div>
	);

    }

    render() {
	return (
	    <div className='scene'>
	    {this.render_state(this.props.si)}
	    </div>
	);
    }
}
