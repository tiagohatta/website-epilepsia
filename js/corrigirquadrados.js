$(window).bind('resize', function () { 
  corrigirquadrados();
});

function corrigirquadrados(){
  var video = $('.myVideo');
  var left = ($(window).width()/2);
  var top = ($(window).height()/ 2);
  var proporcao = left/top;

  if (proporcao > 1.7777){
    var alturavideo = top;
    var larguravideo = alturavideo*2 * 1.777;
  }
  else if (proporcao < 1.777){
    var larguravideo = left;
    var alturavideo = larguravideo*2/1.777
  }
  else {
    var larguravideo = left;
    var alturavideo = top;
  }

  //BARRA DOS LADOS (altura = top)
  if (proporcao > 1.7777){
    var tamx = top * 2 * 1.777 * 218/1050;
    var tamy = top * 2 * 203/590;
    var posx = ((((left*2)-(larguravideo))/2)+(larguravideo*437/860));
    var posy = top * 2 * 232/446;
    var pos2x = ((((left*2)-(larguravideo))/2)+(larguravideo*571/752));
    var pos2y = top * 2 * 32/360;

    //selec 8
    var posx8 = left*(1-230/333);
    var posy8 = (posy+pos2y)/1.86;
    var posx9 = left*(1+130/333);

    //selec6 e 7
    var posx6 = (left-(larguravideo*368/752));
    var posx7 = (left+(larguravideo*110/752));

    var posy6 = top * 2 * 365/767;
    //notyet
    var posvoltarx = left*(1-87/447);
    var posvoltary = top*(1-112/255);

    var barraleft = 30 + left - larguravideo/2;
    var barratop = 30;
  }
  //BARRA EM CIMA E EM EMBAIXO (largura = left)
  else if (proporcao < 1.7777){
    var tamx = left * 2 * 218/1050;
    var tamy = left * 2* 1/1.777  * 203/590;
    var posx = left*(1+8/400);
    var posy = ((((top*2)-(alturavideo))/2)+(alturavideo*232/446));
    var pos2x = left*(1+204/400);
    var pos2y = ((((top*2)-(alturavideo))/2)+(alturavideo*42/455));

    //selec8
    var posx8 = left*(2*40/1010);
    var posy8 = (posy+pos2y+10)/2;

    //selec9
    var posx9 = left*(2*769/1010); 

    //selec6 e 7
    var posx6 = left*2*(13/1356);
    var posx7 = left*2*(878/1356);
    var posy6 = ((((top*2)-(alturavideo))/2)+(alturavideo*365/767));

    //notyet
    var posvoltarx = left*(1-95/447);
    var posvoltary = top*(1-83/255);

    var barraleft = 30;
    var barratop = 30 + top - alturavideo/2;
  }
  else {
    var tamx = left * 2 *  218/1050;
    var tamy = top * 2 * 203/590;
    var posx = left * 2 *   437/860;
    var posy = top * 2 * 232/446;
    var pos2x = left * 2 *   485/640;
    var pos2y = top * 2 * 42/448;

    //selec8
    var posx8= left*(1-358/388);
    var posy8= top * 142/435;

    //selec9
    var posx9= left;

    //selec 6 e 7
    var posx6 = left*2*670/1356;
    var posx7 = left*2*878/1356;
    var posy6 = top*2*265/767;
  }

  var tempo = video[0].currentTime;

  $('#selec4').css({
    'top':posy,
    'left':posx,
    "height":tamy,
    "width":tamx
  });

  $('#selec2').css({
    'top':pos2y,
    'left':posx,
    "height":tamy,
    "width":tamx
  });

  $('#selec3').css({
    'top':pos2y,
    'left':pos2x,
    "height":tamy,
    "width":tamx
  });

  $('#selec5').css({
    'top':posy,
    'left':pos2x,
    "height":tamy,
    "width":tamx
  });

  $('#selec6').css({
    'top':posy6,
    'left':posx6,
    "height":0.78*tamy,
    "width":1.63*tamx
  });

  $('#selec7').css({
    'top':posy6,
    'left':posx7,
    "height": 0.78*tamy,
    "width":1.63*tamx
  });

  $('#selec8').css({
    'top':posy8,
    'left':posx8,
    "height":tamy*0.96,
    "width":tamx*0.96
  });

  $('#selec9').css({
    'top':posy8,
    'left':posx9,
    "height":tamy*0.96,
    "width":tamx*0.96
  });

  $('#proxjor').css({
    'top':posvoltary*8/9,
    "height":tamx*0.96*2*3*(347/1902),
    "width":tamx*0.96*2*3/2
  });

  $('.barralateral').css({
    'right':barraleft,
    'top': barratop
  });

  $('#voltarinicio').css({
    'top':posvoltary,
    'left':posvoltarx,
    "height":tamy*0.96,
    "width":tamx*0.96
  });

}