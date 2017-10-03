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



$(document).ready(function() {
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var scrollPercent = (scrollTop) / (docHeight - winHeight);
    var scrollPercentRounded = Math.round(scrollPercent*100);
    $(".progress-bar").css("width", scrollPercentRounded+"%");
    
    console.log(winHeight);
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJwcm9ncmVzcy1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gIC8vIG1lbnUgYXJyb3dzXG4gICQoJyN0aGVhcnJvdycpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2Fycm93LWRvd24nKTtcbiAgICAkKCcjbGVmdC1uYXYnKS50b2dnbGVDbGFzcygnbGVmdC1uYXYtcmlnaHQnKTtcbiAgfSk7XG5cbiAgJCgnLmNvbnRlbnQgOmhlYWRlciwgI2JpbyA6aGVhZGVyLCAjY29sb3Bob24gOmhlYWRlcicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgaGVhZGVyID0gJCh0aGlzKS50ZXh0KCk7XG4gICAgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG4gICAgJCgnI3RvYycpLmFwcGVuZCgnPGEgaHJlZj1cIiMnKyBpZCArICdcIj48bGk+JyArIGhlYWRlciArICc8L2xpPjwvYT4nKTtcbiAgfSk7XG4gICQoJyN0b2MgYScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICQoJyNsZWZ0LW5hdicpLnRvZ2dsZUNsYXNzKCdsZWZ0LW5hdi1yaWdodCcpO1xuICB9KTtcbiAgJCgnI3RvYycpLmxvY2FsU2Nyb2xsKHtcbiAgICBvZmZzZXQ6IC0xMDBcbiAgfSk7XG5cbiAgLy8gbWFjIG9yIHdpbmRvd3MvbGludXhcbiAgdmFyIGlzTWFjTGlrZSA9IG5hdmlnYXRvci5wbGF0Zm9ybS5tYXRjaCgvKE1hY3xpUGhvbmV8aVBvZHxpUGFkKS9pKT90cnVlOmZhbHNlO1xuICBpZiAoaXNNYWNMaWtlID09IHRydWUpIHtcbiAgICAkKCcuY3RybC1zIHNwYW4nKS50ZXh0KCdDbWQrUycpO1xuICB9IFxuXG59KTtcblxuJCgnLnNsaWRlcycpLmZsaWNraXR5KHtcbiAgLy8gb3B0aW9uc1xuICBjZWxsQWxpZ246ICdsZWZ0JyxcbiAgY29udGFpbjogdHJ1ZVxufSk7XG5cblxuIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICB2YXIgZG9jSGVpZ2h0ID0gJChkb2N1bWVudCkuaGVpZ2h0KCk7XG4gICAgdmFyIHdpbkhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICB2YXIgc2Nyb2xsUGVyY2VudCA9IChzY3JvbGxUb3ApIC8gKGRvY0hlaWdodCAtIHdpbkhlaWdodCk7XG4gICAgdmFyIHNjcm9sbFBlcmNlbnRSb3VuZGVkID0gTWF0aC5yb3VuZChzY3JvbGxQZXJjZW50KjEwMCk7XG4gICAgJChcIi5wcm9ncmVzcy1iYXJcIikuY3NzKFwid2lkdGhcIiwgc2Nyb2xsUGVyY2VudFJvdW5kZWQrXCIlXCIpO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKHdpbkhlaWdodCk7XG4gIH0pO1xufSk7Il19
