import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

//components
import NoteButton from './NoteButton';

const NoteBar=()=>{
    return(
        <div className="note-bar">
            <div className="row">
            <ButtonGroup>
                <NoteButton pos="Root" />
                <NoteButton pos="min2" />
                <NoteButton pos="Maj2" />
                <NoteButton pos="min3" />
                <NoteButton pos="Maj3" />
                <NoteButton pos="Per4" />
                <NoteButton pos="Aug4" />
                <NoteButton pos="Per5" />
                <NoteButton pos="min6" />
                <NoteButton pos="Maj6" />
                <NoteButton pos="min7" />
                <NoteButton pos="Maj7" />
            </ButtonGroup>
         </div>
    </div>
    )

}

export default NoteBar;
