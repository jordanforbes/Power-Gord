import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const GroupingBtn=(props)=>{
    const [active, setActive] = useState(false)


    const checkActive =(grouping)=>{
        if(grouping === props.name){
            setActive(true)
            console.log(`active grouping: ${props.name}`)
        }else{
            setActive(false)
        }
        console.log(`${grouping} ${props.name}`)

    }

    useEffect(()=>{
        if(props.groupType ==='scales'){
            checkActive(props.selectedScale)
        }
        if(props.groupType === 'chords'){
            checkActive(props.selectedChord)
        }
    },[props.selectedScale,props.selectedChord])

    const handleClick=()=>{
        if(props.groupType === 'scales'){
            props.setSelectedScale(props.name)
            checkActive(props.selectedScale)
        }
        if(props.groupType === 'chords'){
            props.setSelectedChord(props.name)
            checkActive(props.selectedChord)
        }
        // props.setSelected(props.name)
    }

    //capitalize first letter in each word
    const capitalizer = (entry)=>{
        return entry.charAt(0).toUpperCase() + entry.slice(1).toLowerCase()
    }
    const formatter = (entry)=>{
        let entryArr = entry.split(" ");
        let fString = ''
        for(let i= 0; i< entryArr.length; i++){
            fString += capitalizer(entryArr[i])+" "
        }
        return(<span>{fString}</span>)
    }

    return(<span
              style={{
                        padding:'1px',
                        backgroundColor: active? 'yellow': 'white'
                    }}onClick={handleClick}>
                {formatter(props.name)}
            </span>)
}

export default GroupingBtn
