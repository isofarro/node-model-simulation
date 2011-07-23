var pulse   = require('./lib/pulse'),
	myPulse = new pulse.Pulse(),
	ticks   = 0;

myPulse.start()
	.on('tick', function() { ticks++; console.log('tick-tock!'); })
	.on('end',  function() { console.log('Ticks: ' + ticks); });


setTimeout(function() {
	myPulse.stop();
}, 10000);

