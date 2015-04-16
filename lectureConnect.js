$( window ).ready(function() {
    var sideBarWidth = $('#sideBar').width();
    var screenWidth = $(window).width();
    var screenHeight = $(window).height();
    var headerHeight = $('#header').height();
    $('#actionField').css('width', screenWidth-sideBarWidth-100);
    $('#actionField').css('height', screenHeight-headerHeight-100);

    $('#sideBar').resizable();
    $('#popup1').fadeOut(0);
    $('#popup2').fadeOut(0);

    $('#sec1').click(function(){
        $('#popup1').fadeIn();
    })
    $('.xButton').click(function(){
        $('#popup1').fadeOut();
        $('#popup2').fadeOut();
    })

    $('#random').click(function(){
        $('#popup2').fadeIn();
    })
});