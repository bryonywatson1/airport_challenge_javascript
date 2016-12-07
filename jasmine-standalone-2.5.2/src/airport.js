function Airport(){
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._hangar = [];
}

Airport.prototype.planes = function(){
  return this._hangar;
};

Airport.prototype.clearForLanding = function(plane){
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeoff = function(plane) {
  if (this.checkWeather()) {
    throw new Error("Plane cannot take off in stormy weather");
  }
  this._hangar.pop(plane);
};

Airport.prototype.checkWeather = function(weather) {
  return this._weather.isStormy(this);
};
