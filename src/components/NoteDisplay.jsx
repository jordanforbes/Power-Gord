// import { useSelector } from 'react-redux';
// import { noteFormatter } from '../utilities/utils';

// const NoteDisplay=(props)=>{
//     const rawRoot = useSelector(state => state.groupSelector.rawRoot)
//     const selectedGroup = useSelector(state => state.groupSelector.selectedGroup)

//     const showNotes =()=>{
//         let groupArr = props.grouping.get(rawRoot+' '+selectedGroup).notes
//         return groupArr.map(n => (
//             <span>{noteFormatter(n)} </span>
//         ))

//     }

//     return (
//         <div className="outline">
//             {showNotes()}
//         </div>
//     )
// }

// export default NoteDisplay;
