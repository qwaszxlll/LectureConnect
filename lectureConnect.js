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

    $('.classSection').click(function(e){
        $('#popup1').fadeIn();
        e.stopPropagation();
    })

    $('.backButton').click(function(){
        $('.section').hide(function(){
            $('.randomPopup').hide();
            $('.classroom').fadeIn();
        });
    })

    $('#random').click(function(e){
        $('.classroom').hide();
        $('.section').hide();
        $('.randomPopup').fadeIn();
        e.stopPropagation();
    })

    /* ------ CLASS MAP ------ */
    var overall = new ClassMap($('.tabContents.table'));
    // set Overall tab as default
    $('.ovTabSelected').addClass('alwaysOn');
    $('.section').hide();
    $('.randomPopup').hide();

    $('.tabContents.table .block').on('click', function(e) {
        // Here we want the separation of two screens to show up

        if($('#nfTab').hasClass('active')){
            $('.nf').show()
            $('.rh').hide()
            $('.classroom').hide();
            $('.section').fadeIn();
        }
        else{
            $('#rhTab').click();
            $('.rh').show()
            $('.nf').hide()
            $('.classroom').hide();
            $('.section').fadeIn();
        }

        // $('#popup1').fadeIn();
        e.stopPropagation();
    });
});