const tonal = require('@tonaljs/tonal')
const Note = tonal.Note
const Chord = tonal.Chord

class CustChord{
    constructor(name){
        this.chord = Chord.get(name)
        this.chord.noteChroma = this.chromaFinder()

    }
    chromaFinder(){
        let noteChromaArr = []
        this.chord.notes.map((n,i)=>{
            noteChromaArr.push(Note.chroma(n))
        })
        return noteChromaArr
    }
}

let cMaj = new CustChord('C major')

console.log(cMaj)
