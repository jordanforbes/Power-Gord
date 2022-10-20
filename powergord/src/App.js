import './App.css';
import React, {useState, useEffect} from 'react';
import { Chord, Scale, ChordType, ScaleType } from '@tonaljs/tonal'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// import ButtonGroup from 'react-bootstrap/ButtonGroup'


import FretBoard from './components/FretBoard/FretBoard';
import PowerHeader from './components/PowerHeader';
// import NoteDisplay from './components/NoteDisplay';
import GroupList from './components/GroupList';
import NoteDisplay from './components/NoteDisplay';
// import NoteButton from './components/NoteButton';
// const { Chord } = require("@tonaljs/tonal");


const App=()=>{
  const [selectedNotes, setSelectedNotes]= useState([])
  const [notes, setNotes]= useState('')
  const [selectedRoot, setSelectedRoot]= useState('')
  const [selectedScale, setSelectedScale]= useState('')
  const [selectedChord, setSelectedChord]= useState('')
  const [chordsOrScales,setChordsOrScales]= useState('scales')
  // const [currentChords, setCurrentChords] = useState([])

  const showChords =()=>{
    if(chordsOrScales === 'scales'){
      chordsOrScales('chords')
    }
    if(chordsOrScales === 'chords'){
      chordsOrScales('scales')
    }
  }

  const showScales =()=>{
    if(chordsOrScales === 'chords'){
      chordsOrScales('scales')
    }
  }


  useEffect(()=>{
    setSelectedRoot('E2')
    setSelectedScale('major')
    setSelectedChord('major')
  },[])

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
              setSelectedRoot={setSelectedRoot}
              selectedRoot = {selectedRoot}
              setNotes={setNotes}
              setSelectedNotes={setSelectedNotes}
              selectedChord={selectedChord}
              selectedScale={selectedScale}
            />
          </div>
          <div className="col-md-1">
            <h2>Root: {selectedRoot}</h2>
          </div>
          <div className="col-md-5">

            <div className="row">
              <div className="col-md-6">
              <h2>Scales</h2>
              <div className="row">
                <NoteDisplay
                  groupType='scales'
                  selectedRoot = {selectedRoot}
                  selectedScale={selectedScale}
                  selectedNotes = {selectedNotes}
                />
              </div>
                <GroupList
                  groupType={chordsOrScales}
                  selectedRoot = {selectedRoot}
                  selectedScale={selectedScale}
                  selectedChord={selectedChord}
                  setSelectedScale={setSelectedScale}
                  setSelectedChord={setSelectedChord}
                  group={Scale}
                />
              </div>
              <div className="col-md-6">
              <h2>Chords</h2>
                <div className="row">
                  <NoteDisplay
                    groupType = 'chords'
                    selectedRoot = {selectedRoot}
                    selectedChord={selectedChord}
                    selectedNotes = {selectedNotes}
                  />
                </div>
                <GroupList
                  groupType='chords'
                  selectedRoot = {selectedRoot}
                  selectedScale={selectedScale}
                  selectedChord={selectedChord}
                  setSelectedScale={setSelectedScale}
                  setSelectedChord={setSelectedChord}
                  group={ChordType}
                />
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default App;
