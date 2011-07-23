/**
	waterflow.js -- model a flow of water through a tank

**/

var sys    = require('sys'),
	model  = require('../lib/model'),
	events = require('events');

var WaterFlow = function() {
	if ( false === (this instanceof WaterFlow) ) {
		return new WaterFlow();
	}

	this.capacity = 50;
	this.level    = 33;
	this.in       = 15;
	this.out      = 7;
	this.waste    = 0;

	//model.Model.call(this);
	events.EventEmitter.call(this);
};

//sys.inherits(WaterFlow, model.Model);
sys.inherits(WaterFlow, model.Model);

WaterFlow.prototype.status = function() {
	var self = this;
	return 'Water level: ' + self.level + '/' + self.capacity + 
		( self.waste?'[>>'+self.waste+']':'' );
};


WaterFlow.prototype.tick = function(obj) {
	var self = this,
		diff = self.in - self.out,
		overflow;

	self.level += diff;

	if (self.level > self.capacity) {
		overflow = self.level - self.capacity;
		self.level = self.capacity;
		self.emit('overflow', overflow);
	}
	else if ( self.level < 0 ) {
		overflow = 0 - self.level;
		self.level = 0;
		self.emit('underflow', overflow);
	}


	console.log(self.status());
};



exports.WaterFlow = WaterFlow;
