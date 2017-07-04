/**
 * Created by hxsd on 2017/7/3.
 */
$(function () {
    //页面加载前
    $(".sk-spinner").fadeOut();
    $(".preloader").delay(1000).fadeOut();
});

$(function () {
    //isotope
    if ($(".iso-box-wrapper").length > 0) {
        var $container = $(".iso-box-wrapper");
        var $imgs = $(".iso-box img");

        $container.imagesLoaded(function () {
            $container.isotope({
                layoutMode: "fitRows",
                itemSelector: ".iso-box"
            })
        });

        $(".filter-wrapper li a").click(function () {
            var filterValue = $(this).attr("data-filter");

            $container.isotope({
                filter: filterValue,
                animationOptions: {
                    duration: 1000,
                    easing: "linear"
                }
            });

            if ($(this).hasClass("selected")) {
                return false;
            }

            $(".filter-wrapper").find(".selected").removeClass("selected");
            $(this).addClass("selected");

            //阻止a标签的默认事件
            return false
        })
    }
});

//nav
showNav();
$(window).scroll(function () {
    showNav()
});
$(".myNav").onePageNav({
    currentClass: "ac",
    changeHash: true,

})

function showNav() {
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    //console.info(top)
    if (top > 60) {
        $(".myNav").stop().animate({
            opacity: 1,
            top: 0
        });
    } else {
        $(".myNav").stop().animate({
            opacity: 0,
            top: -68
        });
    }
}