/**
	pulse.js -- Handles and fires events, including the periodic tick.
	
	@extends EventEmitter
**/
var sys    = require('sys'),
	events = require('events');

var Pulse = function(model) {
	if ( false === (this instanceof Pulse) ) {
		return new Pulse();
	}

	this.tickInterval = 2000;
	this.maxTicks     = 0;
	this.ticks        = 0;
	this.intervalId   = null;
	this.modelRef     = model;

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


// Keep a reference to the model
Pulse.prototype.model = function(model) {
	var self = this;
	self.model = model;
	return self;
}


// start the heartbeat of our model
Pulse.prototype.start = function() {
	var self = this;

	if (arguments.length) {
		// Callback function passed in
		if ( arguments[0] instanceof Function ) {
			self.on('tick', arguments[0]);
		}
		// Configuration object passed in
		else if ( arguments[0] instanceof Object ) {
			self.config(arguments[0]);	
		}
	}

	sys.log('Starting model');
	self.startHandler();
	self.emit('start');
	
	//console.log('tickInterval: ' + self.tickInterval);
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
	self.ticks++;
	self.emit('tick');

	if (self.maxTicks && self.ticks>=self.maxTicks) {
		//console.log('Reached maxTicks. Exiting');
		self.stop();
	}
};

// Default handler for start events.
Pulse.prototype.startHandler = function() {
	var self = this;
	console.log('Pulse startHandler');
}

// Default handler for tick events.
Pulse.prototype.tickHandler = function() {
	var self = this;
	console.log('Pulse tickHandler');
}


exports.Pulse = Pulse;

