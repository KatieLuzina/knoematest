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
        let activated = document.getElementById('more_' + id).classList.contains("general_cards_item_more_active");
        if (activated) {
            for (let i = 1; i < 5; i++) {
                document.getElementById('more_' + i).classList.remove("general_cards_item_more_active");
                document.getElementById('item_' + i).classList.remove("general_cards_item_active");
                document.getElementById('cards').classList.remove("general_cards_active_" + i);
                document.getElementById('item_' + i).classList.remove("general_cards_item_blured");

            }
            
        }
        else {
            for (let i = 1; i < 5; i++) {
                document.getElementById('more_' + i).classList.remove("general_cards_item_more_active");
                document.getElementById('item_' + i).classList.remove("general_cards_item_active");
                document.getElementById('item_' + i).classList.add("general_cards_item_blured");
                document.getElementById('cards').classList.remove("general_cards_active_" + i);
                let zIndex=Math.abs(4-Math.abs(id-i));
                document.getElementById('item_' + i).style.zIndex=zIndex;
            }
            document.getElementById('more_' + id).classList.add("general_cards_item_more_active");
            document.getElementById('item_' + id).classList.add("general_cards_item_active");
            document.getElementById('cards').classList.add("general_cards_active_" + id);
            document.getElementById('item_' + id).classList.remove("general_cards_item_blured");
            
        }        
    })
})