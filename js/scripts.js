$(function () {
  // BEGIN CAROUSEL BUTTONS
  $('.carousel').carousel({ interval: 2000 });
  $('#carouselButton').click(function () {
    if ($('#carouselButton').children('i').hasClass('fa-pause')) {
      $('.carousel').carousel('pause');
      $('#carouselButton').children('i').removeClass('fa-pause');
      $('#carouselButton').children('i').addClass('fa-play');
    } else {
      $('.carousel').carousel('cycle');
      $('#carouselButton').children('i').removeClass('fa-play');
      $('#carouselButton').children('i').addClass('fa-pause');
    }
  });
  // END CAROUSEL BUTTONS
  // BEGIN MODAL BUTTONS
  $('#reserveButton').on('click', function () {
    $('#reserveModal').modal('show');
  });
  $('#loginButton').on('click', function () {
    $('#loginModal').modal('show');
  });
  // END MODAL BUTTONS
});
