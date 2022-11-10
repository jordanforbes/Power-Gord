const tonal = require('@tonaljs/tonal')
const Note = tonal.Note
const ChordType = tonal.ChordType
const Chord = tonal.Chord
const ScaleType = tonal.ScaleType

const listOfAllNotes = [
    'Cb', 'C',  'C#', 'Db', 'D',
    'D#', 'Eb', 'E',  'E#', 'Fb',
    'F',  'F#', 'Gb', 'G',  'G#',
    'Ab', 'A',  'A#', 'Bb', 'B',
    'B#'
  ]

  const chordList = ChordType.all()
  const scaleList = ScaleType.all()

console.log(Chord.detect(['C','E','G','F','A']))
