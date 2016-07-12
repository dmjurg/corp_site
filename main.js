$(document).ready(function() {
  //Stack menu when collapsed
  $('#navbar-collapse-target').on('show.bs.collapse', function() {
      $('.nav-pills').addClass('nav-stacked');
  });

  //Unstack menu when not collapsed
  $('#navbar-collapse-target').on('hide.bs.collapse', function() {
      $('.nav-pills').removeClass('nav-stacked');
  });

  //Smooth scrolling 
    $('.nav a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          $('.navbar-default .navbar-nav > li > a').css({ color: "white" });
          $(this).css({ color: "rgb(224, 113, 96)" });
          return false;
        }
      }
    });

});
