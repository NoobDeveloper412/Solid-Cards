/* jQuery Script Goes Here */
$(document).ready(function() { //if the DOM is ready 

	var animation_value = 'animation-slideUp'; //see animation.css or documentation for the possible values, remove value to deactivate animation;

	$('#temporary-container').load("ajax/profile-cards-1.html", function() {

		$('.tab-marker > li:first-child').css('z-index','11'); //the first-child tab-marker always has a highets z-index

	});

	// when the browser is resized

	$(window).resize(function() {

		if ($(window).width() <= 894) {

			$('#temporary-container').removeAttr('style');

		} 

	});

	/* tab-settings, for optional - live - preview only */

	$('#card-design-changer').on('change', function() {

		/* tab-design-changer */ 

		var _this = $(this);
		var tab_design_value = $('#card-design-changer').val();
		$('#temporary-container').load("ajax/" + tab_design_value + ".html");


	});

	$('#card-theme-changer').on('change', function() {

		var _this = $(this);
		var css_path = "css/";
		var theme_value = _this.val() + '.css';
	
		$('link#themes').attr('href', css_path + theme_value);
		
	});

	$('.settings-container').on('click', '.menu-marker', function() {

		var _this = $(this);
		var icon = _this.find('.icon');

		// switch "X" to "Gear" icon

		if (icon.children('i').hasClass('fa-gear')) {

			icon.children('i').removeClass('fa-gear fa-spin').addClass('fa-times');
			_this.parent().next().css('margin-top','180px');

		} else {

			icon.children('i').removeClass('fa-times').addClass('fa-gear fa-spin');
			_this.parent().next().css('margin-top','10px');

		}

		_this.parent().toggleClass('show-settings');

	});

	
});

	/* Custom Functions for removing specific class base from a regular expression */

	function removeClassRegEx(target_element,target_pattern) { //target pattern must be a regular expression

		var target = target_element;

		var classes = target.attr('class').split(" "); //attribute classes to array
		var pattern = target_pattern;

		for (x in classes) { //iterate each array and remove class based on the pattern match

			if (classes[x].match(pattern)) {

				target.removeClass(classes[x]);

			}

		}

	}