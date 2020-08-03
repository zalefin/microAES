import React from 'react';
import SmoothButton from './SmoothButton';

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

class InputView extends React.Component {
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

export default InputView;
