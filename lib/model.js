/**
	model.js -- an extendable interface for creating models

**/

var sys    = require('sys'),
	events = require('events');


var Model = function() {
	if ( false === (this instanceof Model) ) {
		return new Model();
	}
	events.EventEmitter.call(this);
};

sys.inherits(Model, events.EventEmitter);

Model.prototype.status = function() {
	return "Model status message.";
}


exports.Model = Model;
