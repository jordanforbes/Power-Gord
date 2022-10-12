import './App.css';
import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import NoteBar from './components/NoteBar';
import PowerHeader from './components/PowerHeader';
import NoteDisplay from './components/NoteDisplay';
import { Button } from 'react-bootstrap';

const App=()=>{
  const [selectedNotes, setSelectedNotes]= useState('X')

  const changeDisplay=()=>{
      setSelectedNotes('hit')
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <PowerHeader />
        </div>
        <br />
        <div className="row">
          <div className="col-md-4"></div>
            <div className="col-md-1">
              {/* <Button
                onClick={changeDisplay}
                type="button"
                className="button btn-primary">
                hit
              </Button> */}
              <NoteBar onClick={changeDisplay}/>
            </div>
            <div className="col-md-4">
              <NoteDisplay />
              {selectedNotes}
            </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
