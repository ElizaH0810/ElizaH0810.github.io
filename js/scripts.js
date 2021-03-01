$(document).ready(function(){
    $('.close_sidebar').click(function(){
        $('.sidebar').toggleClass('fliph');
    });
    $('.toggle_menu').click(function(){
        $('.sidebar_content').slideToggle();
    });
    

    $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        fitRows: {
            gutter: 0
          }
    });

    $('.filters-button-group li').click(function() {
        var filterValue = $( this ).attr('data-filter');
        $('.grid').isotope({ filter: filterValue });
    });

 });