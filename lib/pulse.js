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
	this.maxTicks     = 0;
	this.intervalId   = null;

	events.EventEmitter.call(this);
};

sys.inherits(Pulse, events.EventEmitter);


// Handle pulse configuration
Pulse.prototype.config = function(config) {
	var self = this;
	
	if (config.tickInterval) { self.tickInterval = config.tickInterval; }
	if (config.maxTicks)     { self.maxTicks     = config.maxTicks;     }

	return self;	
}


// start the heartbeat of our model
Pulse.prototype.start = function(config) {
	var self = this;

	if (config) {
		self.config(config);
	}

	sys.log('Starting model');
	//console.log('tickInterval: ' + self.tickInterval);
	self.intervalId = setInterval(function() {
		self.tick();
	}, self.tickInterval);

	// Set a timeout value if a maxTicks is specified
	// TODO: figure out why this doesn't stop node from exitting immediately.
	if (self.maxTicks) {
		console.log('Setting a timeout');
		//console.log('Timeout: ' + self.maxTicks * self.tickInterval);
		clearInterval(self.intervalId, self.maxTicks * self.tickInterval);
	}

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

