$(function() {
	//resize header img
	function heightDetect() {
		if ($(window).height() > 480){
			$(".main_head").css("height", $(window).height());
		} else{
			$(".main_head").css("height", '360px');
		}
	};
	if ($(window).height() <= 600){	
		heightDetect();
	}
	$(window).resize(function() {
		if ($(window).height() <= 600){	
			heightDetect();
		}	
	});

	//resize slider

	var slideH = $('.slide-hor').height();
	var imgH = $('.new-ver img');
	imgH.css('height', slideH);


	//magnificPopup
	 $('.popup').magnificPopup({
		  type: 'image',
		  // other options
		  removalDelay: 300,
  		mainClass: 'mfp-fade',
		});
	
//owl-carusel

    var owl = $('.slider'),
        owlOptions = {
            items: 1,
            touchDrag: false,
					 	loop: true,
					 	nav: true,
					 	navText: "",
					 	animateOut: 'fadeOut',
					 	onInitialize : function(element){
		        owl.children().sort(function(){
		            return Math.round(Math.random()) - 0.5;
			        }).each(function(){
			            $(this).appendTo(owl);
			        });
	        	}
    		}
    		
    if ( $(window).width() > 760 ) {
        var owlActive = owl.owlCarousel(owlOptions);
    } else {
        owl.addClass('off');
    }

    $(window).resize(function() {
        if ( $(window).width() > 760 ) {
            if ( $('.owl-carousel').hasClass('off') ) {
                var owlActive = owl.owlCarousel(owlOptions);
                owl.removeClass('off');
            }
        } else {
            if ( !$('.owl-carousel').hasClass('off') ) {
                owl.addClass('off').trigger('destroy.owl.carousel');
                owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
            }
        }
    });

  //Masonary
   var $grid = $('.grid').masonry({
	    itemSelector: '.grid-item',
	    percentPosition: true,
	    columnWidth: '.grid-sizer'
	  });
	  // layout Isotope after each image loads
	  $grid.imagesLoaded().progress( function() {
	    $grid.masonry();
	  });  

	  var $container = $('.grid');

	  $container.infinitescroll({
      navSelector  : '#page-nav',    // selector for the paged navigation
      nextSelector : '#page-nav a',  // selector for the NEXT link (to page 2)
      itemSelector : '.grid',     // selector for all items you'll retrieve
      bufferPx: 200,
			
      loading: {
          finishedMsg: '<span class="loading">Все картины загружены</span>',
          msgText  		 : "<em>Загрузка галереи</em>",
          img: 'http://i.imgur.com/6RMhx.gif'
        }
      },
      // trigger Masonry as a callback
      function( newElements ) {
        // hide new items while they are loading
        var $newElems = $( newElements ).css({ opacity: 0 });
        // ensure that images load before adding to masonry layout
        $newElems.imagesLoaded(function(){
          // show elems now they're ready
          $newElems.animate({ opacity: 1 });
          $container.masonry( 'appended', $newElems, true );
        });
      }
    );


  //lightbox options
  	lightbox.option({
      showImageNumberLabel: false,
    });
   //popup
   $('a[href=#form]').magnificPopup();


  //equal height
  var $item = $('.item-wrap');
  var $criticHeight = $('.critic-text').height();
  var $imgHeight = $('.critic-paint');
  $(window).resize(function() {
  	if($(window).width() > 992){
  		$item.css('height','auto');
	  	$item.equalHeights();
	  }else{
	  	$item.css('height','auto');
	  }
	});
	if($(window).width() > 992){
		 $item.equalHeights();
	}
 

  $(window).resize(function() {
  	var $criticHeight = $('.critic-text').height();
  	$imgHeight.css('height','auto');
	  $imgHeight.css('height', $criticHeight + 60);
	});
	$imgHeight.css('height', $criticHeight + 60);
  

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	/*$("#form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.success').addClass('visible');
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$('.success').removeClass('visible');
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});
*/
	
	//check form name
	$('a[href=#form]').click(function(){
		$('#form .formname').val($(this).data('form'));
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
