$(document).ready(function(){
    $('header button').on('click', function(){
        $('.menu, header button').toggleClass('active');
    });
});
