import './App.css';
import React, { useState } from 'react';
import { Chord, Scale } from '@tonaljs/tonal'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// import ButtonGroup from 'react-bootstrap/ButtonGroup'


import FretBoard from './components/FretBoard/FretBoard';
import PowerHeader from './components/PowerHeader';
import DisplayMode from './components/DisplayMode';



const App=()=>{

  const [selectedRoot, setSelectedRoot]= useState('')
  const [selectedScale, setSelectedScale]= useState('')
  const [selectedChord, setSelectedChord]= useState('')
  const [areScales,setAreScales]= useState(true)
  const [notes, setNotes]= useState('')

  //decides which group will be passed to components, swapping modes
  var grouping = areScales ? Scale : Chord

  //resets board to default values
  const clearBoard=()=>{
    setSelectedRoot('')
    setSelectedScale('')
    setSelectedChord('')
  }

  //switches from chord look up to scale look up
  const swapModes =()=>{
    setAreScales(!areScales)
    clearBoard()
  }

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
              areScales={areScales}
              setSelectedRoot={setSelectedRoot}
              selectedRoot = {selectedRoot}
              setNotes={setNotes}
              selectedGroup = {areScales? selectedScale : selectedChord}
              setSelectedGroup = {areScales? setSelectedScale : setSelectedChord}
              grouping={grouping}
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

              <DisplayMode
                areScales={areScales}
                selectedRoot = {selectedRoot}
                selectedGroup = {areScales? selectedScale : selectedChord}
                setSelectedGroup = {areScales? setSelectedScale : setSelectedChord}
                grouping={grouping}
              />

              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





export default App;