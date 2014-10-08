fots.ui = {};

fots.ui.build = function(defObj,root) {
	var fs = $("<fieldset></fieldset>");
	fs.attr("id",defObj.id)
	fs.append("<legend>"+defObj.name+"</legend>");
	var ui = defObj.ui;
	for(key in ui) {
		var value = ui[key];
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
				if(v instanceof Array) {
					e.attr("id",v[0]);
					e.blur(v[1]);
					e.val(v[2]);
				}
				else {
					e.attr("id",v);
				}
				div.append(e);
			}
		}
		fs.append(div);
	}
	$(root).append(fs);
};