/**
 * Created by hxsd on 2017/6/17.
 */
$(function () {
    //回到顶部
    if ($(window).scrollTop() > 600) {
        $("#toTop").show();
    } else {
        $("#toTop").hide();
    }

    $(document).scroll(function () {
        if ($(window).scrollTop() > 600) {
            $("#toTop").show();
        } else {
            $("#toTop").hide();
        }
    });

    $("#toTop").click(function () {
        $("html,body").animate({scrollTop: 0}, 1000)
    });

    //service slide
    $("#accordion a").click(function () {
        /*console.log($(this).attr("aria-controls"));
        console.log($("#" + $(this).attr("aria-controls")).attr("role"));*/
        if (!$("#" + $(this).attr("aria-controls")).hasClass("in")) {
            $("#accordion .panel-heading").removeClass("ser-ac").find("i").removeClass().addClass("glyphicon glyphicon-minus");
            $(this).parent().parent().addClass("ser-ac");
            $(this).prev().removeClass().addClass("glyphicon glyphicon-plus")
        } else {
            $(this).parent().parent().removeClass("ser-ac");
            $(this).prev().removeClass().addClass("glyphicon glyphicon-minus")
        }
    });

    //NAV
    $("#myNav a").click(function () {
        $(this).parent().addClass("bk").siblings().removeClass("bk");
        $("html,body").animate({scrollTop: ($(this.hash).offset().top - 117)}, 1000)
    });
    /*$(document).scroll(function () {
        console.log($("#products").offset().top);
        $("#myNav .to").each(function () {
            if ($(window).scrollTop() > ($(this.hash).offset().top - 117)) {
                $(this).parent().addClass("bk").siblings().removeClass("bk");
            }
        })
    });*/
});