$(".menu-action").click(function() {

 $(".menu-modal" ).show(function() {
  });
});

$('body').click(function() {
 $(".menu-modal" ).hide(function(e) {
   e.stopPropagation();
});
  $("textarea[maxlength]").keypress(function(){

  });

  function updateCountdown() {
    // 140 is the max message length
    var remaining = 140 - $('.message').val().length;
    $('.countdown').text(remaining + ' characters remaining.');
}
  $(document).ready(function($) {
      updateCountdown();
      $('.message').change(updateCountdown);
      $('.message').keyup(updateCountdown);
  });
});

//create ul
//create ls when user types into first ls, use update?

$('#inputName').keypress(function(e) {
    var text = $('#inputName').val(); {
    if(e.which == 13)
      $('<li>', {html:text}).appendTo('ul.justList');
    if(e.which == 13)
    $('#inputName').val('');
  }
});
$('.clear').click(function() {
  var list = $('<li>'); {
  $({html:list}).remove();
}
});
