$(document).ready(function() {
    $('.tabOptions .tab').on('click', function(e) {
        var currentAttrValue = $(this).attr('id');

        $('.active').removeClass('active');
        $('.' + currentAttrValue).addClass('active')
        e.preventDefault();
    });
});