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

// console.log(notes[0],notes[7])
// console.log(chords["power"])

const chordSearch=(chordInts)=>{
    console.log(chordInts)
    for (const i in chordInts){
        console.log(notes[chordInts[i]])
    }
};

chordSearch(chords["diad"]["power"])
chordSearch(chords["triad"]["major"])
chordSearch(chords["triad"]["minor"])
chordSearch(chords["triad"]["diminished"])
chordSearch(chords["seventh"]["diminished"])
