import NoteDisplay from "./NoteDisplay"
import GroupList from "./GroupList"

const DisplayMode = (props)=>{

  const nameType =()=>{
    return props.chordsOrScales ? "Scales" : "Chords"
  }
    return(
      <div className="col-md-10">
        <h2>{nameType()}</h2>
        <div className="row">
            <NoteDisplay
            chordsOrScales={props.chordsOrScales}
            selectedRoot = {props.selectedRoot}
            selectedNotes = {props.selectedNotes}
            selectedGroup = {props.selectedGroup}
            setSelectedGroup ={props.setSelectedGroup}
            grouping={props.grouping}
            />
        </div>
            <GroupList
            chordsOrScales={props.chordsOrScales}
            selectedRoot = {props.selectedRoot}
            selectedGroup = {props.selectedGroup}
            setSelectedGroup ={props.setSelectedGroup}
            grouping={props.grouping}
            />
        </div>
    )
  }

export default DisplayMode
