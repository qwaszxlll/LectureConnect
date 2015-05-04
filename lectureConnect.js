$( window ).ready(function() {
    var sideBarWidth = $('#sideBar').width();
    var screenWidth = $(window).width();
    var screenHeight = $(window).height();
    var headerHeight = $('#header').height();

    var actionFieldWidth = screenWidth-sideBarWidth-120;
    var tabWidth = actionFieldWidth/2;

    // var tabWidth = $('.popup1').width/2;

    $('#actionField').css('width', actionFieldWidth);
    $('#actionField').css('height', screenHeight-headerHeight-100);
    $('#rhTab').css('width', tabWidth);
    $('#nfTab').css('width', tabWidth);
    $('#ovTab').css('width', tabWidth);
    $('#actionField').resizable();

    $('#sideBar').resizable();
    $('#popup1').fadeOut(0);
    $('#popup2').fadeOut(0);

    $('#popup2').click(function(e){
        e.stopPropagation();
    })
    $('#popup1').click(function(e){
        e.stopPropagation();
    })

    $('.classSection').click(function(e){
        $('#popup1').fadeIn();
        e.stopPropagation();
    })

    $('#actionField').click(function(){
        if ($('#popup1').css('display') != 'none'){
            $('#popup1').fadeOut();
        }
        if ($('#popup2').css('display') != 'none'){
            $('#popup2').fadeOut();
        }
    })

    $('.xButton').click(function(){
        $('#popup1').fadeOut();
        $('#popup2').fadeOut();
    })

    $('#random').click(function(e){
        $('#popup2').fadeIn();
        e.stopPropagation();
    })

    /* ------ CLASS MAP ------ */
    var overall = new ClassMap($('.tabContents.table'));
    // set Overall tab as default
    $('.ovTabSelected').addClass('alwaysOn');

    $('.tabContents.table .block').on('click', function(e) {
        // Here we want the separation of two screens to show up

        if($('#nfTab').hasClass('active')){
            $('.nf').show()
            $('.rh').hide()
            $('#popup1').fadeIn();
        }
        else{
            $('#rhTab').click();
            $('.rh').show()
            $('.nf').hide()
            $('#popup1').fadeIn();
        }

        // $('#popup1').fadeIn();
        e.stopPropagation();
    });

});