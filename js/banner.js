/**
 * Created by Administrator on 2017/5/20.
 */
$(function () {
    var slide = $(".slide");
    for (var i = 0; i < 4; i++) {
        var deg = i * 90;
        $("<div class='item'></div>").css({"background-image": "url(images/" + i + ".jpg)", "background-size": "cover", "transform": "rotateX(" + deg +"deg) translateZ(180px)"}).appendTo(slide);
    }

    //0 90 180 270

    var num = 0;
    var timer = null;

    $(document).mouseenter(function () {
        clearInterval(timer);
        timer = setInterval(change, 2000);
    });

    $(document).mouseleave(function () {
        clearInterval(timer);
    });

    function change() {
        num++;
        $(".slide .item").each(function(index, element) {
            var newDeg = index * 90 - num * 90;
            $(this).css({"transform": "rotateX(" + newDeg + "deg) translateZ(180px)"});
        });
    }
});