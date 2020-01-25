$(document).ready(function(){
    $('header button').on('click', function(){
        $('.menu, header button').toggleClass('active');
    });
    $(function(){
        $("#slides").slidesjs({
            navigation: {
                active: true,
                    // [boolean] Generates next and previous buttons.
                    // You can set to false and use your own buttons.
                    // User defined buttons must have the following:
                    // previous button: class="slidesjs-previous slidesjs-navigation"
                    // next button: class="slidesjs-next slidesjs-navigation"
                effect: "slide"
                    // [string] Can be either "slide" or "fade".
            },
            play: {
                active: true,
                  // [boolean] Generate the play and stop buttons.
                  // You cannot use your own buttons. Sorry.
                effect: "slide",
                  // [string] Can be either "slide" or "fade".
                interval: 5000,
                  // [number] Time spent on each slide in milliseconds.
                auto: false,
                  // [boolean] Start playing the slideshow on load.
                swap: true,
                  // [boolean] show/hide stop and play buttons
                pauseOnHover: false,
                  // [boolean] pause a playing slideshow on hover
                restartDelay: 2500
                  // [number] restart delay on inactive slideshow
            },
            width: 940,
            height: 528
        });
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
});
    