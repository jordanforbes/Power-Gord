import './App.css';
import React, {useState, useEffect} from 'react';
import { Chord, Scale } from '@tonaljs/tonal'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// import ButtonGroup from 'react-bootstrap/ButtonGroup'


import FretBoard from './components/FretBoard/FretBoard';
import PowerHeader from './components/PowerHeader';
import DisplayMode from './components/DisplayMode';



const App=()=>{
  // const [selectedNotes, setSelectedNotes]= useState([])
  const [notes, setNotes]= useState('')
  const [selectedRoot, setSelectedRoot]= useState('')
  const [selectedScale, setSelectedScale]= useState('')
  const [selectedChord, setSelectedChord]= useState('')
  const [chordsOrScales,setChordsOrScales]= useState(true)

  var grouping;

        //true = scales, false = chords
  // const [currentChords, setCurrentChords] = useState([])

  //resets board to default values
  const clearBoard=()=>{
    setSelectedRoot('')
    setSelectedScale('')
    setSelectedChord('')
  }

  //switches from chord look up to scale look up
  const swapModes =()=>{
    setChordsOrScales(!chordsOrScales)
    clearBoard()
  }


  //swaps the display mode between scales and chords
  const showMode =()=>{
    if(chordsOrScales){
      grouping = Scale
    }

    if(!chordsOrScales){
      grouping = Chord
    }
    return(
      <DisplayMode
        chordsOrScales={chordsOrScales}
        selectedRoot = {selectedRoot}
        selectedGroup = {chordsOrScales? selectedScale : selectedChord}
        setSelectedGroup = {chordsOrScales? setSelectedScale : setSelectedChord}
        grouping={chordsOrScales ? Scale : Chord}
      />
    )}


  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <PowerHeader />
        </div>
        <br />
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-4">

            {/* fretboard grid */}
            <FretBoard
              notes={notes}
              chordsOrScales={chordsOrScales}
              setSelectedRoot={setSelectedRoot}
              selectedRoot = {selectedRoot}
              setNotes={setNotes}
              selectedGroup = {chordsOrScales? selectedScale : selectedChord}
              setSelectedGroup = {chordsOrScales? setSelectedScale : setSelectedChord}
              grouping={chordsOrScales ? Scale : Chord}
            />
          </div>
          <div className="col-md-2">
            <h2>Root: {selectedRoot.slice(0,selectedRoot.length-1)}</h2>
            {/* button that swaps modes */}
            <p><Button onClick={swapModes}>
              CHORDS / SCALES
            </Button></p>
            {/* button that resets board */}
            <p><Button onClick={clearBoard}>
              Clear
            </Button></p>
          </div>
          <div className="col-md-5">

            <div className="row">

              {showMode()}

              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





export default App;
