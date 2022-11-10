import NoteDisplay from "./NoteDisplay"
import GroupList from "./GroupingList/GroupList"
import ReverseList from './GroupingList/ReverseList'
import { useSelector } from 'react-redux';


//contains the note list and the group list
const DisplayMode = (props)=>{
  const areScales = useSelector(state => state.groupSelector.areScales)


  const nameType =()=>{
    return areScales ? "Scales" : "Chords"
  }

  const listCheck =()=>{
    return props.listSearch ? 'Search ' : 'Reverse '
  }
    return(
      <div className="col-md-10">
        <h2>{listCheck()}{nameType()}</h2>
        <div className="row">
          {props.listSearch ? '':
            <NoteDisplay
              selectedNotes = {props.selectedNotes}
              grouping={props.grouping}
            />}
            {props.listSearch ?
                <GroupList
                listSearch = {props.listSearch}
                  areScales={props.areScales}
                  grouping={props.grouping}
                  groupType = {props.groupType}
                />
              :
              <ReverseList
              />

            }


          </div>
      </div>
    )
  }

export default DisplayMode
