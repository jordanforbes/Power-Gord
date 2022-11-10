import React from 'react';
import Table from 'react-bootstrap/Table';
import GroupingBtn from './GroupingBtn';
import { useSelector } from 'react-redux';


import 'bootstrap/dist/css/bootstrap.min.css';


const GroupList =(props)=>{

    //finds all of the names of scales and chords
    const allGroupings =()=>{

        let groupArr = props.groupType.names()
        return groupArr.map(name =>(
            <>
                <tr
                    className="scaleRow"
                  >
                    <GroupingBtn
                        grouping={props.grouping}
                        name={name}
                    />
                </tr>
            </>
            )
        )
    }
    return(
        <>
            <div className="overflow-auto scaleContainer text-left text-justify">

                <Table bordered>
                    <tbody>
                        {allGroupings()}
                    </tbody>
                </Table>
            </div>
        </>
        )
}

export default GroupList
