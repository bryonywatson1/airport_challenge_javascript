function Weather() {
}
Weather.prototype.numberGenerator = function() {
  return (Math.floor((Math.random() * 4) +1));
};

Weather.prototype.isStormy = function() {
  return (this.numberGenerator() === 4);
};
