$('.field').on('focus', function () {
  $('label[for=' + $(this).attr("id") + ']').addClass('focus');
});
$('.field').on('blur', function () {
  if (!$(this).val()) {
      $('label[for=' + $(this).attr("id") + ']').removeClass('focus');
  }
});