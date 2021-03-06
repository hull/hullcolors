// This component listens to all events from the quiz
// to set the proper background color

/*global Hull:true , $:true*/
Hull.component({
  templates: [ 'main' ],
  initialize: function() {
    'use strict';
    var $body = $('body');
    this.sandbox.on('hull.quiz.**', function(data){
      if(data.current){
        // Change background color
        $body.css({
          backgroundColor: (data.current.question) ? data.current.question.description : ''
        });
      }
    }.bind(this));

  }
});

