import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

//components
import NoteButton from './NoteButton';

const NoteBar=()=>{
    const intervals= ['R','m2','M2','m3','M3','P4','A4','P5','m6','M6','m7','M7']

    const fretboardBuilder =()=>{
        for(let i in intervals){
            return <NoteButton pos={intervals[i]} />
        }
    }
    return(
        <div className="note-bar">

            <ButtonGroup vertical>
                {fretboardBuilder()}
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
    )

}

export default NoteBar;
