$(document).ready((function(){setTimeout((function(){$(".cokes").removeClass("hidden")}),6e3),$(".cokes_close, .cokes_button").click((function(){$(".cokes").addClass("hidden")})),$(".burger").click((function(){$("body").toggleClass("lock"),$(".header").toggleClass("close"),$(".burger").toggleClass("open")})),$(".header__navigation ul li a, .header__navigation .submenu a, .header_logo").click((function(){$("body").removeClass("lock"),$(".burger").removeClass("open"),$(".header").addClass("close")})),$(".input_file").change((function(){var e=$(this).val().replace(/.*\\/,"");$(".input_file_label span").html(e)})),$(".feedback__window_close-cross").click((function(){$(".feedback,.feedback__window").addClass("close"),$(".burger").hasClass("open")||$("body").toggleClass("lock")})),$(".header_feedback, .converter-hover_button, .tile_button, .prices-section__footer_button").click((function(){$(".feedback, .feedback__window").removeClass("close"),$("body").addClass("lock")})),$(".main-section__content_button").click((function(){$(".rocket").css("animation","fly 5s linear forwards")})),$(".converter-wrapper").hover((function(){$(this).children(".converter.unhover").css("opacity","0"),$(this).children(".converter.hover").css("opacity","1")}),(function(){$(".converter.unhover").css("opacity","1"),$(".converter.hover").css("opacity","0")})),$(".tabs__header_title").click((function(){$(".tabs__header_title").removeClass("shown"),$(this).addClass("shown");let e=$(this).attr("select");$(".tabs__content_pictures .picture, .tabs__content_description .description").removeClass("shown"),$(".tabs__content_pictures .picture, .tabs__content_description .description").filter("."+e).addClass("shown")})),$(".prices-section__content_tile").hover((function(){$(this).children(".tile_button").css("background","#1141c9")}),(function(){$(".tile_button").css("background","#199fe2")})),$(".header__navigation a, .footer-section__menu a, .header_logo").click((function(e){e.preventDefault();let o=$(this).attr("href"),t=$(o).offset().top;$("body, html").animate({scrollTop:t-60},1e3)})),$(".drop_menu").click((function(){$(".submenu").toggleClass("open")})),$(".submenu a").click((function(){$(".submenu").removeClass("open")})),$(window).scroll((function(){$(window).scrollTop()>670?$(".header").css("background-color","rgba(35, 46, 67, 0.6)"):$(".header").css("background-color","rgba(35, 46, 67, 0)")}))}));