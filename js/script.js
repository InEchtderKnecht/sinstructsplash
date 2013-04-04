	var AppNamespace = $(function () {
    'use strict';

	var $content = $('#content');
	var $one = $content.find('#one');
	var $two = $content.find('#two');
	var $three = $content.find('#three');

	$(document).ready( function(){

		var window_height;
		var window_width;
		var document_width;
		var document_height;
		var plakat_ende;
		var start_offset;
		var plakat_height;
		var scroll_offset;
		var fleisch = 100;
		var plakat_start;
		var plakat_end;
		var plakat_controller;
		var plakat_position;
		var fontsize1;
		var fontsize2;

		var $id_one = $('#one');
		var $id_two = $('#two');
		var $id_three = $('#three');
		var $id_four = $('#four');
		var $id_five = $('#five');
		var $id_six = $('#six');
		var $id_seven = $('#seven');
		var $foit1 = $('#foit1');
		var $foit2 = $('#foit2');
		var $foit3 = $('#foit3');

		var getheights = function() {
			window_height = $(window).height();
			window_width = $(window).width();
			document_height = $(document).height();
			document_width = $(document).width();

			plakat_height = $('#plakat').height();
			start_offset = window_height + fleisch;
			plakat_start = start_offset - (window_height / 2);
			plakat_end = plakat_start + plakat_height;

			plakat_ende = document_height - start_offset;
			$('#plakat').css('marginTop', start_offset).css('marginBottom', (window_height - fleisch));
			$('#container').css('paddingBottom', (window_height / 2.8));

			fontsize1 = (window_width / 1300) * 7 + 'rem';
			fontsize2 = (window_width / 1300) * 2.9 + 'rem';

			$('#subline').css('fontSize', fontsize1);
			$('.middle').css('fontSize', fontsize2);

		}

		var scrolling = function() {
			//console.log(relativescroll_pos);
			//console.log(scroll_pos);

			scroll_offset = $(window).scrollTop();
			// console.log('Scroll Offset: ' + scroll_offset);

			plakat_controller = scroll_offset - plakat_start;
			plakat_position = plakat_controller / plakat_height;
			// console.log('plakat controller = ' + plakat_controller);
			// console.log('plakat position = ' + plakat_position);
			// console.log('scroll_offset + window_height = ' + (scroll_offset + window_height));

			if ((scroll_offset + window_height) >= document_height) {
				// console.log ('end of page reached');
			}

			if (scroll_offset > (start_offset / 3)) {
				$('#fullscreen_container').css('opacity', 0);
				//$('#fullscreen_container').fadeOut(700);
			} else {
				$('#fullscreen_container').css('opacity', 1);
				//$('#fullscreen_container').fadeIn(700);
			}

			if (plakat_position > 0.03) {
				$foit1.addClass('rausfoyt');
			} else { $foit1.removeClass('rausfoyt'); }


			if (plakat_position > 0.62) {
				$foit2.addClass('rausfoyt');
			} else { $foit2.removeClass('rausfoyt'); }


			if (plakat_position > 0.36) {
				$foit3.addClass('rausfoyt');
			} else { $foit3.removeClass('rausfoyt'); }

		}

		$(window).load(function(){

			getheights();
			$('#loading').fadeOut(700);
			$('#container').fadeIn(1, function(){
				getheights();
			});
			setTimeout(function(){
				getheights();
			},300);
		});

		$(window).scroll(function(){
			scrolling();
		});

		$(document).bind('touchmove',function(e){
			scrolling();
		});

		$(window).resize(function(){
			getheights();
		});

		var $images = $("#fullscreen_container").children(), i = 1, length = 0;

		window.setInterval(function() {
			$images.removeClass('opaque');
			length = $images.length
			i++;
			if (i > length) {
				i = 1;
			}
			$("#fullscreen_container div:nth-child(" + i + ")").addClass('opaque');
		}, 5000);

	});

});