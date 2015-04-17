$( window ).ready(function() {
    var sideBarWidth = $('#sideBar').width();
    var screenWidth = $(window).width();
    var screenHeight = $(window).height();
    var headerHeight = $('#header').height();

    var actionFieldWidth = screenWidth-sideBarWidth-120;
    var tabWidth = actionFieldWidth/3;
    $('#actionField').css('width', actionFieldWidth);
    $('#actionField').css('height', screenHeight-headerHeight-90);
    $('#rhTab').css('width', tabWidth);
    $('#nfTab').css('width', tabWidth);
    $('#ovTab').css('width', tabWidth);
    $('#actionField').resizable();

    $('#sideBar').resizable();
    $('#popup1').fadeOut(0);
    $('#popup2').fadeOut(0);

    $('.classSection').click(function(){
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