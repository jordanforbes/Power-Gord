import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Scale } from '@tonaljs/tonal'
import { Button } from 'react-bootstrap'


//components
import NoteButton from './NoteButton';

const NoteBar=(props)=>{
    // const intervals= ['R','m2','M2','m3','M3','P4','A4','P5','m6','M6','m7','M7']
    // const noteList = ['E','F','F#','G','G#','A','A#','B','C','C#','D','D#']
    const scaleRange = Scale.rangeOf('E chromatic')
    const chromaNoteList = scaleRange('E2','D#3')


    //dynamically builds fretboard based on inserted notes
    const fretboardBuilder=(scaleArray)=>{
        return scaleArray.map(n =>(
            <NoteButton
                setSelectedNotes ={props.setSelectedNotes}
                notes={props.notes}
                setNotes={props.setNotes}
                thisNote={n} />
        ))
    }

    return(
        <div className="note-bar">

            <ButtonGroup vertical>
               {fretboardBuilder(chromaNoteList)}
            </ButtonGroup>

    </div>
    )

  }

export default NoteBar;
