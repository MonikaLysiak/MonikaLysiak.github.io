  $(document).ready(function() {
    $('nav a').click(function(e) {
      e.preventDefault();
      var section = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(section).offset().top
      }, 1000);
    });
  });

  $(document).ready(function() {
    $(window).scroll(function() {
      var currentPosition = $(window).scrollTop();
      if (currentPosition < 600) {
        $('.nav-side').hide();
        $('header').show();
      } else {
        $('.nav-side').show();
        $('header').hide();
      }
    });
  });