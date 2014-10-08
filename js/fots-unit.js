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