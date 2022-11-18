import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Scale } from '@tonaljs/tonal'


//components
import NoteButton from './NoteButton';

const FretBoard=(props)=>{
    //sets tuning by creating arrays of scales that represent individual guitar strings
    const scaleRange = Scale.rangeOf('E chromatic')


    const standardTuning = [
        scaleRange('E2','E3'),
        scaleRange('A2','A3'),
        scaleRange('D2','D3'),
        scaleRange('G3','G4'),
        scaleRange('B4','B5'),
        scaleRange('E4','E5')
    ]

    //dynamically builds fretboard based on inserted notes
    const stringTuner=(scaleArray)=>{
        return scaleArray.map((n) =>(
            <NoteButton
                setSelectedNotes ={props.setSelectedNotes}
                setNotes={props.setNotes}
                thisNote={n}
                grouping = {props.grouping}
            />
        ))
    }

    const fretboardBuilder=()=>{
        return standardTuning.map(s=>(
            <div className=" noteBar ">
                <ButtonGroup vertical>
                    {stringTuner(s)}
                </ButtonGroup>
            </div>
        ))
    }

    return(
        <div className="fBoardContainer note-bar container d-flex flex-nowrap">
            {fretboardBuilder()}
        </div>
    )

  }

export default FretBoard;
