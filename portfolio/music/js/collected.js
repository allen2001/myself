//console.info(localStorage.collection)

function isCollection() {
	if (localStorage.collection == undefined) {
		return false;
	}
	var list = JSON.parse(localStorage.collection);
	for (key in list) {
		if (list[key].isCollected) {
			return true;
		}
	} 
	return false;
}

if (isCollection()) {
	var list = JSON.parse(localStorage.collection);
	console.info(list);
	var $template4 = $("#templateItem4").html();

	var count = 0;
	for (key in list) {
		if (list[key].isCollected) {
			count++;

			var $item4 = $($template4);
			$item4.find(".music").html(list[key].name);
			$item4.find(".author").html(list[key].author);
			$item4.find("span").html(count);
			//取消收藏
			$item4.find("button").click(function (ev) {
				ev.stopPropagation();
				//console.log(list)
				list[$(this).parent().data("data-id")].isCollected = false;
				localStorage.collection = JSON.stringify(list);
				$(this).parent().remove();
				load("collected");
			});
			$item4.appendTo($("#collectedList"));
			//console.log(key)
			$item4.data("data-id", key).click(function () {
				musicControler.playCollected($(this).data("data-id"));
			})
		}	
	}
} else {
	$("#collectedList").html("暂无收藏歌曲")
}

