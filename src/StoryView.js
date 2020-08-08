import React from 'react';


class StoryView extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    si: 0,
	}
	this.handleLeft = this.handleLeft.bind(this);
	this.handleRight = this.handleRight.bind(this);
    }

    setScene(i) {
	this.setState({si: i});
    }

    prevScene() {
	let i = this.state.si;
	this.setScene(i - 1);
    }

    nextScene() {
	let i = this.state.si;
	this.setScene(i + 1);
    }

    handleLeft() { this.prevScene(); }
    
    handleRight() { this.nextScene(); }

    render() {
	const leftctl = this.state.si != 0 ? 
	    <div className='scenectl' onClick={this.handleLeft}> {'\u2190'} </div>
	    :
	    <div className='scenectl'></div>
	const rightctl = this.state.si < this.props.i_max ? 
	    <div className='scenectl' onClick={this.handleRight}> {'\u2192'} </div>
	    :
	    <div className='scenectl'></div>

	return (
	    <div className='story'>
	    {leftctl}
	    <this.props.t_story si={this.state.si}/>
	    {rightctl}
	    </div>
	);
    }
}

export default StoryView;
