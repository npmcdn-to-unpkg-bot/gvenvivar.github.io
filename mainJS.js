$(document).ready(function() {
    $('li#photo ul').hide();
        $('li#photo').hover(
        function() {$('li#photo ul').fadeIn('slow').stop(true, true)},
        function() {$('li#photo ul').fadeOut().stop(true, true)});
}); 
$(document).ready(function() {
        $('.viewgallery').mouseenter(function(e) {
            $(this).children('a').children('img').animate({ height: '299', left: '0', top: '0', width: '450'}, 100).stop(true, true);
            $(this).children('a').children('span').fadeIn(200).stop(true, true);
        }).mouseleave(function(e) {
            $(this).children('a').children('img').animate({ height: '332', left: '-20', top: '-20', width: '500'}, 100);
            $(this).children('a').children('span').fadeOut(200).stop(true, true);
        });
    });

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
    