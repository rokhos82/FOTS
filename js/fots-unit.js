fots.unit = function() {
	this.name = "";
	this.hull = "";
	this.type = "";
	this.equipment = {};
	this.technology = {};
	this.stats = {
		beam: 0,
		shield: 0,
		torpedo: 0,
		hull: 0
	};
	this.cost = 0;
};

fots.unit.prototype.updateName = function(name) {
	this.name = name;
}

fots.unit.prototype.addEquipment = function(eid) {
	if(!this.equipment[eid]) {
		this.equipment[eid] = fots.equipment[eid];
		fots.ui.build(this.equipment[eid],"#equipment");
	}
};

fots.unit.prototype.checkEquipment = function(eid) {
	if(this.equipment[eid])
		return true;
	else
		return false;
};

fots.unit.prototype.calculateHull = function() {
	var design = this;

	design.hull = parseInt($("#hull").val());

	// Calculate base hull
	for(var k in this.equipment) {
		var e = this.equipment[k];
		if(e.stacks.hull["base"]) {
			var code = e.stacks.hull["base"];
			eval(code);
		}
	}

	// Calculate sub hull

	// Calculate surcharge hull

	// Calculate final hull

	$("#hullStat").val(design.hull);
};