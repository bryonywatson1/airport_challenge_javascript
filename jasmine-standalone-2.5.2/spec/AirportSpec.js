'use strict';

 describe('Airport', function() {
   var airport;
   var plane;

   beforeEach(function() {
     airport = new Airport();
     plane = jasmine.createSpyObj('plane', ['land', 'takeOff']);
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
