var fots = {};

fots.pointCost = 10/3;

fots.design = {};

fots.design.pst = {};
fots.design.pst["0"] = {};
with({pst:fots.design.pst["0"]}) {
	pst.name = "0 Gen";
	pst.ep = {};
	pst.ep["starship"] = 1.25;
	pst.ep["gunboat"] = pst.ep["starship"]*0.75;
	pst.ep["fighter"] = pst.ep["starship"]*0.5;
}

fots.design.pst["1"] = {};
with({pst:fots.design.pst["1"]}) {
	pst.name = "1st Gen";
	pst.ep = {};
	pst.ep["starship"] = 1.50;
	pst.ep["gunboat"] = pst.ep["starship"]*0.75;
	pst.ep["fighter"] = pst.ep["starship"]*0.5;
};

fots.design.pst["2"] = {};
with({pst:fots.design.pst["2"]}) {
	pst.name = "1st Gen, Late";
	pst.ep = {};
	pst.ep["starship"] = 1.75;
	pst.ep["gunboat"] = pst.ep["starship"]*0.75;
	pst.ep["fighter"] = pst.ep["starship"]*0.5;
};

fots.design.pst["3"] = {};
with({pst:fots.design.pst["3"]}) {
	pst.name = "2nd Gen";
	pst.ep = {};
	pst.ep["starship"] = 2.0;
	pst.ep["gunboat"] = pst.ep["starship"]*0.75;
	pst.ep["fighter"] = pst.ep["starship"]*0.5;
};

fots.design.pst["4"] = {};
with({pst:fots.design.pst["4"]}) {
	pst.name = "2nd Gen, Late";
	pst.ep = {};
	pst.ep["starship"] = 2.25;
	pst.ep["gunboat"] = pst.ep["starship"]*0.75;
	pst.ep["fighter"] = pst.ep["starship"]*0.5;
};

fots.design.pst["5"] = {};
with({pst:fots.design.pst["5"]}) {
	pst.name = "3rd Gen";
	pst.ep = {};
	pst.ep["starship"] = 2.5;
	pst.ep["gunboat"] = pst.ep["starship"]*0.75;
	pst.ep["fighter"] = pst.ep["starship"]*0.5;
};

fots.design.pst["6"] = {};
with({pst:fots.design.pst["6"]}) {
	pst.name = "3rd Gen, Late";
	pst.ep = {};
	pst.ep["starship"] = 2.75;
	pst.ep["gunboat"] = pst.ep["starship"]*0.75;
	pst.ep["fighter"] = pst.ep["starship"]*0.5;
};

fots.design.pst["7"] = {};
with({pst:fots.design.pst["7"]}) {
	pst.name = "4th Gen";
	pst.ep = {};
	pst.ep["starship"] = 3;
	pst.ep["gunboat"] = pst.ep["starship"]*0.75;
	pst.ep["fighter"] = pst.ep["starship"]*0.5;
};

fots.design.pst["8"] = {};
with({pst:fots.design.pst["8"]}) {
	pst.name = "4th Gen, Late";
	pst.ep = {};
	pst.ep["starship"] = 3.25;
	pst.ep["gunboat"] = pst.ep["starship"]*0.75;
	pst.ep["fighter"] = pst.ep["starship"]*0.5;
};

fots.stacks = {};
fots.stacks.hull = {};
fots.stacks.ep = {};
fots.stacks.beam = {};
fots.stacks.shield = {};
fots.stacks.torpedo = {};
fots.stacks.tags = {};
fots.stacks.costs = {};

fots.funcs = {};
fots.funcs.hullChange = function() {
	var hull = $("#hull").val();
	var pst = $("#pst").val();
	var equipment = Math.ceil(fots.design.pst[pst].ep["starship"] * hull);
	$("#equipment").val(equipment);
};

fots.initialize = function() {
	// Setup event handlers
	$("#hull").change(fots.funcs.hullChange);
	$("#pst").change(fots.funcs.hullChange);

	// Initialize values and other inputs
	var pstLevels = {
		"0":"0 Gen",
		"1":"1st Gen",
		"2":"1st Gen, Late",
		"3":"2nd Gen",
		"4":"2nd Gen, Late",
		"5":"3rd Gen",
		"6":"3rd Gen, Late",
		"7":"4th Gen",
		"8":"4th Gen, Late"
	};
	$.each(pstLevels,function(key,value) {
		$("#pst")
			.append($("<option></option>").attr("value",key).text(value));
	});

	$.each(fots.technology,function(key,value) {
		$("#availableTech")
			.append($("<option></option>").attr("value",key).text(value.name));
	});
	
	$("#pst").val("3");
	$("#hull").change();
};