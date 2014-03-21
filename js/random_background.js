$(document).ready(function(){
  function randomColor() {
    return '#' + Math.random().toString(16).slice(3,9);
  };
  
  $('#button').on("click", function() {
    $('body').css('background', randomColor());
  }); // end on

}); // end ready