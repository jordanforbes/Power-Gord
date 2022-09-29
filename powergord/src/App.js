import logo from './logo.svg';
import './App.css';
import React from 'react';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function App() {
  const hello =()=>{
    console.log('Hello World');
  }
  return (
    <div className="App">
        <h1 className="App-title">Power Gord</h1>
        <span>Music Theory with a mullet</span>
        <ButtonToolbar>
          <ButtonGroup>
            <Button onClick={hello}>
              A
            </Button>
            <Button>A#</Button>
            <Button>B</Button>
            <Button>C</Button>
            <Button>C#</Button>
            <Button>D</Button>
            <Button>D#</Button>
            <Button>E</Button>
            <Button>F</Button>
            <Button>F#</Button>
            <Button>G</Button>
            <Button>G#</Button>
          </ButtonGroup>
        </ButtonToolbar>
    </div>
  );
}

export default App;
