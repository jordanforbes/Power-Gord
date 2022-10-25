# Power Gord
## Music Theory With a Mullet.

Ultimately this will have a reverse chord/scale search utilizing tonal.js as a library.

TODO:
Currently the reverse search function does not work
But the scale and chord searches do

## How to use

1. select Root note on the fretboard

2. select desired scale in the scroll-box, this should turn all of the notes in that scale Red, as well as print all of the notes in the scale in the display box.

3. select Swap Modes to switch from Scale to Chord mode.

4. use the Chord mode in the same way as scale mode. The difference is that they are highlighted in blue

4. select clear to bring the fretboard back to its default state.


## Current Problems
currently there is an issue with enharmonic notes. Bb and A# are the same note and should be lit up on the fretboard because they're in the same location. I believe there is a way to do this with tonaljs.
