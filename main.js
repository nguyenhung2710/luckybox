$(document).ready(function () {
  var indexNum;
  var random_numb;
  var point = 0;
  $('.box').click(function () {
    $('.box__item').css('display', 'block');
    $('.box').css('pointer-events', 'none');
    indexNum = $('.box').index(this);
    if (indexNum == random_numb){
      alert('Chúc mừng bạn được cộng thêm 1 điểm')
      point++;
    } else {
      alert('Chúc bạn may mắn lần sau')
      point = 0;
    }
    $('.highpoint').html(point);
  })
  $('#start').click(function () {
    $('.box__item').css('background-color', 'blue');
    $('.box__item').css('display', 'none');
    $('.box').css('pointer-events', 'all');
    random_numb = Math.floor(Math.random() * 3);
    switch (random_numb) {
      case 0:
        $('.box__item--1').css('background-color', 'red');
        break;
      case 1:
        $('.box__item--2').css('background-color', 'red');
        break;
      case 2:
        $('.box__item--3').css('background-color', 'red');
        break;
    }
  })
});