var main = function() {
  
  $('form').submit(function() {
    
    var comment =$('#comment').val();
    var html = $('<li>').text(comment);
    
    if(comment !== "") {
      $(html).prependTo('.comments');
    }
    
    $('#comment').val('');
    return false;
  });
};

$(document).ready(main);