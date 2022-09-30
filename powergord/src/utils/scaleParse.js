//converts the number strings to integers
scale = require('./groupList').scale

const scaleParse=(modeName)=>{
    numScale= []
    for (i in scale[modeName]){
        step = parseInt(i)
        numScale.push(step)
    }
    return numScale
}

module.exports ={scaleParse}
