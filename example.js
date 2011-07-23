var pulse   = require('./lib/pulse'),
	myPulse = new pulse.Pulse();


myPulse.start();


setTimeout(function() {
	myPulse.stop();
}, 20000);

