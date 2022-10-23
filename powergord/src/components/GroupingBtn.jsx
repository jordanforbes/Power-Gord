import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const GroupingBtn=(props)=>{
    const [active, setActive] = useState(false)

    const checkActive =()=>{
        if(props.selectedGroup === props.name){
            setActive(true)
        }else{
            setActive(false)
        }
    }

    useEffect(()=>{
        checkActive()
    },[props.selectedGroup])

    const handleClick=()=>{
            props.setSelectedGroup(props.name)
            checkActive()
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
            style={{
                    padding:'1px',
                    backgroundColor: active? 'yellow': 'white'
                }}onClick={handleClick}>
            {formatter(props.name)}
        </span>
    )
}

export default GroupingBtn
