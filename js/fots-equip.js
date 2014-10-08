fots.equipment = {};

fots.defaultEquipment = function() {
	this.name = "";
	this.id = "";
	this.tooltip = "";
	this.ui = {};
	this.stacks = {};
};

fots.equipment["E201410041444"] = new fots.defaultTech();
with({e:fots.equipment["E201410041444"]}) {
	e.name = "Spinal Mount";
	e.id = "E201410041444";
	e.description = "";
	e.stacks = {};
	e.ui = {};
};

fots.equipment["E201410041610"] = new fots.defaultEquipment();
with({e:fots.equipment["E201410041610"]}) {
	e.name = "Beam Weapon";
	e.id = "E201410041444";
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

fots.equipment["E201410041707"] = new fots.defaultEquipment();
with({e:fots.equipment["E201410041707"]}) {
	e.name = "Ablative Armor";
	e.id = "E201410041707";
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

fots.equipment["E201410072112"] = new fots.defaultEquipment();
with({e:fots.equipment["E201410072112"]}) {
	e.name = "Sturctural Reinforcement";
	e.id = "E201410072112";
	e.tooltip = "Adds base hull to the unit.";
	e.ui = {
		1: {"label":"Point per Space:","input":["structuralRating",function() { fots.currentUnit.calculateHull(); },1]},
		2: {"label":"Quantity:","input":["structuralQuantity",function() {fots.currentUnit.calculateHull(); },1]}
	};
	e.stacks.hull = {
		"base": "design.hull += $(\"#structuralRating\").val() * $(\"#structuralQuantity\").val();"
	};
}