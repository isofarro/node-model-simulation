var pulse     = require('./lib/pulse'),
	waterflow = require('./models/waterflow'),
	myModel   = new waterflow.WaterFlow(),
	myPulse   = new pulse.Pulse({}),
	ticks     = 0;

myPulse
	.config({ tickInterval: 1000, maxTicks: 10 })
	.on('end',  function() { console.log('Ticks: ' + myPulse.ticks); })
	.on('tick', function() { myModel.tick() })
	.on('end',  function() { console.log('Simulation completed'); })
	.start();



