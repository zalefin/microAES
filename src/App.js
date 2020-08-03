import React from 'react';
import './App.css';
import TitleView from './TitleView';
import InputView from './InputView';
import StoryView from './StoryView';

class ViewController extends React.Component {
    constructor(props) {
	super(props);
	this.state = {view: 'title'};
    }

    render() {
	let view;
	switch(this.state.view) {
	    case 'title':
		view = <TitleView
		encryptHandler={() => this.setState({view: 'input'})}
		decryptHandler={() => this.setState({view: 'input'})}
		    />;
		break;
	    case 'input':
		view = <InputView beginHandler={() => this.setState({view: 'story'})}/>;
		break;
	    case 'story':
		view = <StoryView finishHandler={() => this.setState({view: 'title'})}/>;
		break;
	}
	return (
	    <div className='view'>
	    {view}
	    </div>
	);
    }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
	<ViewController/>
      </header>
    </div>
  );
}

export default App;
