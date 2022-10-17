import './App.css';
import React, {useState, useEffect} from 'react';
import { Chord, Scale } from '@tonaljs/tonal'
import 'bootstrap/dist/css/bootstrap.min.css';


// import ButtonGroup from 'react-bootstrap/ButtonGroup'


import NoteBar from './components/NoteBar';
import PowerHeader from './components/PowerHeader';
// import NoteDisplay from './components/NoteDisplay';
import GroupList from './components/GroupList';
// import NoteButton from './components/NoteButton';
// const { Chord } = require("@tonaljs/tonal");


const App=()=>{
  const [selectedNotes, setSelectedNotes]= useState([])
  const [notes, setNotes]= useState('')
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

  //right now it takes two clicks to work
  useEffect(()=>{
    setSelectedNotes(prevNote => [...prevNote, notes])
    let thisChord = Chord.detect(selectedNotes)
    console.log(`chordDetect: ${thisChord}`)
    if(thisChord){
      changeDisplay(thisChord)
    }else{
      console.log('no chord yet')
    }
  },[notes])

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <PowerHeader />
        </div>
        <br />
        <div className="row">
          <div className="col-md-3">
          <h2>Scales</h2>

            <GroupList/>
          </div>
          <div className="col-md-8">
          {/* fretboard */}
            <NoteBar
              notes={notes}
              setNotes={setNotes}
              setSelectedNotes={setSelectedNotes}
            />
          </div>
        </div>
      </div>
    </div>
  );
}



export default App;
