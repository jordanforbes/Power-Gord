// import React, { useState, useEffect } from 'react';
// import {useState} from 'react';
// import {Button} from 'react-bootstrap';
import { Chord, Scale, ChordType, ScaleType } from '@tonaljs/tonal'

const NoteDisplay=(props)=>{

    const showNotes =()=>{
        if(props.groupType === 'scales'){
            let scaleArr = Scale.get(props.selectedRoot+' '+props.selectedScale).notes
            return scaleArr.map(n => (
                <span>{n} </span>
            ))
        }

        if(props.groupType === 'chords'){
            let scaleArr = Chord.get(props.selectedRoot+' '+props.selectedChord).notes
            return scaleArr.map(n => (
                <span>{n} </span>
            ))
        }

    }


    return (
        <div className="outline">
            {showNotes()}
        </div>
    )
}

export default NoteDisplay;
