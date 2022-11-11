import './App.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Chord, Scale, ChordType, ScaleType } from '@tonaljs/tonal'
import { Button } from 'react-bootstrap';
import { swapGrouping, reset} from './features/groupSelectorSlice';
import { clearNotes } from './features/noteSelectorSlice';
import { setGrouping,toggleGrouping, toggleReverse, statusReset } from './features/statusSelectorSlice';

import 'bootstrap/dist/css/bootstrap.min.css';

import FretBoard from './components/FretBoard/FretBoard';
import PowerHeader from './components/PowerHeader';
import DisplayMode from './components/DisplayMode';



const App=()=>{
  const dispatch = useDispatch();
  // var [listSearch, setListSearch] = useState(true)

  const root = useSelector(state => state.groupSelector.root)
  //decides which group will be passed to components, swapping modes
  const areScales = useSelector(state => state.statusSelector.areScales)
  const isReverse = useSelector(state => state.statusSelector.isReverse)
  const grouping = areScales ? Scale : Chord
  const groupType = areScales ? ScaleType : ChordType

  const selectedGroup =  useSelector(state => state.groupSelector.selectedChord)

  const clearBoard=()=>{
    console.log('testroot '+root)
    dispatch(clearNotes())
    dispatch(reset())
    // dispatch(statusReset())
  }


  const handleToggle=()=>{
    clearBoard()
    // searchMode()
    dispatch(toggleGrouping())
    console.log('scales DEBUG')
    console.log(areScales)
  }

  const searchMode =()=>{
    // setListSearch(!listSearch)
    dispatch(toggleReverse())
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
              grouping={grouping}
            />

          </div>
          <div className="col-md-2">
            <h2>Root: {root}</h2>

            {/* button that swaps modes */}
            <p><Button onClick={handleToggle}>
              CHORDS / SCALES
            </Button></p>

            {/* button that resets board */}
            <p><Button onClick={clearBoard}>
              Clear
            </Button></p>

            {/* button that switches search modes */}
            <p><Button onClick={searchMode}>
              {isReverse ? 'Reverse Search':'List Search' }
              </Button></p>
          </div>
          <div className="col-md-5">

            <div className="row">
              <DisplayMode
                selectedGroup = {selectedGroup}
                grouping={grouping}
                groupType = {groupType}
                // listSearch = {listSearch}
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
