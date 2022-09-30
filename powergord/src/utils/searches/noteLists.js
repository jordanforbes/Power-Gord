////////////////////////////////////////////////////////////////
//1. assign notes to modes
//2. the chords and scales will change the kind they are based on their modes
////////////////////////////////////////////////////////////////

// note lists
const intervals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const notes = ["A", "AB", "B", "C","CD", "D","DE", "E", "F","FG", "G", "GA"]



//full dictionary
const noteDict={
    "notes":["A", "AB", "B", "C","CD", "D","DE", "E", "F","FG", "G", "GA"],
    "scales":{
        "chromatic":[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        "diatonic":[0,2,4,5,7,9,11]
    },

    // mode dictionary
    "modes":{
        "major":{//modes                 //scale degrees
            "ionian":[0,2,4,5,7,9,11],      //1
            "lydian":[0,2,4,6,7,9,11],      //4
            "mixolydian":[0,2,4,5,7,9,10]   //5
            },
        "minor":{//modes
            "dorian":[0,2,3,5,7,9,10],      //2
            "phrygian":[0,1,3,5,7,8,10],    //3
            "aeolian":[0,2,3,5,7,9,10],     //6
            "locrian":[0,1,3,5,6,8,10]      //7
        }
    },

    //chord dictionary
    "chords":{
        "diad":{
            "third":[0,2],
            "power":[0,4]
        },
        "triad":{
            "majMin":[0,2,4],
            "aug":[0,2,5]
        },
        "quadrad":{
            "sev":[0,2,4,6]
        },
        "pentatonic":{"minor":[0,2,3,5,6]}
    }
}
module.exports ={noteDict}


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

//mode dictionary
// const scales = {
    // "major":{//modes                 //scale degrees
    //     "ionian":[0,2,4,5,7,9,11],      //1
    //     "lydian":[0,2,4,6,7,9,11],      //4
    //     "mixolydian":[0,2,4,5,7,9,10]   //5
    // },
    // "minor":{//modes
    //     "dorian":[0,2,3,5,7,9,10],      //2
    //     "phrygian":[0,1,3,5,7,8,10],    //3
    //     "aeolian":[0,2,3,5,7,9,10],     //6
    //     "locrian":[0,1,3,5,6,8,10]      //7
    // }
// }
