/**
 * Created by Administrator on 2017/5/20.
 */
window.onload = function () {
    var c1 = document.getElementById("circle-1");
    var ctx1 = c1.getContext("2d");
    draw(c1, ctx1, 0.4);

    var c2 = document.getElementById("circle-2");
    var ctx2 = c2.getContext("2d");
    draw(c2, ctx2, 0.5);

    var c3 = document.getElementById("circle-3");
    var ctx3 = c3.getContext("2d");
    draw(c3, ctx3, 0.6);

    var c4 = document.getElementById("circle-4");
    var ctx4 = c4.getContext("2d");
    draw(c4, ctx4, 0.7);

    function draw(canvasObj, ctx, rate) {
        rate = rate || 0.5;
        var x = canvasObj.width / 2;
        var y = canvasObj.height / 2;
        ctx.lineWidth = "16";
        var r = Math.min(x, y) - ctx.lineWidth / 2;

        ctx.beginPath();
        ctx.strokeStyle = "#ced7df";
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.stroke();

        var start = Math.PI * 3 / 2;
        var end = start + Math.PI * 2 * rate;
        ctx.beginPath();
        ctx.lineCap = "round";
        ctx.strokeStyle = "#76b852";
        ctx.arc(x, y, r, start, end);
        ctx.stroke();

        ctx.font = "44px arial";
        ctx.fillStyle = "#fff";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle"
        var text = rate * 10 + "%";
        ctx.fillText(text, x, y)
    }
}