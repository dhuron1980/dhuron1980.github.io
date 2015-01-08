// JavaScript Document
$(document).ready(function () {

  $('.overlay-trigger').on('click', function (e) {
    e.preventDefault();
    $('body').addClass('modal-open');
    var $this = $(this);
    $('.overlay').removeClass('open');
    $this.parents('.overlay-container').find('.overlay').addClass('open');
  });
  
  $('.overlay-close').on('click', function (e) {
    e.preventDefault();
    $('body').removeClass('modal-open');
    $(this).parent().removeClass('open');
  });
  
});
