// Wait for the document to be ready.
$(document).ready(function () {



  // Toggle navbar visibility depending on page location.
  $(window).scroll(function () {
    let topOfDiv = ($('#me').offset().top - 1);
    if ($(document).scrollTop() > topOfDiv) {
      $('#navbar').addClass('nav-solid');
      $('#navbar').css('visibility', 'visible');
    } else {
      $('#navbar').removeClass('nav-solid');
      $('#navbar').css('visibility', 'hidden');
    }
  });

  // Make chevron link slide down to next section.
  var $root = $('html, body');
  $('a[href^="#"]').click(function () {
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top
    }, 500, function () {
      // Update URL
      window.location.hash = href;
    });
    return false;
  });

  

}); //document.ready()

