import React from 'react';
import Table from 'react-bootstrap/Table';
import { Scale } from '@tonaljs/tonal'
import 'bootstrap/dist/css/bootstrap.min.css';


const GroupList =()=>{

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
        return fString
    }

    //Loops through all scale lists
    const allScales =()=>{
        let scaleArr = Scale.names()
        return scaleArr.map(s =>(
            <>
                <tr className="scaleRow">
                    {formatter(s)}
                </tr>
            </>
            )
        )
    }
    return(
        <div className="overflow-auto scaleContainer text-left text-justify">

            <Table striped bordered hover

            >
                <tbody>
                    {allScales()}
                </tbody>
            </Table>

        </div>
        )
}

export default GroupList
