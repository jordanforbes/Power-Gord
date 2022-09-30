//chord list


function Maj7(n){
    finArr=[]
    noteFinder(n,majorScales[0],chord[2])
    console.log(finArr)
    return finArr
  }

  function Maj(n){
    finArr=[]
    //return n.toUpperCase() + " Major"
    noteFinder(n,majorScales[0],chord[0])
    console.log(finArr)
    return finArr
  }

  function Min(n){
    finArr=[]
    noteFinder(n,minorScales[2],chord[0])
    console.log(finArr)
    return finArr
  }

  function AugTri(n){
    finArr=[]
    noteFinder(n,majorScales[1],chord[1])
    console.log(finArr)
    return finArr
  }

  function DimTri(n){
    finArr=[]
    noteFinder(n,minorScales[3],chord[0])
    console.log(finArr)
    return finArr
  }

  function fiveDyad(n){
    console.log(n.toUpperCase() + " Power Chord")
    noteFinder(n,majorScales[0],chord[3])
  }
