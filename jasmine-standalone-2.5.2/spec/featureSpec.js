'use strict';

describe('Feature Test', function() {
  var plane;
  var airport;
  var weather;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
    weather = jasmine.createSpyObj('weather', ['sunny']);
  });

  it('planes can be instructed to land at an airport', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('plane can take off from an airport, and will no longer be at the airport', function() {
    plane.land(airport);
    plane.takeOff(airport);
    expect(airport.planes()).not.toContain(plane);
  });

  it('airport prevents take off if weather is stormy', function () {
    plane.land(airport);
    weather = ['stormy']
    expect(airport.clearForTakeoff(plane)).toThrow('Plane cannot take off in stormy weather');
  });
});
