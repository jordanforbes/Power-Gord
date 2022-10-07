notes= ["c", "cs", "d", "ds", "e", "f", "fs", "g", "gs", "a","as","b"]

intervals = {
    0:"Root",
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
    rootIn= notes.indexOf(root)
    newKey = []
    for (i = rootIn; i < notes.length; i++) {
        newKey.push(notes[i])
    }
    for (i = 0; i <rootIn; i++) {
        newKey.push(notes[i])
    }
    return newKey
};
console.log(keyChange("c"))


// n = Math.abs(notes.indexOf("c")-notes.indexOf("f"))

// console.log(intervals[n])
