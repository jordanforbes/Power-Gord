const tonal = require('@tonaljs/tonal')
const Note = tonal.Note
const Scale = tonal.Scale
const Chord = tonal.Chord
const Pcset = tonal.Pcset
//there is no scale.detect. the recommended method of doing so is to get the chroma of a group and then use

class NoteClass {
    constructor(note){
        this.note = note
        this.chroma = Note.chroma(note)
    }
}

class NoteGroup {
    constructor(noteArray){
        this.notes = noteArray //make sure this is array
        this.Chords = Chord.detect(this.notes)
        this.Scale = Scale.scaleNotes(this.notes)
    }
    chordFind(){
        this.Chords = Chord.detect(this.notes)
    }
    scaleFind(){
        this.Scale = Scale.scaleNotes(this.notes)
    }
    addNote(note){
        this.notes.push(note)
        this.chordFind()
        this.scaleFind()
    }
}


//gets chroma of each note
const chromaFinder=(group)=>{
    let getName = Scale.get(group).name
    let getNotes = Scale.get(group).notes
    return [getName,getNotes.map(n => Note.chroma(n))]
}

//gets chroma of each note in each scale with given root
const scaleDict =(root)=>{
    let allScales = Scale.names()
    return allScales.map(s => chromaFinder(root+' '+s))
}
// console.log(scaleDict)
const baseNotes = ['C','D','E','F','G','A','B']

const allNotes =[]

const addAllNotes =()=>{
    baseNotes.map(
        n=> allNotes.push(n+'b',n,n+"#")
    )
}

addAllNotes()

//found using addAllNotes
// const listOfAllNotes= [
//     'Cbb', 'Cb', 'C', 'C#', 'C##',
//     'Dbb', 'Db', 'D', 'D#', 'D##',
//     'Ebb', 'Eb', 'E', 'E#', 'E##',
//     'Fbb', 'Fb', 'F', 'F#', 'F##',
//     'Gbb', 'Gb', 'G', 'G#', 'G##',
//     'Abb', 'Ab', 'A', 'A#', 'A##',
//     'Bbb', 'Bb', 'B', 'B#', 'B##'
//   ]

//list of notes without double sharps/flats
const listOfAllNotes = [
    'Cb', 'C',  'C#', 'Db', 'D',
    'D#', 'Eb', 'E',  'E#', 'Fb',
    'F',  'F#', 'Gb', 'G',  'G#',
    'Ab', 'A',  'A#', 'Bb', 'B',
    'B#'
  ]

console.log(allNotes)
// const baseNotes = [
//     'Cbb','Cb','C','C#','C##',
//     'Db','D','D#',
//     'E',
//     'F','F#',
//     'G','G#',
//     'A','A#',
//     'B']

// console.log(mixo)

const chromaDict = listOfAllNotes.map(n=>scaleDict(n))
var chromaList = []

for(let i = 0; i<40; i++){
    for(let j = 0; j<40;j++){

        chromaList = chromaDict.map(a => a[j])
    }
}
for(let i =0; i<chromaList.length; i++){
    for(let j =0; j<chromaList.length; j++){
        console.log(j)
        console.log(chromaDict[i][j])
        console.log(chromaDict[i][j][1])
    }
}
// console.log(chromaDict)
// console.log(chromaFinder(mixo.notes))
