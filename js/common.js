$(function() {
  /*script 영역 ajax 사용 예*/
  $.ajax({
    url: 'data.xml',
    dataType: 'xml',
    success: function(data) {

      $('item', data).each(function() {
        let titleText = $('title',this).text();
        let dateText = $('date',this).text();
        let linkText = $('link',this).text();
        let nameText = $('name',this).text();
        let contentText = $('content',this).text();

        $('dl').append(`<div class="title"><a href=${linkText}>${titleText}</a></div><div class="date">${dateText}</div><div class="name">${nameText}</div><div class="content">${contentText}</div>`)
      });
    }
  });

  // 기사노출 클릭이벤트
  $('button').click(function() {
    // $(this).toggleClass('on');

    // if ($(this).attr('class') == '' || $(this).attr('class') == undefined) {
    //   $(this).addClass('on');
    // }else if ($(this).attr('class') == 'on') {
    //   $(this).removeClass('on');
    // }

    if ($(this).hasClass('on')) {
      $(this).removeClass('on');
    }else {
      $(this).addClass('on');
    }
  })
}); // document ready
