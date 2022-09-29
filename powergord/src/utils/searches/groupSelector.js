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
console.log(rootSelect("C",notes))
