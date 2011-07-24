node.js Model Simulation
========================

An event-based framework for simulation of models, for example
models of economic systems.

The underlying core of simulating a model is the `lib/pulse.js` 
(which extends `EventEmitter`) creates a configurable but 
steady stream of ticks (or heartbeats). Each tick is an 
iteration of the model.

The file `lib/model.js` extends `lib/pulse.js` and encapsulates 
common model functionality.


Waterflow example
-----------------

The `example.js` runs a simple waterflow model attaching 
callbacks to various interesting events.

The example model `models/waterflow.js` implements a simple
model of a water-container. In each iteration water flows
in and water flows out. If the water exceeds the total
capacity of the water-container it triggers an overflow event.
Similarly if the water-container runs out of water it triggers
an underflow event. 

Example simulation:

	$ node example.js
	24 Jul 20:44:14 - Starting model
	Starting simulation
	Water level: 18/40
	Water level: 25/40
	Water level: 32/40
	Water level: 39/40
	Water level: 40/40 [Wasted: 6]
	Water level: 40/40 [Wasted: 13]
	Water level: 40/40 [Wasted: 20]
	Water level: 40/40 [Wasted: 27]
	Water level: 40/40 [Wasted: 34]
	Water level: 40/40 [Wasted: 41]
	24 Jul 20:44:24 - Stopping model
	Simulation completed



