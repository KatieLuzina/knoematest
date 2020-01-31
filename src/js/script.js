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

    
    $('.general_cards_item_wrapper_button').click(function (e) {
        
        let id = (e.target.id).toString().slice(-1);
        for (let i = 1; i < 5; i++) {
            document.getElementById('more_' + i).classList.remove("general_cards_item_more_active");
        }
        document.getElementById('more_' + id).classList.add("general_cards_item_more_active");
        
    })
})