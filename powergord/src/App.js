import './App.css';
import React from 'react';

import NoteBar from './components/NoteBar'
import PowerHeader from './components/PowerHeader';

const App=()=>{

  return (
    <div className="App">
      <div className="container">
        <div className="row">
            <PowerHeader />
          <div className="col-md-4"></div>
            <div className="col-md-4">
              <NoteBar />
            </div>
          <div className="col-md-4"></div>
          </div>
      </div>
    </div>
  );
}

export default App;
