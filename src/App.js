import './stylesheets/App.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { Chord, Scale, ChordType, ScaleType } from '@tonaljs/tonal'

import 'bootstrap/dist/css/bootstrap.min.css';

import FretBoard from './components/FretBoard/FretBoard';
import PowerHeader from './components/PowerHeader';
import DisplayMode from './components/GroupingList/DisplayMode';



const App=()=>{

  //decides which group will be passed to components, swapping modes
  const areScales = useSelector(state => state.groupSelector.areScales)
  const grouping = areScales ? Scale : Chord
  const groupType = areScales ? ScaleType : ChordType

  const selectedGroup =  useSelector(state => state.groupSelector.selectedChord)


  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <PowerHeader />
        </div>
        <br />
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4"
            // style={{'margin-right':'-40px'}}
          >
            {/* fretboard grid */}
            <FretBoard
              selectedGroup = {selectedGroup}
              grouping={grouping}
            />
          </div>
          <div className="col-md-4">
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
