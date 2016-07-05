$(document).ready(function() {
  //Stack menu when collapsed
  $('#navbar-collapse-target').on('show.bs.collapse', function() {
      $('.nav-pills').addClass('nav-stacked');
  });

  //Unstack menu when not collapsed
  $('#navbar-collapse-target').on('hide.bs.collapse', function() {
      $('.nav-pills').removeClass('nav-stacked');
  });
});
