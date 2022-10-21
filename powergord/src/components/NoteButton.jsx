import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chord, Scale, ChordType, ScaleType } from '@tonaljs/tonal'



const NoteButton=(props)=>{

    //ist there a way to check each note and see if the active prop is on?
    const [isRoot, setIsRoot] = useState(false)
    const [inRange, setInRange] = useState(true)
    // const [currentGroup, setCurrentGroup]=useState([])

    // console.log('noteButton load')
    const formatGroup =(group, selectedGroup)=>{
        let thisGroup = group.get(props.selectedRoot+' '+selectedGroup).notes
        let groupArr = thisGroup
        groupArr = groupArr.map(n =>(
            n.slice(0,n.length-1)
        ))
        return groupArr
    }

    const chordGroup = formatGroup(Chord, props.selectedChord)
    const scaleGroup = formatGroup(Scale, props.selectedScale)

    const checkInRange =()=>{
        let currentGroup
        if (props.chordsOrScales === 'chords'){
            currentGroup = chordGroup
        }
        if (props.chordsOrScales === 'scales'){
            currentGroup = scaleGroup
        }
        console.log(currentGroup)
        currentGroup.includes(props.thisNote.slice(0,props.thisNote.length-1)) ? setInRange(true) : setInRange(false)
    }

    //checks if note is in range of scale
    useEffect(()=>{
        checkInRange()
    },[props.selectedChord,props.selectedScale,props.selectedRoot])

    useEffect(()=>{
        if(props.selectedRoot === props.thisNote){
            setIsRoot(true)
        }else{
            setIsRoot(false)
        }
    },[props.selectedRoot])

    const handleClick=()=>{
        console.log('handleClick')
        console.log(Chord.get(props.thisNote+" "+props.selectedChord).notes)
        console.log(props.thisNote)
        isRoot ? activate(""):
        activate(props.thisNote)

    }

    const activate=(note)=>{
        setIsRoot(current => !current);
        props.setNotes(note)
        props.setSelectedRoot(note)
        console.log(`activate: ${props.thisNote}`)
    }

    const noteString=()=>{
        let note = props.thisNote.substr(0,props.thisNote.length-1)
        let octave = props.thisNote.substr(props.thisNote.length-1)
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
    const colorSelection = ()=>{
        if (isRoot === true) {
            return ('isRoot')
        }

        if (isRoot === false && inRange === true) {
            return ('isNotRoot notInRange')
        }

        if (isRoot === false && inRange === false) {
            return ('isNotRoot')
        }

    }

    var groupColor = props.chordsOrScales === 'scales' ? 'red':'blue'

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
            {noteString()}
        </Button>
    )
  }

export default NoteButton;
