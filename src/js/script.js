// ----------------- кнопка вверх ---------
$(document).ready(function () {

    $(function () {
        $("#myBtn").hide();

        $(window).scroll(function () {
            if ($(this).scrollTop() > 700) {
                $("#myBtn").fadeIn();
            } else {
                $("#myBtn").fadeOut();
            }
        });

        $("#myBtn").click(function () {
            $("body,html").animate({
                scrollTop: 0
            }, 700);
            return false;
        });
    });
});

// ------------------ tabs -----------
$(".title-menu").not(":first").hide();
$(".navbar-items .navbar-items__item").click(function () {
    $(".navbar-items .navbar-items__item").removeClass("active").eq($(this).index()).addClass("active");
    $(".title-menu").hide().eq($(this).index()).fadeIn();
}).eq(0).addClass("active");