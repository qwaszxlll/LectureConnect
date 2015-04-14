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

