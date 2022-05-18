$(function() {
  function hrefFunc(x) {
    let thisHref = $(x).attr('href').split('/');
    thisHref = thisHref[thisHref.length-1].split('.')[0];
    return thisHref;
  };

  // 서브페이지 메뉴 영역
  $('#lnb ul li a').each(function() {
    if (hrefFunc(location) == hrefFunc(this)) {
      $(this).addClass('on');
    }
  });

  // 아코디언 영역
  $('dd:not(:first)').css('display', "none");
  $('dl dt').click(function() {
    if ($('+dd', this).css('display') == 'none') {
      $('dd').slideUp('slow');
      $('+dd', this).slideDown('slow');
    }
  });
  $('dd:not(:first)').css('display', 'none');
  $('dl dt').click(function() {
    let isAni = $('dd').is(':animated');
    if ($('+dd', this).css('display') == 'none' && isAni == false) {
      $('dd').animate({
        height: 'hide'
      }, 'slow', 'swing');
      $('+dd', this).animate({
        height: 'show'
      }, 'slow', 'swing');
    };
  });

  // 로드 영역
  if (hrefFunc(location) == 'index') {
    $('#footer').load('footer.html #footer');
  } else {
    $('#footer').load('../footer.html #footer');
  }
});
