import './App.css';
import React, {useState, useEffect} from 'react';
import { Chord } from '@tonaljs/tonal'

import 'bootstrap/dist/css/bootstrap.min.css';

// import ButtonGroup from 'react-bootstrap/ButtonGroup'


import NoteBar from './components/NoteBar';
import PowerHeader from './components/PowerHeader';
import NoteDisplay from './components/NoteDisplay';
import NoteButton from './components/NoteButton';
// const { Chord } = require("@tonaljs/tonal");

// import { Button } from 'reat-bootstrap';

// triad builder


const App=()=>{
  const [selectedNotes, setSelectedNotes]= useState([])
  const [notes, setNotes]= useState('')
  const [currentChords, setCurrentChords] = useState([])

  const changeDisplay=()=>{
    let chordShow = Chord.detect(selectedNotes)
    setCurrentChords(chordShow)
    console.log(currentChords)
      return currentChords.map(c =>(
          <>
            {c}
          </>
        )
      )
  }

  //right now it takes two clicks to work
  useEffect(()=>{
    setSelectedNotes(prevNote => [...prevNote, notes])

    console.log(`App.js chords:${Chord.detect(selectedNotes)} selectedNotes=${selectedNotes}`)
    changeDisplay()
  },[notes])

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

              <NoteBar
                // onClick={changeDisplay}
                notes={notes}
                setNotes={setNotes}
                setSelectedNotes={setSelectedNotes}
              />
            </div>
            <div className="col-md-4">
              <NoteDisplay
                selectedNotes={selectedNotes}
              />
              {/* {changeDisplay()} */}
            </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}



export default App;
