$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        if($(this).scrollTop() > $nav.height()) {
           $nav.addClass("scrolled");
           $nav.removeClass("navbar-dark");
           $nav.addClass("navbarlight");
        } else {
           $nav.removeClass("scrolled");
           $nav.addClass("navbar-dark");
           $nav.removeClass("navbar-light");
        }
    })
});