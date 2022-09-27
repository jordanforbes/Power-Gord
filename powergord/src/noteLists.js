// note lists
intervals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
notes = ["A", "A#", "B", "C","C#", "D","D#", "E", "F","F#", "G", "G#"]

//chord dictionary
chords={
        "diad":{ //power chord
            "power":[0,7]
        },
        "triad":{ //triads
            "major":[0,4,7],
            "minor":[0,3,7],
            "augmented":[0,4,8],
            "diminished":[0,3,6],
        },
        "seventh":{ //7th chords
            "dominant":[0,4,7,10],
            "major":[0,4,7,11],
            "minor":[0,3,7,10],
            "minorflat5":[0,3,6,10],
            "diminished":[0,3,6,9]
        }
    }


const chordSearch=(chordInts)=>{
    // console.log(chordInts)
    chordArray=[] //final array of chord notes
    // console.log("foo "+notes)
    for (const i in chordInts){
        let aNote= notes[chordInts[i]]
        // console.log("a note "+aNote)
        chordArray.push(aNote)
    }
    // console.log("foobar "+chordArray)
    return chordArray
};

const reverseChordSearch=(chordNotes)=>{
    chordArray=[] //returns array of intervals
    for (const n in chordNotes){
        chordArray.push(notes.indexOf(chordNotes[n]))
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

