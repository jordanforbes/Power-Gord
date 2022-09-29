const nl = require('./noteLists')


const chordSearch=(chordInts)=>{
chordArray=[] //final array of chord notes
for (const i in chordInts){
    let aNote= nl.notes[chordInts[i]]
    chordArray.push(aNote)
    }
    return chordArray
};

const reverseChordSearch=(chordNotes)=>{
chordArray=[] //returns array of intervals
for (const n in chordNotes){
    chordArray.push(nl.notes.indexOf(chordNotes[n]))
    }
    return chordArray
}

const modeSearch=(modeInts)=>{
    modeArray=[] //returns array of modes
    for (const i in modeInts){
        let aNote= nl.notes[modeInts[i]]
        modeArray.push(aNote)
    }
    return modeArray
}


module.exports = {chordSearch, reverseChordSearch, modeSearch}


// console.log(reverseChordSearch(['A', 'E']))
// console.log(chordSearch(chords["diad"]["power"])) //["A","E"]
// chordSearch(chords["triad"]["major"])
// chordSearch(chords["triad"]["minor"])
// chordSearch(chords["triad"]["diminished"])
// chordSearch(chords["seventh"]["diminished"])
