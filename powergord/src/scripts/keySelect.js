const nl = require('./noteLists')

// returns array with the notes in order starting from the key's root note
let keySelect=(root="C")=>{
    let key = nl.notes //secondary initial array
    let rootIndex = key.indexOf(root) //find root
    if (key[0] == root){ //if key is A, nothing has to be done
        return key
    }else{
        for(i = 0; i < rootIndex; i++){
            key.push(key.shift());
        }
    }
    return key
}

module.exports = {keySelect}
