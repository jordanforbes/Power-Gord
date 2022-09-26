$(document).ready(()=>{
    noteAssign(0)
})

//note assignment
const noteAssign =(root=0)=>{
    for (let i = 0; i<=11;i++){
        switch(i){
            case 0:
                $("."+root).addClass("rootNote")
                root++;
                break;
            case 1:
            case 2:
                $("."+root).addClass("secondNote")
                root++;
                break;
            case 3:
            case 4:
                $("."+root).addClass("thirdNote")
                root++;
                break;
            case 5:
                $("."+root).addClass("fourthNote")
                root++;
                break;
            case 6:
                $("."+root).addClass("tritoneNote")
                root++;
                break;
            case 7:
                $("."+root).addClass("fifthNote")
                root++;
                break;
            case 8:
            case 9:
                $("."+root).addClass("sixthNote")
                root++;
                break;
            case 10:
            case 11:
                $("."+root).addClass("seventhNote")
                root++;
                break;
        }
    }

}

//keeps the note invervals under 11
//because there are only 11 distinct notes
const noteBounder =(n)=>{
    if (n>11){
        return n-=12
    }else{
        return n
    }

}
