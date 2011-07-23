var pulse     = require('./lib/pulse'),
	waterflow = require('./models/waterflow'),
	myModel   = new waterflow.WaterFlow(),
	myPulse   = new pulse.Pulse({}),
	ticks     = 0;

myPulse
	//.config({ tickInterval: 1000, maxTicks: 10 })
	.config({ tickInterval: 1000 })
	//.on('tick', function() { ticks++; console.log('tick-tock!'); })
	.on('end',  function() { console.log('Ticks: ' + ticks); })
	.on('tick', function() { myModel.tick() })
	.start();


setTimeout(function() {
	myPulse.stop();
}, 10000);

