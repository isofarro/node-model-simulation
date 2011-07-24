var //pulse     = require('./lib/pulse'),
	waterflow = require('./models/waterflow'),
	myModel   = new waterflow.WaterFlow(),
	//myPulse   = new pulse.Pulse({}),
	ticks     = 0;

// TODO: Refactor to get myModel to use myPulse
/****
myPulse
	.config({ tickInterval: 1000, maxTicks: 10 })
	.on('end',  function() { console.log('Ticks: ' + myPulse.ticks); })
	.on('tick', function() { myModel.tick() })
	.on('end',  function() { console.log('Simulation completed'); })
	.start();
****/


// /********
// Preferred interface
myModel
	.config({ maxTicks: 10, tickInterval: 1000 })
	.on('tick', function() { console.log(myModel.status());         })
	.on('end',  function() { console.log('Simulation completed'); })
	.start();
// ********/


