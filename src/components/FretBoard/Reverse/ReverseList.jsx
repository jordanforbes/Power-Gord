import React from 'react';
import Table from 'react-bootstrap/Table';
// import { useSelector } from 'react-redux';

// import GroupingBtn from './GroupingBtn';
import { useSelector } from 'react-redux';
import { Chord } from '@tonaljs/tonal'


import 'bootstrap/dist/css/bootstrap.min.css';


const ReverseList =(props)=>{
    const selectedNotes = useSelector(state => state.noteSelector.selectedNotes)

    //finds all of the names of scales and chords
    console.log(selectedNotes)

    return(
        <>
            <div className="overflow-auto scaleContainer text-left text-justify">

                <Table bordered>
                    <tbody>
                        {Chord.detect(selectedNotes).map(c=><p>{c}</p>)}

                    </tbody>
                </Table>
            </div>
        </>
        )
}

export default ReverseList
