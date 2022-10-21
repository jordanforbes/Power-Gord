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
  const [selectedNotes, setSelectedNotes]= useState([])
  const [notes, setNotes]= useState('')
  const [selectedRoot, setSelectedRoot]= useState('')
  const [selectedScale, setSelectedScale]= useState('')
  const [selectedChord, setSelectedChord]= useState('')
  const [chordsOrScales,setChordsOrScales]= useState('scales')
  // const [currentChords, setCurrentChords] = useState([])

  console.log(chordsOrScales)

  const clearBoard=()=>{
    setSelectedRoot('')
    setSelectedScale('')
    setSelectedChord('')
    console.log(Chord.get('c5 major').notes)
  }

  useEffect(()=>{
    clearBoard()
    setChordsOrScales('scales')
  },[])

  const swapModes =()=>{
    if(chordsOrScales === 'scales'){
      setChordsOrScales('chords')
    }
    if(chordsOrScales === 'chords'){
      setChordsOrScales('scales')
    }
    clearBoard()
  }

  useEffect(()=>{
    showMode()
  },[chordsOrScales])

  const showMode =()=>{
    if(chordsOrScales === 'scales'){
      return(
        <DisplayMode
          groupType={chordsOrScales}
          selectedRoot = {selectedRoot}
          selectedScale={selectedScale}
          selectedChord={selectedChord}
          setSelectedScale={setSelectedScale}
          setSelectedChord={setSelectedChord}
          group={Scale}
        />
      )}

      if(chordsOrScales === 'chords'){
        return(
          <DisplayMode
            groupType={chordsOrScales}
            selectedRoot = {selectedRoot}
            selectedScale={selectedScale}
            selectedChord={selectedChord}
            setSelectedScale={setSelectedScale}
            setSelectedChord={setSelectedChord}
            group={Chord}
          />
        )}
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

          {/* fretboard */}
            <FretBoard
              notes={notes}
              chordsOrScales={chordsOrScales}
              setSelectedRoot={setSelectedRoot}
              selectedRoot = {selectedRoot}
              setNotes={setNotes}
              setSelectedNotes={setSelectedNotes}
              selectedChord={selectedChord}
              selectedScale={selectedScale}
            />
          </div>
          <div className="col-md-2">
            <h2>Root: {selectedRoot.slice(0,selectedRoot.length-1)}</h2>
            <p><Button onClick={swapModes}>
              Swap Modes
            </Button></p>
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
