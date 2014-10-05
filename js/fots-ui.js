fots.ui = {};

fots.ui.build = function(defObj,root) {
	var fs = $("<fieldset></fieldset>");
	fs.append("<legend>"+defObj.name+"</legend>");
	var ui = defObj.ui;
	for(key in ui) {
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
		fs.append(div);
	}
	$(root).append(fs);
};