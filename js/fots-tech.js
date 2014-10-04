fots.technology = {};

fots.defaultTech = function() {
	this.name = "";
	this.description = "";
	this.stacks = {};
	this.ui = {};
};

fots.technology["201410041444"] = new fots.defaultTech();
with({tech:fots.technology["201410041444"]}) {
	tech.name = "Spinal Mount";
	tech.description = "";
	tech.stacks = {};
	tech.ui = {};
};

fots.technology["201410041446"] = new fots.defaultTech();
with({tech:fots.technology["201410041446"]}) {
	tech.name = "High Tech Industrial Hulls";
	tech.description = "";
	tech.stacks = {};
	tech.stacks.hull = "t.hull = design.hull * ui.industryLevel * 0.05;";
	tech.ui = {};
};

fots.technology["201410041529"] = new fots.defaultTech();
with({tech:fots.technology["201410041529"]}) {
	tech.name = "Reactive Shields";
	tech.description = "";
	tech.stacks = {};
	tech.stacks.shield = "t.shield = design.shield * ui.level * 0.33;";
	tech.stacks.cost = "t.cost = design.baseCost * 0.15;";
	tech.ui = {};
};

fots.technology["201410041606"] = new fots.defaultTech();
with({tech:fots.technology["201410041606"]}) {
	tech.name = "Power Conduits";
	tech.description = "";
	tech.stacks = {};
	tech.stacks.cost = "t.cost = design.baseCost * 0.15;";
	tech.ui = {};
};