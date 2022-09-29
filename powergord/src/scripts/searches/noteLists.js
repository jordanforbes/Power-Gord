// note lists
const intervals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const notes = ["A", "AB", "B", "C","CD", "D","DE", "E", "F","FG", "G", "GA"]


//chord dictionary
const chords={
    "diad":{"third":[0,2],"power":[0,4]},
    "triad":{"majMin":[0,2,4],"aug":[0,2,5]},
    "quadrad":{"sev":[0,2,4,6]}
}

const modes = {
    "Ionian":[0,2,4,5,7,9,11],
    "Dorian":[0,2,3,5,7,9,10],
    "Phrygian":[0,1,3,5,7,8,10],
    "Lydian":[0,2,4,6,7,9,11],
    "Mixolydian":[0,2,4,5,7,9,10],
    "Aeolian":[0,2,3,5,7,9,10],
    "Locrian":[0,1,3,5,6,8,10]

}

module.exports ={intervals, notes, modes, chords}


//old
//chord dictionary
// const chords={
//         "diad":{ //power chord
//             "power":[0,7]
//         },
//         "triad":{ //triads
//             "major":[0,4,7],
//             "minor":[0,3,7],
//             "augmented":[0,4,8],
//             "diminished":[0,3,6],
//         },
//         "seventh":{ //7th chords
//             "dominant":[0,4,7,10],
//             "major":[0,4,7,11],
//             "minor":[0,3,7,10],
//             "minorflat5":[0,3,6,10],
//             "diminished":[0,3,6,9]
//         }
//     }
