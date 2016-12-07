'use strict';

describe('Weather', function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

it ('should respond to stormy', function() {
expect('isStormy' in weather).toEqual(true);
});


it ('should return true if stormy', function() {
 spyOn(weather, 'numberGenerator').and.returnValue(4);
expect(weather.isStormy()).toEqual(true);
});

});
