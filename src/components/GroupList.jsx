import React from 'react';
import Table from 'react-bootstrap/Table';
import GroupingBtn from './GroupingBtn';
import { useSelector } from 'react-redux';

import { Scale, ChordType } from '@tonaljs/tonal'

import 'bootstrap/dist/css/bootstrap.min.css';


const GroupList =(props)=>{
    const areScales = useSelector(state => state.groupSelector.areScales)

    const allGroupings =()=>{

        //finds all of the names of scales and chords
        let groupArr = areScales ? Scale.names() : ChordType.names()

        return groupArr.map(name =>(
            <>
                <tr
                    className="scaleRow"
                  >
                    <GroupingBtn
                        areScales={props.areScales}
                        selectedGroup={props.selectedGroup}//FIXME: SELECTED GROUP
                        setSelectedGroup={props.setSelectedGroup} //FIXME: SELECTED GROUP
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
