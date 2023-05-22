// Test for placeholder support
$.support.placeholder = (function(){
    var i = document.createElement('input');
    return 'placeholder' in i;
})();

// Hide labels by default if placeholders are supported
if($.support.placeholder) {
    $('.form li').each(function() {
        $(this).addClass('js-hide-label');
    });
}

$('.form li').find('input, textarea').on('keyup blur focus', function() {
    // Cache our selectors
    var el = $(this),
        parent = el.parent();
    

    // Add or remove classes
    if (el.val() === '') {
        parent.addClass('js-hide-label');
    } else {
        parent.removeClass('js-hide-label');
    }
})