$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav, .featured_header').addClass('black');
          
    }

    else {
          $('nav, .featured_header').removeClass('black');
    }
})