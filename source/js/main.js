$(document).ready(function() {
  // menu arrows
  $('#thearrow').click(function() {
    $(this).toggleClass('arrow-down');
    $('#left-nav').toggleClass('left-nav-right');
  });

  $('.content :header, #bio :header, #colophon :header').each(function() {
    header = $(this).text();
    id = $(this).attr('id');
    $('#toc').append('<a href="#'+ id + '"><li>' + header + '</li></a>');
  });
  $('#toc a').click(function() {
    $('#left-nav').toggleClass('left-nav-right');
  });
  $('#toc').localScroll({
    offset: -100
  });

  // mac or windows/linux
  var isMacLike = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)?true:false;
  if (isMacLike == true) {
    $('.ctrl-s span').text('Cmd+S');
  } 

});

$('.slides').flickity({
  // options
  cellAlign: 'left',
  contain: true
});


