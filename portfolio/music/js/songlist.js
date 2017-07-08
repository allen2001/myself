
(function () {
	function getPlayList(limit, url, callback) {

		//如果有对应缓存数据则直接使用
		if (isCheck()) {
			console.log("请求的是缓存")
			var cacheData = JSON.parse(localStorage.list);
			callback(cacheData);
			return;
		}

		$.ajax({
			// url: url + "?type=topPlayList&cat=%E5%85%A8%E9%83%A8&offset=0&limit=" + limit,
			url: url,
			type: "GET",
			success: function (data) {
				console.log("请求的是服务器");
				//console.log(data);
				//console.log(JSON.stringify(data.playlists))
				localStorage.cacheTime = new Date().getTime();
				var list = JSON.stringify(data.playlists);
				localStorage.list = list;
				callback(data.playlists);
			}
		});

		//检查是否有缓存数据
		function isCheck() {
			if (!localStorage.list) {
				return false;
			}

			//
			if (new Date().getTime() - localStorage.cacheTime >= 10 * 60 * 1000) {
				return false;
			}

			return true;
		}
	}

	//
	var songListUrl = "data/data.json";
	
	getPlayList(8, songListUrl, function (data) {
		console.log("歌单页面");
		console.info(data);
		//console.log(data);
		var $template = $("#templateItem3").html();
		//console.log($template);
		for (var i = 0; i < data.length; i++) {
			var $item = $($template);
			$item.find(".con").attr("href", "#detail?id=" + data[i].id)
			$item.find(".like").html(data[i].playCount);
			$item.find("img").attr("src", data[i].coverImgUrl);
			$item.find(".des").html(data[i].name);
			$item.appendTo($("#songList"));
		}
	});
})()