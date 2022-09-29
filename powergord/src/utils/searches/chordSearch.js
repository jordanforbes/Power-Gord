const nl = require('./noteLists')


const chordSearch=(chordInts,scale)=>{
    chordArray=[] //final array of chord notes
    for (const i in chordInts){
        let aNote= scale[chordInts[i]]
        chordArray.push(aNote)
        }
        return chordArray
};

const reverseChordSearch=(chordNotes,scale)=>{
    chordArray=[] //returns array of intervals
    for (const n in chordNotes){
        chordArray.push(scale.indexOf(chordNotes[n]))
        }
        return chordArray
}

module.exports = {chordSearch, reverseChordSearch}


// console.log(reverseChordSearch(['A', 'E']))
// console.log(chordSearch(chords["diad"]["power"])) //["A","E"]
// chordSearch(chords["triad"]["major"])
// chordSearch(chords["triad"]["minor"])
// chordSearch(chords["triad"]["diminished"])
// chordSearch(chords["seventh"]["diminished"])
