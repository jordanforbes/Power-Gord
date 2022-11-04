import NoteDisplay from "./NoteDisplay"
import GroupList from "./GroupList"
import { useSelector } from 'react-redux';


//contains the note list and the group list
const DisplayMode = (props)=>{
  const areScales = useSelector(state => state.groupSelector.areScales)


  const nameType =()=>{
    return areScales ? "Scales" : "Chords"
  }
    return(
      <div className="col-md-10">
        <h2>{nameType()}</h2>
        <div className="row">
            <NoteDisplay
            selectedNotes = {props.selectedNotes}
            // selectedGroup = {props.selectedGroup} //FIXME: SELECTED GROUP
            // setSelectedGroup ={props.setSelectedGroup} //FIXME: SELECTED GROUP
            grouping={props.grouping}
            />
        </div>
            <GroupList
            areScales={props.areScales}
            // selectedGroup = {props.selectedGroup} //FIXME: SELECTED GROUP
            // setSelectedGroup ={props.setSelectedGroup} //FIXME: SELECTED GROUP
            grouping={props.grouping}
            />
        </div>
    )
  }

export default DisplayMode
