import './App.css';
import React, {useState, useEffect} from 'react';
import { Chord, Scale, ChordType, ScaleType } from '@tonaljs/tonal'
import 'bootstrap/dist/css/bootstrap.min.css';


// import ButtonGroup from 'react-bootstrap/ButtonGroup'


import FretBoard from './components/FretBoard';
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
  const [selectedScale, setSelectedScale]= useState('major')
  const [selectedChord, setSelectedChord]= useState('major')
  // const [currentChords, setCurrentChords] = useState([])

  const changeDisplay=(chordShow)=>{
      console.log(`chordShow: ${chordShow}`)
      return [chordShow].map(c =>(
          <>
            {c}
          </>
        )
      )
  }

  // //right now it takes two clicks to work
  // useEffect(()=>{

  // },[notes])

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
              setNotes={setNotes}
              setSelectedNotes={setSelectedNotes}
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
                  groupType='scales'
                  selectedRoot = {selectedRoot}
                  selectedScale={selectedScale}
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
