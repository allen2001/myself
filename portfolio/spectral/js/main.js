/**
 * Created by hxsd on 2017/6/19.
 */
$(function () {
    $("#toOne").delay(3000).slideDown();
    $("#toOne").click(function () {
        $("html,body").animate({scrollTop: $("#one").offset().top}, 1000)
    })
});