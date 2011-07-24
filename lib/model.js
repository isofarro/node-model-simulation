/**
	model.js -- an extendable interface for creating models

**/

var sys    = require('sys'),
	events = require('events'),
	pulse  = require('./pulse');


var Model = function() {
	if ( false === (this instanceof Model) ) {
		return new Model();
	}
	pulse.Pulse.call(this);
};

sys.inherits(Model, pulse.Pulse);

// Store a reference to the pulse start function, so we can wrap it
Model.prototype.pulseStart = Model.prototype.start;


Model.prototype.status = function() {
	return "Model status message.";
};


Model.prototype.start = function() {
	var self = this;
	// Call original Pulse.start, with a default callback function
	self.pulseStart.call(this, self.tickHandler);
}	

// Default handler for start events.
Model.prototype.startHandler = function() {
	var self = this;
	console.log('Model startHandler');
}

// Default handler for tick events.
Model.prototype.tickHandler = function() {
	var self = this;
	console.log('Model tickHandler');
}


exports.Model = Model;
