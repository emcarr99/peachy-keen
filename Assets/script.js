// Initialize the Bootstrap Carousel component
  $('#projectCaption').carousel();

  // Add event listeners for carousel controls
  $('.carousel-control-prev').on('click', function() {
    $('#projectCaption').carousel('prev');
  });

  $('.carousel-control-next').on('click', function() {
    $('#projectCaption').carousel('next');
  });

  