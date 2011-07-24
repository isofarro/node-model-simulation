node.js Model Simulation
========================

An event-based framework for simulation of models, for example
models of economic systems.

The underlying core of simulating a model is the lib/pulse.js 
(which extends EventEmitter) creates a configurable but steady 
stream of ticks (or heartbeats). Each tick is an iteration of 
the model.

The file lib/model.js extends lib/pulse.js and encapsulates 
common model functionality.


Waterflow example
-----------------

The example.js runs a simple waterflow model attaching 
callbacks to various interesting events.

The example model models/waterflow.js implements a simple
model of a water-container. In each iteration water flows
in and water flows out. If the water exceeds the total
capacity of the water-container it triggers an overflow event.
Similarly if the water-container runs out of water it triggers
an underflow event. 


