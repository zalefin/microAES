import React from 'react';


class DummyNumScene extends React.Component {
    render() {
	return (
	    <div className='scene'>
	    <div className='cell'>
	    {this.props.n}
	    </div>
	    </div>
	);
    }
}


class StoryView extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    si: 0,
	    story: this.props.story,
	}
    }

    setScene(i) {
	this.setState({si: i});
    }

    nextScene() {
	let i = this.state.si;
	if(i == 0) return;
	this.setScene(i);
    }

    prevScene() {
	let i = this.state.si;
	if(i >= this.state.scenes.length) return;
	this.setScene(i);
    }

    renderScene() {
	let i = this.state.si;
	return this.state.scenes[i]();
    }

    handleLeft() { this.prevScene(); }
    
    handleRight() { this.nextScene(); }

    render() {
	const leftctl = this.state.si != 0 ? 
	    <div className='scenectl' onClick={this.handleLeft}> {'\u2190'} </div>
	    :
	    <div className='scenectl'></div>
	const rightctl = this.state.si >= this.state.story.states.length ? 
	    <div className='scenectl' onClick={this.handleRight}> {'\u2192'} </div>
	    :
	    <div className='scenectl'></div>
	return (
	    <div className='story'>
	    {leftctl}
	    {this.renderScene()}
	    {rightctl}
	    </div>
	);
    }
}

export default StoryView;
