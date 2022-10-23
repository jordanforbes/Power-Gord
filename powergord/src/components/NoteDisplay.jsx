// import React, { useState, useEffect } from 'react';
// import {useState} from 'react';
// import {Button} from 'react-bootstrap';
import { Chord, Scale, ChordType, ScaleType } from '@tonaljs/tonal'

const NoteDisplay=(props)=>{
    const formatter=(note) =>{
        return note.slice(0,note.length-1)
    }

    const showNotes =()=>{
        var selectedGroup
        var grouping
        let groupArr
        if(props.groupType === 'scales'){
            grouping = Scale
            selectedGroup = props.selectedScale
        }

        if(props.groupType === 'chords'){
            grouping = Chord
            selectedGroup = props.selectedChord
        }
        groupArr = grouping.get(props.selectedRoot+' '+selectedGroup).notes
        return groupArr.map(n => (
            <span>{formatter(n)} </span>
        ))

    }


    return (
        <div className="outline">
            {showNotes()}
        </div>
    )
}

export default NoteDisplay;
