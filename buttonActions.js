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


//Doodoo Buttons------------------------------------------------
var queue = new ActionQueue();
queue.updateDoodoo();

$('#undo').click(function(){
    queue.undo()
})
$('#redo').click(function(){
    queue.redo()
})

//Move Buttons------------------------------------------------
var uCount = 2;
var lCount = 0;
var aCount = 0;
$('.hideU').fadeOut(0);

var idMap = {'A': '#answered',
             'U': '#unanswered',
             'L': '#markedForLater'
            }

$('.qButton').click( function(e){
    var id = '#' + $(this).parents().closest('.student').attr('id');
    var from = '#' + $(this).parents().closest('.sectionDrop').attr('id');
    var to = $(this).attr('id');
    console.log(to);
        to = to[to.length-1];
    console.log(to);

    $(id).appendTo(idMap[to]);
    moveStudent(id);
    updateCounts();
    var toBeOut = id + ' .hide' + to,
        toBeIn = id + ' .' + to;

    $(toBeOut).fadeOut(0);
    $(toBeIn).fadeIn(0);    

    var action = new Action(id,from,idMap[to]);
    queue.addAction(action);
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
    $('.green.counter').text(aCount);
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
