
//notes
const notes= ["c", "cs", "d", "ds", "e", "f", "fs", "g", "gs", "a", "as", "b"]

const scale= {
    "ionian":[0,2,4,5,7,9,11],
    "dorian":[0,2,3,5,7,9,10],
    "phrygian":[0,1,3,5,7,8,10],
    "lydian":[0,2,4,6,7,9,11],
    "mixolydian":[0,2,4,5,7,9,10],
    "aeolian":[0,2,3,5,7,9,10],
    "locrian":[0,1,3,5,6,8,10]
}

const chord= {
    "tri":[0,2,4], //major/minor triad
    "augTri":[0,2,5], //augmented triad
    "sev":[0,2,4,6], //seventh quadrad
    "pow":[0,4]   //power chord (5 chord)
}

module.exports={scale, chord, notes}
