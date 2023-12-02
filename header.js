
  $(document).ready(function () {
    var header = $('header');
    var menuToggle = $('.header_menu_toggle');
    var siteNav = $('.site-nav');
  
    $(window).scroll(function () {
      if ($(this).scrollTop() > header.height()) {
        header.addClass('fixed-header');
      } else {
        header.removeClass('fixed-header');
      }
    });
  
    $('.header_menu_toggle').click(function() {
  
        $('.site-nav').toggleClass('site-nav--open', 500);
        $(this).toggleClass('open');
        
      })
  });
