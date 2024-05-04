$(document).ready(function() {
    
    var $scrollTopBtn = $("#scrollToTop");
    $scrollTopBtn.click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
    });

/*Menu*/
jQuery(document).on('click','.menuOpenerHolder', function(e) {
    e.preventDefault();
    jQuery('.fullMenuWrapper').addClass('openMe');
    jQuery(this).fadeOut();
   
});
jQuery(document).on('click','.closeHolder',function(e) {
    e.preventDefault();
    jQuery('.fullMenuWrapper').removeClass('openMe');
    $('.menuOpenerHolder').fadeIn();
   
 
});
/*firstSection*/
jQuery('.firstSection .bottomSection .container .bottomColumn').on('mouseenter',function() {
    
    $(this).addClass('active');
});
jQuery('.firstSection .bottomSection .container .bottomColumn').on('mouseleave',function() {
  
    $(this).removeClass('active');
});


/*secondSection*/
// Funzione per controllare se un elemento è visibile nella finestra
function isScrolledIntoView(elem) {
    var docViewTop = jQuery(window).scrollTop();
    var docViewBottom = docViewTop + jQuery(window).height();
    var elemTop = jQuery(elem).offset().top;
    var elemBottom = elemTop + jQuery(elem).height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

// Funzione per animare i cerchi quando sono visibili nella finestra
function animateCircles() {
    jQuery('.secondSection .rightSection .innerRightSection .circle').each(function() {
        if (isScrolledIntoView(this)) {
            jQuery(this).addClass('animated');
        }
    });
}

// Attiva l'animazione dei cerchi quando la finestra viene scorrere
jQuery(window).scroll(function() {
    animateCircles();
});
animateCircles();

/*services section*/
$('.eachListWrap').hover(
    function() {
        $(this).toggleClass('active');
    }
)

/*forth section*/
var swiper = new Swiper('.swiper-container.articleSlider', {
   grabCursor: !0,//=true,
    slidesPerView: 4.4,
    navigation: {
        nextEl: '.articlesSliderNav.nextBut',
        prevEl: '.articlesSliderNav.prevBut',
    },
    pagination: {
        el: '.articlesSliderPag',
        type: 'progressbar'
    },
    spaceBetween: 30,
    slidesOffsetAfter: 30,
    
    breakpoints:{
        1500:{
            slidesPerView: 3.5
        },
        1200:{
            slidesPerView: 3.15
        },
        992:{
            slidesPerView: 2.5
        },
        768:{
            slidesPerView: 2.2
        },
        600:{
            slidesPerView: 1.7
        },
        500:{
            slidesPerView: 1.4
        },
      
        320: {
            slidesPerView: 1
        },
        375: {
            slidesPerView: 1
        },
        425:{
            slidesPerView: 1.2
        },

    
    },
});


});
