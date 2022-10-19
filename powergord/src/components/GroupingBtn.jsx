import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const GroupingBtn=(props)=>{
    const handleClick=()=>{
        console.log(props.name)
        if(props.groupType === 'scales'){
            props.setSelectedScale(props.name)
        }
        if(props.groupType === 'chords'){
            props.setSelectedChord(props.name)
        }
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

    return(
        <span
            onClick={handleClick}
            >{formatter(props.name)}</span>)
}

export default GroupingBtn
