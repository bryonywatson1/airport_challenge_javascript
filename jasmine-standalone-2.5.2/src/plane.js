var Plane = function(){};

Plane.prototype.land = function(airport) {
  airport.clearForLanding(this);
};

Plane.prototype.takeOff = function(airport) {
  airport.clearForTakeoff(this);
};
