import './App.css';
import React, {useState, useEffect} from 'react';
import { Chord, Scale, ChordType, ScaleType } from '@tonaljs/tonal'
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
  const [chordsOrScales,setChordsOrScales]= useState('scales')
  // const [currentChords, setCurrentChords] = useState([])

  console.log(chordsOrScales)

  //resets board to default values
  const clearBoard=()=>{
    setSelectedRoot('')
    setSelectedScale('')
    setSelectedChord('')
  }

  //cleans board and sets initial state to scales
  useEffect(()=>{
    clearBoard()
    setChordsOrScales('scales')
  },[])

  //switches from chord look up to scale look up
  const swapModes =()=>{
    if(chordsOrScales === 'scales'){
      setChordsOrScales('chords')
    }
    if(chordsOrScales === 'chords'){
      setChordsOrScales('scales')
    }
    clearBoard()
  }


  //swaps the display mode between scales and chords
  const showMode =()=>{
    var grouping;
    if(chordsOrScales === 'scales'){
      grouping = Scale
    }

    if(chordsOrScales === 'chords'){
      grouping = Chord
    }
    return(
      <DisplayMode
        groupType={chordsOrScales}
        selectedRoot = {selectedRoot}
        selectedScale={selectedScale}
        selectedChord={selectedChord}
        setSelectedScale={setSelectedScale}
        setSelectedChord={setSelectedChord}
        group={grouping}
      />
    )}

  //sets initial mode to scales
  useEffect(()=>{
    showMode()
  },[chordsOrScales])

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
              selectedChord={selectedChord}
              selectedScale={selectedScale}
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
