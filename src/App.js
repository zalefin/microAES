import React from 'react';
import './App.css';
import TitleView from './TitleView';
import InputView from './InputView';
import StoryView from './StoryView';
import {FibStory, EncryptStory, DecryptStory} from './story';
import {str2bin} from './microaes';

class ViewController extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    view: 'title',
	    data: null,
	    key: null,
	};
    }

    render() {
	let view;
	switch(this.state.view) {
	    case 'title':
		view = <TitleView
		encryptHandler={() => this.setState({view: 'input', encrypt: true})}
		decryptHandler={() => this.setState({view: 'input', encrypt: false})}
		    />;
		break;
	    case 'input':
		view = <InputView onFormSubmit={(data, key) => {
		    this.setState({view: 'story', data: data, key: key})
		}}/>;
		break;
	    case 'story':
		console.log(this.state.data, this.state.key)
		const data = str2bin(this.state.data);
		const key = str2bin(this.state.key);
		view = <StoryView 
		    t_story={this.state.encrypt ? FibStory : DecryptStory} 
		    i_max={10} 
		    state_init={data}/>;
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
