import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const GroupingBtn=(props)=>{
    const handleClick=()=>{
        console.log('!!!!!clicked!')
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

    return(<span>{formatter(props.name)}</span>)
}

export default GroupingBtn
