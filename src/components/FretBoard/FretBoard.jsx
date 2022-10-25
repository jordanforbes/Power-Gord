import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Scale } from '@tonaljs/tonal'


//components
import NoteButton from '../NoteButton';

const FretBoard=(props)=>{
    //sets tuning by creating arrays of scales that represent individual guitar strings
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
                areScales={props.areScales}
                setSelectedRoot={props.setSelectedRoot}
                selectedRoot ={props.selectedRoot}
                setSelectedNotes ={props.setSelectedNotes}
                setNotes={props.setNotes}
                thisNote={n}
                selectedGroup = {props.selectedGroup}
                setSelectedGroup = {props.setSelectedGroup}
                grouping={props.grouping}
            />
        ))
    }

    return(
        <div className="note-bar container d-flex flex-nowrap">
            <div className=" noteBar ">
                <ButtonGroup vertical>
                    {fretboardBuilder(lowEString)}
                </ButtonGroup>
            </div>
            <div className=" noteBar">
                <ButtonGroup className='noteBar' vertical>
                    {fretboardBuilder(aString)}
                </ButtonGroup>
            </div>
            <div className=" noteBar">
                <ButtonGroup className='noteBar' vertical>
                    {fretboardBuilder(dString)}
                </ButtonGroup>
            </div>
            <div className=" noteBar">
                <ButtonGroup className='noteBar' vertical>
                    {fretboardBuilder(gString)}
                </ButtonGroup>
            </div>
            <div className=" noteBar">
                <ButtonGroup className='noteBar' vertical>
                    {fretboardBuilder(bString)}
                </ButtonGroup>
            </div>
            <div className=" noteBar">
                <ButtonGroup className='noteBar' vertical>
                    {fretboardBuilder(highEString)}
                </ButtonGroup>
            </div>
        </div>
    )

  }

export default FretBoard;
