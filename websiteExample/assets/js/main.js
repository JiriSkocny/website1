$(function(){

  var close = $('#close'),
      menu  = $('#menu'),
      overlay = $('.overlay'),
      sidenav = $('#sidenav-menu'),
      body    = $('body');
      
      menu.on('click', function(e){
        overlay.fadeIn();
        body.addClass('overflow-hidden');
        sidenav.animate({'margin-left': 0}, 500);

        e.preventDefault();
      });

      close.on('click', function(e){
        overlay.fadeOut();
        body.removeClass('overflow-hidden');
        sidenav.animate({'margin-left': '-320px'}, 500);

        e.preventDefault();
      });



}); 