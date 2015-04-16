var uOpen = true
// $('#unanswered').fadeOut(0);

$('#sectionU').click( function(){
    if (uOpen){
        $('#unanswered').slideUp();
        $('#triangleU').css({
            '-ms-transform': 'rotate(-90deg)', /* IE 9 */
            '-webkit-transform': 'rotate(-90deg)', /* Chrome, Safari, Opera */
            'transform': 'rotate(-90deg)'
        })
        uOpen = false;
    } else{
        $('#unanswered').slideDown();
        $('#triangleU').css({
            '-ms-transform': 'rotate(0deg)', /* IE 9 */
            '-webkit-transform': 'rotate(0deg)', /* Chrome, Safari, Opera */
            'transform': 'rotate(0deg)'
        })
        uOpen = true;
    }
})

var lOpen = false
$('#markedForLater').fadeOut(0);
$('#triangleL').css({
    '-ms-transform': 'rotate(-90deg)', /* IE 9 */
    '-webkit-transform': 'rotate(-90deg)', /* Chrome, Safari, Opera */
    'transform': 'rotate(-90deg)'
})

$('#sectionL').click( function(){
    if (lOpen){
        $('#markedForLater').slideUp();
        $('#triangleL').css({
            '-ms-transform': 'rotate(-90deg)', /* IE 9 */
            '-webkit-transform': 'rotate(-90deg)', /* Chrome, Safari, Opera */
            'transform': 'rotate(-90deg)'
        })
        lOpen = false;
    } else{
        $('#markedForLater').slideDown();
        $('#triangleL').css({
            '-ms-transform': 'rotate(0deg)', /* IE 9 */
            '-webkit-transform': 'rotate(0deg)', /* Chrome, Safari, Opera */
            'transform': 'rotate(0deg)'
        })
        lOpen = true;
    }
})

var aOpen = false
$('#answered').fadeOut(0);
$('#triangleA').css({
    '-ms-transform': 'rotate(-90deg)', /* IE 9 */
    '-webkit-transform': 'rotate(-90deg)', /* Chrome, Safari, Opera */
    'transform': 'rotate(-90deg)'
})

$('#sectionA').click( function(){
    if (aOpen){
        $('#answered').slideUp();
        $('#triangleA').css({
            '-ms-transform': 'rotate(-90deg)', /* IE 9 */
            '-webkit-transform': 'rotate(-90deg)', /* Chrome, Safari, Opera */
            'transform': 'rotate(-90deg)'
        })
        aOpen = false;
    } else{
        $('#answered').slideDown();
        $('#triangleA').css({
            '-ms-transform': 'rotate(0deg)', /* IE 9 */
            '-webkit-transform': 'rotate(0deg)', /* Chrome, Safari, Opera */
            'transform': 'rotate(0deg)'
        })
        aOpen = true;
    }
})


//Move Buttons
var uCount = 2;
var lCount = 0;
var aCount = 0;
$('#calebU').fadeOut(0);
$('#shidanU').fadeOut(0);

$('#calebA').click( function(){
    $('#calebPower').appendTo('#answered');
    updateCounts();
    $('#calebA').fadeOut(0);
    $('#calebL').fadeOut(0);
    $('#calebU').fadeIn(0);
})

$('#calebL').click( function(){
    $('#calebPower').appendTo('#markedForLater');
    updateCounts();
    $('#calebL').fadeOut(0);
    $('#calebU').fadeOut(0);
})

$('#calebU').click( function(){
    $('#calebPower').appendTo('#unanswered');
    updateCounts();
    $('#calebA').fadeIn(0);
    $('#calebL').fadeIn(0);
    $('#calebU').fadeOut(0);
})

function updateCounts(){
    uCount = $("#unanswered > div").length;
    lCount = $("#markedForLater > div").length;
    aCount = $("#answered > div").length;
    $('#red').text(uCount);
    $('#orange').text(lCount);
    $('#green').text(aCount);
}



