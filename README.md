node.js Model Simulation
========================

An event-based framework for simulation of models, for example
models of economic systems. By building models on events we
can allow third-party code to participate and affect the 
running model. For example running two related models 
side-by-side can allow a third party to arbitrage between the
two models.

The underlying core of simulating a model is the `lib/pulse.js` 
(which extends `EventEmitter`) creates a configurable but 
steady stream of ticks (or heartbeats). Each tick is an 
iteration of the model.

The `lib/pulse.js` emits the following events:

* `start` -- when the simulation is started
* `end` -- when the simulation is ended
* `tick` -- when each iteration is triggered


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

The waterflow example uses the following events (in addition
to those provided by `lib/pulse.js`:

* `overflow` -- when the water-container is overcapacity. This
	event passes the number of units spilt as an argument.
* `underflow` -- when the water-container runs dry. This event
	passes the number of units short as an argument.
	

### Example simulation:

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



