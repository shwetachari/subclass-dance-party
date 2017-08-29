var MakeFlippyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  var classArray = ['groovy', 'blinky', 'scary'];
  this.$node.addClass(classArray[Math.floor(Math.random() * classArray.length)] + ' flippy');
  this.startingAngle = 0;
};

MakeFlippyDancer.prototype = Object.create(MakeDancer.prototype);
MakeFlippyDancer.prototype.constructor = MakeFlippyDancer;

MakeFlippyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.startingAngle += 90;
  this.$node.css('transform', 'rotate(' + this.startingAngle + 'deg)');
};