import './App.css';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import NoteBar from './components/NoteBar'
import PowerHeader from './components/PowerHeader';

const App=()=>{

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <PowerHeader />
        </div>
        <br />
        <div className="row">
          <div className="col-md-4"></div>
            <div className="col-md-1">
              <NoteBar />
            </div>
          <div className="col-md-7"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
