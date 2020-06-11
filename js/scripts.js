$(document).ready( function() {
	// ===========================cokes appear===============================
	setTimeout(function(){
	$(".cokes").removeClass("hidden");
		}, 6000);

	$(".cokes_close, .cokes_button").click(function(){
		$(".cokes").addClass("hidden");
	});

	// ===============================burger menu ===================================

	$(".burger, .header__navigation ul li a, .header__navigation .submenu a, .header_logo").click(function(){
		$("body").toggleClass("lock");
		$(".header").toggleClass("close");
		$(".burger").toggleClass("open");
	});

	// =====================================input file area =============================

	$(".input_file").change(function(){
		var filename = $(this).val().replace(/.*\\/, "");
		$(".input_file_label span").html(filename);
	});

	// =============================feeback block ============================================

	$(".feedback__window_close-cross").click(function(){
		$(".feedback,.feedback__window").addClass("close");
		if ($(".burger").hasClass("open")) {
			console.log("open");
		}
		else {
			$("body").toggleClass("lock")}
	})
	$(".header_feedback, .converter-hover_button, .tile_button, .prices-section__footer_button").click(function(){
		$(".feedback, .feedback__window").removeClass("close");
		$("body").addClass("lock");
	})

	// ===============================fly rocket===============================================

	$(".main-section__content_button").click(function(){
		$(".rocket").css("animation", "fly 5s linear forwards");
	});

	// =====================================Hover Tiles Converter =============================
	$(".converter-wrapper").hover(
		function(){
			$(this).children(".converter.unhover").css("opacity", "0");
			$(this).children(".converter.hover").css("opacity", "1");

		},
		function(){
			$(".converter.unhover").css("opacity", "1");
			$(".converter.hover").css("opacity", "0");
			;
		}
	);

	// =====================================tabs with change pic & content =========================

	$(".tabs__header_title").click(function(){
		$(".tabs__header_title").removeClass("shown");
		$(this).addClass("shown");
		let select = $(this).attr("select");
		$(".tabs__content_pictures .picture, .tabs__content_description .description").removeClass("shown");
		$(".tabs__content_pictures .picture, .tabs__content_description .description").filter("."+select).addClass("shown");
	});

	// =====================================Hover Prices Tiles =============================
	$(".prices-section__content_tile").hover(
			function(){
				$(this).children(".tile_button").css("background", "#1141c9");
			},
			function(){
				$(".tile_button").css("background", "#199fe2");
			}
		);
	// ==========================navigation slow slide=======================
	$(".header__navigation a, .footer-section__menu a, .header_logo").click(function(event){
			event.preventDefault();
			let page_id = $(this).attr("href");
			let offset = $(page_id).offset().top;
			$("body, html").animate({scrollTop : offset-60}, 1000);
	})
	$(".drop_menu").click(function(){
		$(".submenu").toggleClass("open");
	})
	$(".submenu a").click(function(){
		$(".submenu").removeClass("open");
	});
	// =============================fade menu  fade ===========================

	$(window).scroll(function(){
		let scroll=$(window).scrollTop();	
		if (scroll>670 ) {
			$(".header").css("background-color", "rgba(35, 46, 67, 0.6)");
		 } 
		else {
			$(".header").css("background-color", "rgba(35, 46, 67, 0)");
		};
	});
});