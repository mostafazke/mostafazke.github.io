function loadMore() {
$('.project').slice(0, 6).fadeIn();  
  $('.all-btn').on('click', e => {
    if ($('.project:hidden').length > 0) {
      e.preventDefault();
      $('.project:hidden').slice(0, 6).fadeIn();
    } else {
        $('.all-btn').attr('href', '#');
      }
  })
}
loadMore();
