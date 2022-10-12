notes= ["c", "cs", "d", "ds", "e", "f", "fs", "g", "gs", "a","as","b"]

intervals = {
    0:"Perfect 1",
    1:"minor 2",
    2:"Major 2",
    3:"minor 3",
    4:"Major 3",
    5:"Perfect 4",
    6:"Augmented 4",
    7:"Perfect 5",
    8:"minor 6",
    9:"Major 6",
    10:"minor 7",
    11:"Major 7",
    12:"Perfect 8"
}

const keyChange = (root)=>{
    rootIndex= notes.indexOf(root)
    newKey = []
    //add notes in key starting from root
    for (i = rootIndex; i < notes.length; i++) {
        newKey.push(notes[i])
    }
    //add the notes before the root to the back of the key
    for (i = 0; i <rootIndex; i++) {
        newKey.push(notes[i])
    }
    return newKey
};
// console.log(keyChange("e"))


//find the distance between two notes
const findInterval = (n1,n2)=>{
    key = keyChange(n1)
    distance = Math.abs(key.indexOf(n1)-key.indexOf(n2))
    console.log(intervals[distance])
    return intervals[distance]
}

// findInterval("c","e")
// findInterval("c","c")
// findInterval("e","c")
// n = Math.abs(notes.indexOf("c")-notes.indexOf("f"))

// console.log(intervals[n])
module.exports = {findInterval};
