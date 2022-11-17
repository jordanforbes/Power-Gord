import './stylesheets/App.scss';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Chord, Scale, ChordType, ScaleType } from '@tonaljs/tonal'
import { swapGrouping, reset} from './features/groupSelector/groupSelectorSlice';

import 'bootstrap/dist/css/bootstrap.min.css';

import GroupDetails from './components/DetailColumn/GroupDetails'
import FretBoard from './components/FretBoard/FretBoard';
import PowerHeader from './components/PowerHeader';
import DisplayMode from './components/GroupingList/DisplayMode';



const App=()=>{
  const root = useSelector(state => state.groupSelector.root)

  const dispatch = useDispatch();

  //decides which group will be passed to components, swapping modes
  const areScales = useSelector(state => state.groupSelector.areScales)
  const grouping = areScales ? Scale : Chord
  const groupType = areScales ? ScaleType : ChordType

  const selectedGroup =  useSelector(state => state.groupSelector.selectedChord)

  const clearBoard=()=>{
    console.log('testroot '+root)
    dispatch(reset())
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
          <div className="col-md-2"></div>
          <div className="col-md-4">

            {/* fretboard grid */}
            <FretBoard
              selectedGroup = {selectedGroup}
              grouping={grouping}
            />

          </div>

          <div className="col-md-6">

            <div className="row">
              <DisplayMode
                selectedGroup = {selectedGroup}
                grouping={grouping}
                groupType = {groupType}
              />


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





export default App;
