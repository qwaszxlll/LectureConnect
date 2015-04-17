$(document).ready(function() {
    var actionFieldWidth = screenWidth-sideBarWidth-100;
    var tabWidth = actionFieldWidth/3;
    $('#actionField').css('width', actionFieldWidth);
    $('#actionField').css('height', screenHeight-headerHeight-60);
    $('#rhTab').css('width', tabWidth);
    $('#nfTab').css('width', tabWidth);
    $('#ovTab').css('width', tabWidth);
    
    $('.tabOptions .tab').on('click', function(e) {
        var currentAttrValue = $(this).attr('id');

        $('.active').removeClass('active');
        $('.' + currentAttrValue).addClass('active')
        e.preventDefault();
    });
});