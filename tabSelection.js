$(document).ready(function() {
    $('.tabOptions .tab').on('click', function(e) {
        var currentAttrValue = $(this).attr('id') + 'Selected';

        $('.active').removeClass('active');
        $('.' + currentAttrValue).addClass('active')
        e.preventDefault();
    });
});