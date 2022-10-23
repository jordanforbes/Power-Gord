import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chord, Scale, Note } from '@tonaljs/tonal'



const NoteButton=(props)=>{

    //ist there a way to check each note and see if the active prop is on?
    const [isRoot, setIsRoot] = useState(false)
    const [inRange, setInRange] = useState(true)
    var focusNote = props.thisNote
    var groupColor = props.chordsOrScales ? 'red':'blue'


    const formatGroup =(group, selectedGroup)=>{
        let thisGroup = group.get(props.selectedRoot+' '+selectedGroup).notes
        let groupArr = thisGroup
        groupArr = groupArr.map(n =>(
            n.slice(0,n.length-1)
        ))
        return groupArr
    }

    const getEnharmonic=(n)=>{
        return Note.enharmonic(n)
    }

    const checkEnharmonic = (n)=>{
        setInRange(true)
        getEnharmonic(n)
    }

    const checkInRange =()=>{
        let currentGroup = formatGroup(props.grouping,props.selectedGroup)

        let currentNote = props.thisNote.slice(0,props.thisNote.length-1)

        console.log('thisNote', props.thisNote)
        console.log('thisNote', props.thisNote)
        console.log('currentNote', currentNote)

        currentGroup.includes(currentNote) ? setInRange(true) : currentGroup.includes(getEnharmonic(currentNote)) ? checkEnharmonic(currentNote) : setInRange(false)
    }



    const noteString=()=>{
        let note = focusNote.substr(0,focusNote.length-1)

        let octave = focusNote.substr(focusNote.length-1)
        return (
            <>
            <span
                className={`btnNote
                    ${isRoot? 'isRoot':'isNotRoot'}
                `}
            >{note}</span>
            <span className="btnOctave topright">{octave}</span>
            </>)
    }

    //checks if note is in range of group
    useEffect(()=>{
        checkInRange()
    },[props.selectedGroup,props.selectedRoot])

    useEffect(()=>{
        if(props.selectedRoot === props.thisNote){
            setIsRoot(true)
        }else{
            setIsRoot(false)
        }
    },[props.selectedRoot])

    const handleClick=()=>{
        isRoot ? activate(""):
        activate(props.thisNote)

    }

    const activate=(note)=>{
        setIsRoot(current => !current);
        props.setNotes(note)
        props.setSelectedRoot(note)
    }

    var nString = noteString()
    return(
        <Button
            type="button"
            className={`btn btn-outline-light noteButton
                ${inRange? 'isInRange':'isNotInRange'}`}
            onClick={handleClick}
            style={{

                display:'block',
                backgroundColor: isRoot? "#ffff80" : inRange? groupColor: "gray"
            }}
        >
            {nString}
        </Button>
    )
  }

export default NoteButton;
