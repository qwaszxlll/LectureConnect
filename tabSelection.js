$(document).ready(function() {
    // Display the relevant elements, when a tab is selected
    $('.tabOptions .tab').on('click', function(e) {
        var currentAttrValue = $(this).attr('id') + 'Selected';

        $('.active').removeClass('active');
        $('.' + currentAttrValue).addClass('active')
        e.preventDefault();
    });
});