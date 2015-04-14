$( window ).ready(function() {
    var sideBarWidth = $('#sideBar').width();
    var screenWidth = $(window).width();
    var screenHeight = $(window).height();
    var headerHeight = $('#header').height();
    $('#actionField').css('width', screenWidth-sideBarWidth-100);
    $('#actionField').css('height', screenHeight-headerHeight-100);
});