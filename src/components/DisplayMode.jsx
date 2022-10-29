import NoteDisplay from "./NoteDisplay"
import GroupList from "./GroupList"
import { useDispatch, useSelector } from 'react-redux';


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
            areScales={props.areScales}
            selectedNotes = {props.selectedNotes}
            selectedGroup = {props.selectedGroup}
            setSelectedGroup ={props.setSelectedGroup}
            grouping={props.grouping}
            />
        </div>
            <GroupList
            areScales={props.areScales}
            selectedGroup = {props.selectedGroup}
            setSelectedGroup ={props.setSelectedGroup}
            grouping={props.grouping}
            />
        </div>
    )
  }

export default DisplayMode
