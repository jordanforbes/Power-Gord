import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Scale } from '@tonaljs/tonal'
// import { Button } from 'react-bootstrap'


//components
import NoteButton from '../NoteButton';

const FretBoard=(props)=>{
    // const intervals= ['R','m2','M2','m3','M3','P4','A4','P5','m6','M6','m7','M7']
    // const noteList = ['E','F','F#','G','G#','A','A#','B','C','C#','D','D#']
    const scaleRange = Scale.rangeOf('E chromatic')
    const lowEString = scaleRange('E2','E3')
    const aString = scaleRange('A2','A3')
    const dString = scaleRange('D2','D3')
    const gString = scaleRange('G3','G4')
    const bString = scaleRange('B4','B5')
    const highEString = scaleRange('E4','E5')


    //dynamically builds fretboard based on inserted notes
    const fretboardBuilder=(scaleArray)=>{
        return scaleArray.map(n =>(
            <NoteButton
                className="noteButton"
                setSelectedRoot={props.setSelectedRoot}
                selectedRoot ={props.selectedRoot}
                setSelectedNotes ={props.setSelectedNotes}
                notes={props.notes}
                setNotes={props.setNotes}
                thisNote={n}
                selectedScale={props.selectedScale}
            />
        ))
    }

    return(
        <div className="note-bar row">
            <div className="col-md-4"></div>
            <div className="col-md-1 noteBar">
                <ButtonGroup vertical>
                    {fretboardBuilder(lowEString)}
                </ButtonGroup>
            </div>
            <div className="col-md-1 noteBar">
                <ButtonGroup className='noteBar' vertical>
                    {fretboardBuilder(aString)}
                </ButtonGroup>
            </div>
            <div className="col-md-1 noteBar">
                <ButtonGroup className='noteBar' vertical>
                    {fretboardBuilder(dString)}
                </ButtonGroup>
            </div>
            <div className="col-md-1 noteBar">
                <ButtonGroup className='noteBar' vertical>
                    {fretboardBuilder(gString)}
                </ButtonGroup>
            </div>
            <div className="col-md-1 noteBar">
                <ButtonGroup className='noteBar' vertical>
                    {fretboardBuilder(bString)}
                </ButtonGroup>
            </div>
            <div className="col-md-1 noteBar">
                <ButtonGroup className='noteBar' vertical>
                    {fretboardBuilder(highEString)}
                </ButtonGroup>
            </div>
        </div>
    )

  }

export default FretBoard;
