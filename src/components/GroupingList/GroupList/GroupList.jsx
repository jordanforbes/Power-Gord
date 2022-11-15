import React from 'react';
import Table from 'react-bootstrap/Table';
import GroupingBtn from './GroupingBtn';
import { useSelector } from 'react-redux';


import 'bootstrap/dist/css/bootstrap.min.css';


const GroupList =(props)=>{
    const root = useSelector(state => state.groupSelector.root)

    //finds all of the names of scales and chords
    const allGroupings =()=>{
        let groupArr = props.groupType.names()
        if(root){
        return groupArr.map(name =>(
            <>
                <GroupingBtn
                    grouping={props.grouping}
                    name={name}
                />
            </>
            )
        )
        }else{
            return(
                <>
                    <span
                        style={{
                            'font-weight':'bold',
                            'font-size':25
                        }}
                    >
                        select root
                    </span>
                </>
            )
        }
    }

    return(
        <>
            <div className="overflow-auto scaleContainer">
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
