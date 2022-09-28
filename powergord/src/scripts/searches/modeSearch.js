const nl = require('../noteLists')

const modeSearch=(modeInts)=>{
    modeArray=[] //returns array of modes
    for (const i in modeInts){
        let aNote= nl.notes[modeInts[i]]
        modeArray.push(aNote)
    }
    return modeArray
}

const reverseModeSearch=(modeNotes)=>{
    console.log("rsms " + modeNotes)
    modeArray=[] //returns array of intervals
    for (const n in modeNotes){
        // console.log(n)
        modeArray.push(nl.notes.indexOf(modeNotes[n]))

        }
        // console.log("rsms "+modeArray)
        return modeArray
    }


module.exports = {modeSearch, reverseModeSearch}


// console.log(reverseChordSearch(['A', 'E']))
// console.log(chordSearch(chords["diad"]["power"])) //["A","E"]
// chordSearch(chords["triad"]["major"])
// chordSearch(chords["triad"]["minor"])
// chordSearch(chords["triad"]["diminished"])
// chordSearch(chords["seventh"]["diminished"])
