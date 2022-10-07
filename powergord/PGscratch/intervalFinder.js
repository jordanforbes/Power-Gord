notes= ["c", "cs", "d", "ds", "e", "f", "fs", "g", "gs", "a","as","b"]

intervals = {
    0:"P1",
    1:"m2",
    2:"M2",
    3:"m3",
    4:"M3",
    5:"P4",
    6:"A4",
    7:"P5",
    8:"m6",
    9:"M6",
    10:"m7",
    11:"M7",
    12:"P8"
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

const findInterval = (n1,n2)=>{
    key = keyChange(n1)
    distance = Math.abs(key.indexOf(n1)-key.indexOf(n2))
    console.log(intervals[distance])
    return intervals[distance]
}

findInterval("c","e")
findInterval("c","c")
findInterval("e","c")
// n = Math.abs(notes.indexOf("c")-notes.indexOf("f"))

// console.log(intervals[n])
