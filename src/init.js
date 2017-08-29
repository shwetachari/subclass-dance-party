$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      ($('#danceFloor').height() - 300) * Math.random() + 230,
      $('#danceFloor').width() * Math.random(),
      Math.random() * 1000
    );
    $('#danceFloor').append(dancer.$node);
  });

  $('#removeAllDancers').click(function() {
    $('#danceFloor').html('');
  });

  $('#lineDance').click(function() {
    // select all dancers (every element with class dancer)
    // change their x and y positions
      // y is constant
      // iterate over elements
        // increment x by div width / number of dancers
    // z-index = Math.round(x);
    var top = (($('#danceFloor').height()) / 2) + 100;
    var leftIncrement = ($('#danceFloor').width()) / ($('.dancer').length);
    var left = 0;
    
    $('.dancer').each(function(index, dancer) {
      if ($(dancer).hasClass('scary')) {
        left = (leftIncrement) * index - 100;
      } else {
        left = (leftIncrement) * index;
      } 
      // dancer.style.cssText = 'top:' + top + ' !important; left:' + left + ' !important; z-index:' + Math.round(left);
      $(dancer).css('top', top);
      $(dancer).css('left', left);
      $(dancer).css('z-index', Math.round(left));
    });
  });

  var quoteArray = [
    'Great party!', 'Groovy music!', 'Raise the roof!', 'Sweet moves!', 'Who called the cops?', 'Is there alcohol in this?',
    'Who\'s house is this?'];
    
  var $bubble = $('<div class="bubble"></div>');
  $('#danceFloor').append($bubble);
  $bubble.hide();
  
  $('#danceFloor').on('mouseover', '.dancer', function() {
    // create quote bubble 
    // retrieve random quote from quote array
    // add random quote to div
    // attach div above dancer
    // retrieve top and left properties of dancer
    // $(this)
    var top = $(this).css('top');
    var left = $(this).css('left');
    $bubble.css('left', left);
    $bubble.html(quoteArray[Math.floor(Math.random() * quoteArray.length)]);
    $bubble.css('top', top);
    $bubble.css('z-index', Math.max($('#danceFloor').width(), ($('#danceFloor').height() - 300) + 230));
    $bubble.fadeIn();
  });

  $('#danceFloor').on('mouseout', '.dancer', function() {
    $('.bubble').fadeOut();    
  });

  $('#randomize').click(function() {
    $('.dancer').each(function(index, dancer) {
      var top = ($('#danceFloor').height() - 300) * Math.random() + 230;
      var left = $('#danceFloor').width() * Math.random();
      $(this).css('top', top);
      $(this).css('left', left);
      $(this).css('z-index', top);
    });
  });
});

