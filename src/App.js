import React from 'react';
import './App.css';

class TitleScene extends React.Component {

    render() {
	return (
	    <div>
	    <div>microAES</div>
	    <button>encrypt</button>
	    <button>decrypt</button>
	    </div>

	)
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
	if(this.state.scene == "title") {
	    scene = <TitleScene/>;
	}
	return (
	    <div>
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
