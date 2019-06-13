function loadMore() {
$('.project').slice(0, 6).fadeIn();
  $('.all-btn').on('click', e => {
    e.preventDefault();
    $('.project:hidden').slice(0, 6).fadeIn();
    if ($('.project:hidden').length === 0) {
      $('.all-btn').hide();
    }
  })
}
loadMore();
