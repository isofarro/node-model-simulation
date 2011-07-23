var pulse   = require('./lib/pulse'),
	myPulse = new pulse.Pulse({}),
	ticks   = 0;

myPulse
	//.config({ tickInterval: 1000, maxTicks: 10 })
	.config({ tickInterval: 1000 })
	.on('tick', function() { ticks++; console.log('tick-tock!'); })
	.on('end',  function() { console.log('Ticks: ' + ticks); })
	.start();


setTimeout(function() {
	myPulse.stop();
}, 10000);

