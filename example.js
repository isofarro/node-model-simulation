var waterflow = require('./models/waterflow'),
	myModel   = new waterflow.WaterFlow();

myModel
	.init({ 
		// Simulation initial values
		maxTicks:       10, 
		tickInterval: 1000,
		
		// Waterflow model initial values
		capacity:       40,
		initialLevel:   18,
		flowIn:	        10,
		flowOut:        3
	})
	.on('start', function() { console.log('Starting simulation');  })
	.on('tick',  function() { console.log( myModel.status() );     })
	.on('end',   function() { console.log('Simulation completed'); })
	.start();


