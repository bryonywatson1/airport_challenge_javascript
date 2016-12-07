describe('plane', function() {

  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['clearForLanding']);
  });

  it('can land at airport', function(){
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('should instruct plane to take off', function() {
    expect('takeOff' in plane).toEqual(true);
  });

  it('should instruct plane to land', function() {
    expect('land' in plane).toEqual(true);
  });

  // it('can take off from  an airport', function(){
  //   plane.takeOff(airport);
  //   expect(airport._hangar).to notContain(plane);
  // });

});
