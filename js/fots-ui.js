fots.ui = {};

fots.ui.build = function(defObj,root) {
	for(key in defObj) {
		var value = defObj[key];
		var div = $("<div></div>");
		for(k in value) {
			var v = value[k];
			if(k == "label") {
				e = $("<label></label>");
				e.text(v);
				div.append(e);
			}
			else if(k == "input") {
				e = $("<input type='text' />");
				e.attr("id",v);
				div.append(e);
			}
		}
		$(root).append(div);
	}
};