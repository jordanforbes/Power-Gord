import NoteDisplay from "./NoteDisplay"
import GroupList from "./GroupList"

//contains the note list and the group list
const DisplayMode = (props)=>{

  const nameType =()=>{
    return props.areScales ? "Scales" : "Chords"
  }
    return(
      <div className="col-md-10">
        <h2>{nameType()}</h2>
        <div className="row">
            <NoteDisplay
            areScales={props.areScales}
            selectedRoot = {props.selectedRoot}
            selectedNotes = {props.selectedNotes}
            selectedGroup = {props.selectedGroup}
            setSelectedGroup ={props.setSelectedGroup}
            grouping={props.grouping}
            />
        </div>
            <GroupList
            areScales={props.areScales}
            selectedRoot = {props.selectedRoot}
            selectedGroup = {props.selectedGroup}
            setSelectedGroup ={props.setSelectedGroup}
            grouping={props.grouping}
            />
        </div>
    )
  }

export default DisplayMode
