/**
	pulse.js -- Handles and fires events, including the periodic tick.

**/
var sys    = require('sys');
	events = require('events');

var Pulse = function() {
	var intervalId,
		tickInterval = 2000;

	events.EventEmitter.call(this);

	// start the heartbeat of our model
	function start() {
		sys.log('Starting model');
		intervalId = setInterval(function() {
			tick();
		}, tickInterval);
	}

	// stop the heartbeat of our model
	function stop() {
		sys.log('Stopping model');
		clearInterval(intervalId);
	}

	// The heartbeat callback
	function tick() {
		console.log('tick.');
	}


	return {
		start: start,
		stop:  stop
	};
};

sys.inherits(Pulse, events.EventEmitter);

exports.Pulse = Pulse;

