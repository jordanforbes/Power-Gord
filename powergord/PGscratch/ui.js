$(document).ready(function () {
    $('.note').click(function () {
        $(this).css({"background-color":"yellow"});
        let thisNote = $(this).html()
        let position = $(this).attr('pos')
        console.log(thisNote);
        $('.groupNotes').append("<p>"+thisNote +"("+position+")</p> ")
});
})
