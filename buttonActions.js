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
rotateTriangle('#triangleA', false);

$('#sectionA').click( function(){
    if (aOpen){
        $('#answered').slideUp();
        rotateTriangle('#triangleA', false);
        aOpen = false;
    } else{
        $('#answered').slideDown();
        rotateTriangle('#triangleA', true);
        aOpen = true;
    }
})

function rotateTriangle(id, open){
    if (open){
        $(id).css({
            '-ms-transform': 'rotate(0deg)', /* IE 9 */
            '-webkit-transform': 'rotate(0deg)', /* Chrome, Safari, Opera */
            'transform': 'rotate(0deg)'
        })
    } else{
        $(id).css({
            '-ms-transform': 'rotate(-90deg)', /* IE 9 */
            '-webkit-transform': 'rotate(-90deg)', /* Chrome, Safari, Opera */
            'transform': 'rotate(-90deg)'
        })
    }
    
}


//Move Buttons------------------------------------------------
var uCount = 2;
var lCount = 0;
var aCount = 0;
$('#calebU').fadeOut(0);
$('#shidanU').fadeOut(0);

$('#calebA').click( function(){
    $('#calebPower').appendTo('#answered');
    moveStudent('#calebPower');
    updateCounts();
    $('#calebA').fadeOut(0);
    $('#calebL').fadeOut(0);
    $('#calebU').fadeIn(0);
})

$('#calebL').click( function(){
    $('#calebPower').appendTo('#markedForLater');
    moveStudent('#calebPower');
    updateCounts();
    $('#calebL').fadeOut(0);
    $('#calebU').fadeOut(0);
})

$('#calebU').click( function(){
    $('#calebPower').appendTo('#unanswered');
    moveStudent('#calebPower');
    updateCounts();
    $('#calebA').fadeIn(0);
    $('#calebL').fadeIn(0);
    $('#calebU').fadeOut(0);
})

$('#shidanA').click( function(){
    $('#shidanFootball').appendTo('#answered');
    moveStudent('#shidanFootball');
    updateCounts();
    $('#shidanA').fadeOut(0);
    $('#shidanL').fadeOut(0);
    $('#shidanU').fadeIn(0);
})

$('#shidanL').click( function(){
    $('#shidanFootball').appendTo('#markedForLater');
    moveStudent('#shidanFootball');
    updateCounts();
    $('#shidanL').fadeOut(0);
    $('#shidanU').fadeOut(0);
})

$('#shidanU').click( function(){
    $('#shidanFootball').appendTo('#unanswered');
    moveStudent('#shidanFootball');
    updateCounts();
    $('#shidanA').fadeIn(0);
    $('#shidanL').fadeIn(0);
    $('#shidanU').fadeOut(0);
})

function moveStudent(id){
    $(id).slideUp(0);
    $(id).slideDown();
}

function updateCounts(){
    uCount = $("#unanswered > div").length;
    lCount = $("#markedForLater > div").length;
    aCount = $("#answered > div").length;
    $('.yellow.counter').text(uCount);
    $('.lightblue.counter').text(lCount);
    $('.gray.counter').text(aCount);
    if (uCount>0){
        $('#unanswered').slideDown();
        rotateTriangle('#triangleU', true);
    } else{
        rotateTriangle('#triangleU', false);
    }

    if (lCount>0){
        $('#markedForLater').slideDown();
        rotateTriangle('#triangleL', true);
    } else{
        rotateTriangle('#triangleL', false);
    }

    if (aCount>0){
        $('#answered').slideDown();
        rotateTriangle('#triangleA', true);
    } else{
        rotateTriangle('#triangleA', false);
    }
}
