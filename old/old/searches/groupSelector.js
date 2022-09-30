ms = require('./modeSearch')
cs = require('./chordSearch')
sms = require('./superModeSearch')
rs = require('./rootSelect')
nl = require('./noteLists')


//full dictionary
const nd = nl.noteDict

//note names
const notes = nd["notes"]

//groupings
const scales = nd["scales"]
const modes = nd["modes"]
const chords = nd["chords"]

//selection functions
const rootSelect = rs.rootSelect

// console.log(notes,scales,modes,chords)
// console.log(rootSelect("C",notes))
// console.log(rootSelect("D",notes))
// console.log(rootSelect("FG",notes))

const cKey = rootSelect("C",notes)[0]
diatonic = scales["diatonic"]


const noteGrouper =(key,group)=>{
    root = rootSelect(key, nd["notes"])[0]
    scale = []
    for(i in group){
        step = group[i]
        scale.push(key[step])
    }
    return scale
}


cDiatonic = noteGrouper("E",diatonic)
cMinorScale = noteGrouper(cKey, modes["minor"]["aeolian"])
cMajorChord = noteGrouper(cDiatonic,chords["triad"]["majMin"])
console.log(cMinorScale)
