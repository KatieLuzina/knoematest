$(document).ready(function(){

    $('#nav_menu > div').click(function () {
       $('#nav_menu > div').each (function() {
           $(this).removeClass('nav_menu_item_active')
       });
        $(this).addClass('nav_menu_item_active');

    });

    $('#search').keydown(function(e) {
        if (e.keyCode === 13) {
            let url="https://google.com?query="+ $('#search').val();
            $(location).attr('href',url);
        }
    })
})