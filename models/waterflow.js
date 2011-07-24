/**
	waterflow.js -- model a flow of water through a tank

**/

var sys    = require('sys'),
	model  = require('../lib/model');


var WaterFlow = function() {
	if ( false === (this instanceof WaterFlow) ) {
		return new WaterFlow();
	}

	this.capacity = 50;
	this.level    = 17;
	this.in       = 10;
	this.out      = 3;
	this.waste    = 0;

	// Call the superclass constructor
	model.Model.call(this);
};

sys.inherits(WaterFlow, model.Model);


WaterFlow.prototype.status = function() {
	var self = this;
	return 'Water level: ' + self.level + '/' + self.capacity + 
		( self.waste?' [Wasted: '+self.waste+']':'' );
};


WaterFlow.prototype.startHandler = function() {
	var self = this;
	self
		.on('overflow', function(amount) {
			self.waste += amount;
		})
		.on('underflow', function(amount) {
			console.log('Water shortage: ' + amount);
		});
}


WaterFlow.prototype.tickHandler = function(obj) {
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

};


exports.WaterFlow = WaterFlow;
