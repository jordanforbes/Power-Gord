import NoteDisplay from "./FretBoard/Reverse/NoteDisplay"
import GroupList from "./GroupingList/GroupList"
import ReverseList from './FretBoard/Reverse/ReverseList'
import { useEffect } from 'react'
import { useSelector } from 'react-redux';


//contains the note list and the group list
const DisplayMode = (props)=>{
  const areScales = useSelector(state => state.statusSelector.areScales)
  const isReverse = useSelector(state => state.statusSelector.isReverse)

  // const areScales = props.areScales

  useEffect(() =>{
  console.log('scalesliceDEBUG')
  console.log(areScales)
  },[areScales])

  const nameType =()=>{
    return areScales ? "Scales" : "Chords"
  }

  const listCheck =()=>{
    return isReverse ? 'Search ' : 'Reverse '
  }
    return(
      <div className="col-md-10">
        <h2>{listCheck()}{nameType()}</h2>
        <div className="row">
          {isReverse ? '':
            <NoteDisplay
              selectedNotes = {props.selectedNotes}
              grouping={props.grouping}
            />}
            {isReverse ?
                <GroupList
                listSearch = {props.listSearch}
                  areScales={props.areScales}
                  grouping={props.grouping}
                  groupType = {props.groupType}
                />
              :
              <ReverseList
                selectedNotes = {props.selectedNotes}
              />

            }


          </div>
      </div>
    )
  }

export default DisplayMode
