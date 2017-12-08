$(document).ready(function(){
  $('body').scrollspy({target: ".navbar", offset: 50});

  $("#myNav a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    }
  });

  function toggleIcon(e) {
      $(e.target)
          .prev('.panel-heading')
          .find(".expand")
          .toggleClass('fa-chevron-down fa-chevron-up');
  }
  $('.panel-group').on('hidden.bs.collapse', toggleIcon);
  $('.panel-group').on('shown.bs.collapse', toggleIcon);
});