import './App.css';
import React, { useState } from 'react';
import { configureStore }  from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux';
import { Chord, Scale } from '@tonaljs/tonal'
import { Button } from 'react-bootstrap';
// import { RootSelector } from './features/rootSelector/RootSelector';
// import { GroupSelector } from './features/groupSelector/GroupSelector'
import { selectRoot, clearRoot, swapGrouping, reset, selectChord, selectScale } from './features/groupSelector/groupSelectorSlice';
import { selectNote, clearNote } from './features/noteSelector/noteSelectorSlice';

import 'bootstrap/dist/css/bootstrap.min.css';


// import ButtonGroup from 'react-bootstrap/ButtonGroup'


import FretBoard from './components/FretBoard/FretBoard';
import PowerHeader from './components/PowerHeader';
import DisplayMode from './components/DisplayMode';



const App=()=>{
  const root = useSelector(state => state.groupSelector.root)
  const thisScale = useSelector(state => state.groupSelector.selectedScale)
  const thisChord = useSelector(state => state.groupSelector.selectedChord)
  const dispatch = useDispatch();

  // const [selectedRoot, setSelectedRoot]= useState('')
  const [selectedScale, setSelectedScale]= useState('')
  const [selectedChord, setSelectedChord]= useState('')

  const areScales = useSelector(state => state.groupSelector.areScales)

  //decides which group will be passed to components, swapping modes
  const grouping = areScales ? Scale : Chord
  const selectedGroup = areScales ? selectedScale : selectedChord
  const setSelectedGroup = areScales? setSelectedScale : setSelectedChord

  //resets board to default values
  const clearBoard=()=>{
    console.log('testroot '+root)
    dispatch(reset())
    //
    setSelectedScale('')
    setSelectedChord('')
  }

  //switches from chord look up to scale look up
  const swapModes =()=>{
    clearBoard()
    dispatch(swapGrouping());
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
              selectedGroup = {selectedGroup}
              setSelectedGroup = {setSelectedGroup}
              grouping={grouping}
            />

          </div>
          <div className="col-md-2">
            <h2>Root: {root}</h2>

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
                selectedGroup = {selectedGroup}
                setSelectedGroup = {setSelectedGroup}
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
