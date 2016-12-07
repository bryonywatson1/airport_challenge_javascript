'use strict';

describe('Plane', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding', 'clearForTakeoff']);
  });

  describe('when a plane lands', function() {
    it('airport should respond with clear for landing', function(){
      plane.land(airport)
      expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
    });
  });

  describe('when a plane takes off', function() {
    it('airport should respond with clear for takeoff', function() {
      plane.land(airport)
      plane.takeOff(airport)
      expect(airport.clearForTakeoff).toHaveBeenCalledWith(plane);
    });
  });

});
