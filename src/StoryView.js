import React from 'react';
import TitleView from './TitleView';
import InputView from './InputView';


class StoryView extends React.Component {
    constructor(props) {
	super(props);
    }

    render() {
	return (
	    <div className='story'>
	    <div className='scenectl'> {'\u2190'} </div>
	    <div className='scene'>wew</div>
	    <div className='scenectl'> {'\u2192'} </div>
	    </div>
	);
    }
}

export default StoryView;
