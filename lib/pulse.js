/**
	pulse.js -- Handles and fires events, including the periodic tick.

**/
var sys    = require('sys'),
	events = require('events');

var Pulse = function() {
	if ( false === (this instanceof Pulse) ) {
		return new Pulse();
	}

	this.tickInterval = 2000;
	this.intervalId   = null;

	events.EventEmitter.call(this);
};

sys.inherits(Pulse, events.EventEmitter);


// start the heartbeat of our model
Pulse.prototype.start = function() {
	var self = this;
	sys.log('Starting model');
	self.intervalId = setInterval(function() {
		self.tick();
	}, self.tickInterval);
	return self;
};


// stop the model heartbeat
Pulse.prototype.stop = function() {
	var self = this;
	sys.log('Stopping model');
	if (self.intervalId) {
		clearInterval(self.intervalId);
		self.emit('end');
	}
	return self;
};

// main heartbeat callback
Pulse.prototype.tick = function() {
	var self = this;
	self.emit('tick');
};



exports.Pulse = Pulse;

