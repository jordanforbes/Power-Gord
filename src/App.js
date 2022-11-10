import './App.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Chord, Scale, ChordType, ScaleType } from '@tonaljs/tonal'
import { Button } from 'react-bootstrap';
import { swapGrouping, reset} from './features/groupSelector/groupSelectorSlice';
import { clearNotes } from './features/noteSelector/noteSelectorSlice';

import 'bootstrap/dist/css/bootstrap.min.css';

import FretBoard from './components/FretBoard/FretBoard';
import PowerHeader from './components/PowerHeader';
import DisplayMode from './components/DisplayMode';



const App=()=>{
  const root = useSelector(state => state.groupSelector.root)
  const dispatch = useDispatch();
  var [listSearch, setListSearch] = useState(true)

  //decides which group will be passed to components, swapping modes
  const areScales = useSelector(state => state.groupSelector.areScales)
  const grouping = areScales ? Scale : Chord
  const groupType = areScales ? ScaleType : ChordType

  const selectedGroup =  useSelector(state => state.groupSelector.selectedChord)

  const clearBoard=()=>{
    console.log('testroot '+root)
    dispatch(clearNotes())
    dispatch(reset())
  }

  //switches from chord look up to scale look up
  const swapModes =()=>{
    clearBoard()
    dispatch(swapGrouping());
  }

  const searchMode =()=>{
    setListSearch(!listSearch)
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
            <p><Button onClick={swapModes}>
              CHORDS / SCALES
            </Button></p>

            {/* button that resets board */}
            <p><Button onClick={clearBoard}>
              Clear
            </Button></p>

            {/* button that switches search modes */}
            <p><Button onClick={searchMode}>
              {listSearch ? 'Reverse Search':'List Search' }
              </Button></p>
          </div>
          <div className="col-md-5">

            <div className="row">
              <DisplayMode
                selectedGroup = {selectedGroup}
                grouping={grouping}
                groupType = {groupType}
                listSearch = {listSearch}
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
