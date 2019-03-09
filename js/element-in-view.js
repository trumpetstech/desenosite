(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

$(window).on('scroll', function() {
  
  $(".icon-one,.icon-two,.icon-three,.icon-four,.icon-five,.icon-six,.icon-seven,.icon-eight,.icon-nine,.icon-ten,.icon-eleven,.icon-twelve,.icon-thirteen,.icon-fourteen,.icon-fifteen,.icon-sixteen,.icon-seventeen,.icon-eighteen,.icon-nineteen,.icon-twenty,.circle-one,.circle-two,.circle-three,.sec-title,.page-title,.main-footer,.video-box,.lined-pink,.about-block,.main-banner-section,.team-block,.news-block-two,.blue-triangle,.left-icon,.right-icon").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("now-in-view"); 
    } else {
      el.removeClass("now-in-view");
    }
  });
  
});

$(document).on('ready', function() {
  $(".icon-one,.icon-two,.icon-three,.icon-four,.icon-five,.icon-six,.icon-seven,.icon-eight,.icon-nine,.icon-ten,.icon-eleven,.icon-twelve,.icon-thirteen,.icon-fourteen,.icon-fifteen,.icon-sixteen,.icon-seventeen,.icon-eighteen,.icon-nineteen,.icon-twenty,.circle-one,.circle-two,.circle-three,.sec-title,.page-title,.main-footer,.video-box,.lined-pink,.about-block,.main-banner-section,.team-block,.news-block-two,.blue-triangle,.left-icon,.right-icon").each(function(i, el) {
	var el = $(el);
	if (el.visible(true)) {
	  el.addClass("now-in-view"); 
	} else {
	  el.removeClass("now-in-view");
	}
  });
});