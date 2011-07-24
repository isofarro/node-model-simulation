var waterflow = require('./models/waterflow'),
	myModel   = new waterflow.WaterFlow();

myModel
	.config({ maxTicks: 10, tickInterval: 1000 })
	.on('tick', function() { console.log( myModel.status() );     })
	.on('end',  function() { console.log('Simulation completed'); })
	.start();


