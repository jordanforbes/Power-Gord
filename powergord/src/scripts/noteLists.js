// note lists
const intervals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const notes = ["A", "A#", "B", "C","C#", "D","D#", "E", "F","F#", "G", "G#"]

//chord dictionary
const chords={
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

const modes = {
    "aeolian":[0,2,3,5,7,8,10]
}

module.exports ={intervals, notes, modes, chords}
