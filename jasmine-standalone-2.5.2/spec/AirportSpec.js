'use strict';

 describe('Airport', function() {
   var airport;
   var plane;
   var weather;

   beforeEach(function() {
     airport = new Airport();
     plane = jasmine.createSpyObj('plane', ['land', 'takeOff']);
     weather = jasmine.createSpyObj('weather', ['isStormy']);
   });

   describe('when weather is not stormy', function() {

     beforeEach(function() {
      spyOn(airport, 'checkWeather').and.returnValue(false);
     });

     it('landing bay will be empty by default', function() {
       expect(airport.planes()).toEqual([]);
     });

     it('it allows a plane to land', function(){
       airport.clearForLanding(plane);
       expect(airport.planes()).toEqual([plane]);
     });

     it('it allows a plane to take off', function() {
       airport.clearForLanding(plane);
       airport.clearForTakeoff(plane);
       expect(airport.planes()).not.toContain([plane]);
     });
   });

    describe('when weather is stormy', function() {

    beforeEach(function() {
      spyOn(airport, 'checkWeather').and.returnValue(true);
      airport.clearForLanding(plane);
    });

     it('not not allow a plane to take off', function() {
       expect(function(){ airport.clearForTakeoff(plane); }).toThrowError('Plane cannot take off in stormy weather')
     });
   });
 });
