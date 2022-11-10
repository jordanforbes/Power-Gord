const tonal = require('@tonaljs/tonal')
const Note = tonal.Note
const Scale = tonal.Scale
const Chord = tonal.Chord

class GroupClass {
    constructor(notes){
        this.notes=notes
        this.chroma=[]
        this.chromaFinder()
    }
    showNotes(){
        console.log(this.notes)
        return this.notes
    }
    showChroma(){
        console.log(this.chroma)
        return this.chroma
    }
    chromaFinder(){
        return this.notes.map((n,i)=>{
            this.chroma.push(Note.chroma(n))
        })
    }
    // is this note grouping in the target group
    chromaCompare(target){
        var isWithin = true
        for(let i=0; i<this.chroma.length;i++){
            if(!target.chroma.includes(this.chroma[i])){
                isWithin= false
                break;
            }
        }
        return isWithin
    }
}

// const cMajor = new GroupClass(['C','E','G'])
// const cMScale = new GroupClass(['C','D','E','F','G','A','B'])
// const notcsMajor = new GroupClass(['C#','Eb','G#'])

//Scale SubClass
class ScaleClass extends GroupClass{
    constructor(root='C',scale='ionian'){
        let name = `${root} ${scale}`

        super(Scale.get(name).notes)
        this.name = name
        this.groupType = 'Scale'
        console.log(this.name)
    }
}

//Scale SubClass
class ChordClass extends GroupClass{
    constructor(root='C',chord='major'){
        let name = `${root}${chord}`
        // console.log(Chord.getChord(chord,root))

        super(Chord.get(name).notes)
        this.name = name
        this.groupType = 'Scale'
        console.log(this.name)
    }
}

console.log('debug')
let cIo = new ScaleClass()
let cMaj = new ChordClass()
// console.log(cMScale)
// console.log(notcsMajor)
// console.log(cMajor.chromaCompare(cMScale))
// console.log(notcsMajor.chromaCompare(cMScale))


cMaj.showNotes()
cMaj.showChroma()
cIo.showNotes()
cIo.showChroma()
