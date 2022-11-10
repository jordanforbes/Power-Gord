import React from 'react';
import Table from 'react-bootstrap/Table';

// import GroupingBtn from './GroupingBtn';
// import { useSelector } from 'react-redux';


import 'bootstrap/dist/css/bootstrap.min.css';


const ReverseList =(props)=>{

    //finds all of the names of scales and chords
    console.log(props.selectedNotes)

    return(
        <>
            <div className="overflow-auto scaleContainer text-left text-justify">

                <Table bordered>
                    <tbody>
                        reverse

                    </tbody>
                </Table>
            </div>
        </>
        )
}

export default ReverseList
