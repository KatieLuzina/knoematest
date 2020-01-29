$(document).ready(function(){

    $('#nav_menu > div').click(function () {
       $('#nav_menu > div').each (function() {
           $(this).removeClass('nav_menu_item_active')
       });
        $(this).addClass('nav_menu_item_active');

    });
})