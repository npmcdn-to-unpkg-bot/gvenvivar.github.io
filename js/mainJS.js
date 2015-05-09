
var imgs = ["img/slider/1.jpg","img/slider/2.jpg", "img/slider/3.jpg", "img/slider/4.jpg", "img/slider/5.jpg"];
var n=0;
var time=800;
play=setInterval("chgImg(0)", 5000);

function chgImg(number) {
if (number!=0) n=number-2;
 $('#slide_show').fadeOut(time, function() {    //для картинок
  $(this).attr('src', imgs[n]).fadeIn(time);
 });
 n++;
if (n>=imgs.length) n=0;
};
    