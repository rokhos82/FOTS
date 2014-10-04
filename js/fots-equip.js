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
		1: {"label":"Rating per Beam:","input":"beamRating"},
		2: {"label":"Space per Beam:","input":"beamSpace"},
		3: {"label":"Rate of Fire:","input":"beamROF"},
		4: {"label":"Number of Beams:","input":"beamNumber"}
	};
	e.stacks.costs = {
		"base": "e.cost = e.rating * e.number * fots.pointCost;"
	};
};

fots.equipment[201410041707] = new fots.defaultEquipment();
with({e:fots.equipment[201410041707]}) {
	e.name = "Ablative Armor";
	e.tooltip = "Adds standard armor rating to the unit.";
	e.ui = {
		1: {"label":"Armor per Hull:","input":"armorHull"}
	};
	e.stacks.costs = {
		"base": "e.cost = e.rating * fots.pointCost * 0.5;"
	};
	e.stacks.hull = {
		"final": "e.hull = Math.ceil(design.hull * e.armorHull); e.rating = e.hull;"
	};
};