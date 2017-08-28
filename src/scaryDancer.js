var MakeScaryDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('scary');
};

MakeScaryDancer.prototype = Object.create(MakeDancer.prototype);
MakeScaryDancer.prototype.constructor = MakeScaryDancer;

MakeScaryDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggleClass('hidden');
};