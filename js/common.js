$(document).ready(function() {

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

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
    