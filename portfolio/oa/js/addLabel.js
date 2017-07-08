/**
 * Created by hxsd on 2017/6/15.
 */
$(function () {
    $("#addLabel").click(function () {
        var oInput = $("#labelText");
        var text = oInput.val();
        if (text == "") {
            return;
        }
        var html = '<div class="col-md-2"><div class="alert alert-warning alert-dismissibl" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>' + text + '</strong></div></div>';

        $("#labelList").append(html);

        oInput.val("");
    });
})