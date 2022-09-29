const nl = require('./noteLists')

// returns array with the notes in order starting from the key's root note
let keySelect=(root="C")=>{
    let key = nl.notes
    // console.log("initial key array "+key)
    let rootIndex = key.indexOf(root)
    if (key[0] == root){
        return key
    }else{
        for(i = 0; i < rootIndex; i++){
            key.push(key.shift());
        }
    }
    return key
}

module.exports = {keySelect}
