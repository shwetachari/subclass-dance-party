var MakeGroovyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('groovy');
};

MakeGroovyDancer.prototype = Object.create(MakeDancer.prototype);
MakeGroovyDancer.prototype.constructor = MakeGroovyDancer;

MakeGroovyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.animate({
    right: '200px'
  });
};