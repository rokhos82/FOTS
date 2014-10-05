var fots = {};

fots.pointCost = 10/3;

fots.core = {};

fots.core.pst = {};
fots.core.pst["0"] = {};
with({pst:fots.core.pst["0"]}) {
	pst.name = "0 Gen";
	pst.ep = {};
	pst.ep["starship"] = 1.25;
	pst.ep["gunboat"] = pst.ep["starship"]*0.75;
	pst.ep["fighter"] = pst.ep["starship"]*0.5;
}

fots.core.pst["1"] = {};
with({pst:fots.core.pst["1"]}) {
	pst.name = "1st Gen";
	pst.ep = {};
	pst.ep["starship"] = 1.50;
	pst.ep["gunboat"] = pst.ep["starship"]*0.75;
	pst.ep["fighter"] = pst.ep["starship"]*0.5;
};

fots.core.pst["2"] = {};
with({pst:fots.core.pst["2"]}) {
	pst.name = "1st Gen, Late";
	pst.ep = {};
	pst.ep["starship"] = 1.75;
	pst.ep["gunboat"] = pst.ep["starship"]*0.75;
	pst.ep["fighter"] = pst.ep["starship"]*0.5;
};

fots.core.pst["3"] = {};
with({pst:fots.core.pst["3"]}) {
	pst.name = "2nd Gen";
	pst.ep = {};
	pst.ep["starship"] = 2.0;
	pst.ep["gunboat"] = pst.ep["starship"]*0.75;
	pst.ep["fighter"] = pst.ep["starship"]*0.5;
};

fots.core.pst["4"] = {};
with({pst:fots.core.pst["4"]}) {
	pst.name = "2nd Gen, Late";
	pst.ep = {};
	pst.ep["starship"] = 2.25;
	pst.ep["gunboat"] = pst.ep["starship"]*0.75;
	pst.ep["fighter"] = pst.ep["starship"]*0.5;
};

fots.core.pst["5"] = {};
with({pst:fots.core.pst["5"]}) {
	pst.name = "3rd Gen";
	pst.ep = {};
	pst.ep["starship"] = 2.5;
	pst.ep["gunboat"] = pst.ep["starship"]*0.75;
	pst.ep["fighter"] = pst.ep["starship"]*0.5;
};

fots.core.pst["6"] = {};
with({pst:fots.core.pst["6"]}) {
	pst.name = "3rd Gen, Late";
	pst.ep = {};
	pst.ep["starship"] = 2.75;
	pst.ep["gunboat"] = pst.ep["starship"]*0.75;
	pst.ep["fighter"] = pst.ep["starship"]*0.5;
};

fots.core.pst["7"] = {};
with({pst:fots.core.pst["7"]}) {
	pst.name = "4th Gen";
	pst.ep = {};
	pst.ep["starship"] = 3;
	pst.ep["gunboat"] = pst.ep["starship"]*0.75;
	pst.ep["fighter"] = pst.ep["starship"]*0.5;
};

fots.core.pst["8"] = {};
with({pst:fots.core.pst["8"]}) {
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
fots.stacks.costs = {}; // base, sub, surcharge, final

fots.funcs = {};
fots.funcs.baseHullChange = function() {
	var hull = $("#hull").val();
	var pst = $("#pst").val();
	var equipment = Math.ceil(fots.core.pst[pst].ep["starship"] * hull);
	$("#EP").val(equipment);
	$("#hullStat").change();
};

fots.funcs.finalHullChange = function() {
	var base = $("#hull").val();
	$("#hullStat").val(base);
};

fots.initialize = function() {
	// Setup event handlers
	$("#hull").change(fots.funcs.baseHullChange);
	$("#pst").change(fots.funcs.baseHullChange);
	$("#hullStat").change(fots.funcs.finalHullChange);

	// Initialize values and other inputs
	$.each(fots.core.pst,function(key,value) {
		$("#pst")
			.append($("<option></option>").attr("value",key).text(value.name));
	});

	$.each(fots.technology,function(key,value) {
		$("#availableTech")
			.append($("<option></option>").attr("value",key).text(value.name));
	});

	$.each(fots.equipment,function(key,value) {
		$("#available")
			.append($("<option></option>").attr("value",key).text(value.name));
	});
	
	$("#pst").val("3");
	$("#hull").change();

	fots.ui.build(fots.equipment[201410041610],"#equipment");
};

// robocopy . c:\xampp\htdocs\fots /E /XF .git* /XD .git