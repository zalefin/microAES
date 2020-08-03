import React from 'react';
import TitleView from './TitleScene';
import InputView from './InputScene';


class StoryView extends React.Component {
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
		scene = <TitleView encryptHandler={() => this.setState({scene: 'input'})}/>;
		break;
	    case 'input':
		scene = <InputView beginHandler={() => this.setState({scene: 'firstop'})}/>;
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

export default StoryView;
