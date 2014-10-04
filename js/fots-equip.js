fots.equipment = {};

fots.defaultEquipment = function() {
	this.name = "";
	this.tooltip = "";
	this.ui = {};
	this.stacks = {};
};

fots.equipment[201410041610] = new fots.defaultEquipment();
with({e:fots.equipment[201410041610]}) {
	e.name = "Beam Weapon";
	e.tooltip = "Adds a beam volley to the unit.";
	e.ui = {
		{"label":"Rating","input":"beamRating"},
		{"label":"Number","input":"beamNumber"}
	};
	e.stacks.cost = "e.cost = e.rating * e.number * fots.pointCost;";
};