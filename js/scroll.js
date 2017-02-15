$('.project-nav-item').on('click', function() {

    $(this).addClass('visited');

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('[data-anchor="' + scrollAnchor + '"]').offset().top - 28;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 0);

    return false;

})


$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    var introSection = $(".intro-section").outerHeight();
    var projectNavHeight = $(".project-nav-section").outerHeight();

    if (windscroll >= introSection) {
        $(".project-nav-section-holder").height(projectNavHeight);
        $('body').addClass('scrolled');
        $('.project-title').each(function(i) {
            if ($(this).position().top <= windscroll + 200) {
                $('.project-nav-item.active').removeClass('active');
                $('.project-nav-item').eq(i).addClass('active');
                $('.project-nav-item').eq(i).addClass('visited');
            }
        });

    } else {
        $(".project-nav-section-holder").height(0);
        $('body').removeClass('scrolled');
        $('.project-nav-item.active').removeClass('active');
    }

}).scroll();

// $('.project-nav-section').hover(
//   function() {
//     $( this ).addClass( "hover" );
//   }, function() {
//     $( this ).removeClass( "hover" );
//   }
// );

// $('.project-nav-section').on('click', function(){
//     $(this).addClass('hover');
// });
// $('.project-view-section').on('click', function(){
//     $('.project-nav-section').removeClass('hover');
// });

