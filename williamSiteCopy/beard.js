/*
	Author: Lumberjacks
	Template: Beard (Landing Page)
	Version: 1.0
	URL: http://themeforest.net/user/Lumberjacks/
*/

"use strict";

$(document).ready(function (){

	// E-mail validation via regular expression
	function isValidEmailAddress(emailAddress) {
		var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
		return pattern.test(emailAddress);
	};

	// Subscription form notifications and AJAX function
	$("#trialform").on('submit',function (event) {
		var input = $('.lj-trial-message');
			if(!input.is(':empty')) {
				$('.lj-trial-message').stop(true);
			}
			event.preventDefault();
			event.stopImmediatePropagation();

			var email = $("input#trial-email").val();
			var name = $("input#trial-name").val();

			$.post('https://app.showwwcase.nl/json/showcase/trial', {name:name, email:email}, function(response){
				try {
					var data = JSON.parse(response);
					if(data.success=='OK'){
						var email = $('input#trial-email').val();
						$('input[name="login[email]"]').val(email);
						$('input[name="login[token]"]').val(data.token);
						$('#tokenform').submit();

						// $(".lj-trial-message").html('<i class="icon ion-checkmark"></i> ' + data.message);
						// $('input#trial-email').val('');
						// $('input#trial-name').val('');


					}else{
						if(typeof(data.errors.name)!='undefined'){
							$(".lj-trial-message").stop(true).html('<i class="icon ion-alert-circled"></i> ' + data.errors.name);
							$("input#trial-name").focus();
						}else if(typeof(data.errors.email)!='undefined'){
							$(".lj-trial-message").stop(true).html('<i class="icon ion-alert-circled"></i> ' + data.errors.email);
							$("input#trial-email").focus();
						}else{
							$(".lj-trial-message").stop(true).html('<i class="icon ion-alert-circled"></i>Oeps, er is iets fout gegaan');
						}
					}
				}catch(ex){
					$(".lj-trial-message").stop(true).html('<i class="icon ion-alert-circled"></i>Oeps, er is iets fout gegaan');
				}
			}, 'text');

			/*
			if (name == "") {
				$(".lj-trial-message").stop(true).html('<i class="icon ion-alert-circled"></i> Oeps, je bent je naam vergeten.');
				$("input#trial-name").focus();
			}
			else if (email == "") {

				$(".lj-trial-message").stop(true).html('<i class="icon ion-alert-circled"></i> Hmm..Geen geldig e-mailadres.');
				$("input#trial-email").focus();
			}
			else if (!isValidEmailAddress( email )) {
				$(".lj-trial-message").stop(true).html('<i class="icon ion-alert-circled"></i> Hmm..Geen geldig e-mailadres.');
				$("input#trial-email").focus();
			}
			else {
				$.ajax({
					type: "POST",
					url: "./php/send-trial.php",
					data: {trialemail:email, trialname:name},
					success: function () {
						$(".lj-trial-message").html('<i class="icon ion-checkmark"></i> Je aanvraag is nu bij ons binnen. Houd je e-mail in de gaten.');
						$('input#trial-email').val('');
						$('input#trial-name').val('');
					}
				});
			}

			*/

	 });

	// Contact form functions
	$("#contactform").on('submit',function (event) {

			var input = $('.lj-contact-message');

			if(!input.is(':empty')) {
				input.stop(true);
			}
			event.preventDefault();
			event.stopImmediatePropagation();

			var name = $("input#contact-name");
			var email = $("input#contact-email");
			var message = $("textarea#contact-message");

			if (name.val() == "" || email.val() == "" || message.val() == "") {
				input.stop(true).html('<i class="icon ion-alert-circled"></i> Zo makkelijk kom je er niet vanaf. Alle velden zijn verplicht.');
				$("#contactform").find("input[type=text],textarea").filter(function(){
					if($(this).val() == ""){
						 event.preventDefault();
						 return true;
					}
				}).first().focus();
			}
			else if (!isValidEmailAddress( email.val() )) {
				input.stop(true).html('<i class="icon ion-alert-circled"></i> Ongeldig e-mailadres');
				email.focus();
			}
			else {
				$.ajax({
					type: "POST",
					url: "./php/send-contact.php",
					data: {contact_name:name.val(),
								 contact_email:email.val(),
								 contact_message:message.val()},
					success: function () {
						input.html('<i class="icon ion-checkmark"></i> Bedankt voor je bericht. We reageren binnen 24 uur. Beloofd. ');
						name.val('');
						email.val('');
						message.val('');
					}
				});
			}
	 });

	// backstretch
	$("header.home").backstretch("img/bg.jpg");
	$("body.beginnen").backstretch("img/bg.jpg");

	//quote slider
	$('.quote-wrapper').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  autoplay: false,
	  autoplaySpeed: 5000,
	  dots: true,
	  speed: 1000,
	});

	$(".vimeo").fancybox({
	    helpers: {
            media: {}
        },
		padding: 0,
		margin: 0
	});


/*
	// Parallax
	$('.parallax-texts').parallax({imageSrc: 'img/bg-2.jpg'});
	$('.app-stores').parallax({imageSrc: 'img/bg-3.jpg'});

	// Slick initializer function
	$(".lj-customers-carousel").slick({
		autoplay: true,
		autoplaySpeed: 3500,
		dots: true,
		arrows: false
	});
	$(".lj-clients-carousel").slick({
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		arrows: false
	});
	$(".lj-news-carousel").slick({
		autoplay: false,
		autoplaySpeed: 5000,
		dots: true,
		arrows: false
	});
/*
	// Tweetie
	$('.lj-twitter').twittie({
		username: 'YOUR_TWITTER_USERNAME',
		count: 3,
		dateFormat: '%d %b %Y',
		hideReplies: true,
		template: '<p>{{screen_name}} {{tweet}} <span>&mdash; {{date}}</span></p>',
		apiPath: 'twitter/api/tweet.php'
	});

	// PrettyEmbed.js

	$('#video').prettyEmbed({
			videoID: 'GIalL5fkhPM',
			previewSize: 'hd',

			// Embed controls
			showInfo: false,
			showControls: true,
			loop: false,

			colorScheme: 'dark',
			showRelated: false,

			useFitVids: true
	});
	*/

	// Setting default easing
	jQuery.easing.def = "easeInOutExpo";

	// copying menu content to sidebar menu
	var menuContent = $('.lj-menu ul').html();
	$('.panel img').after('<ul>' + menuContent + '</ul');

	// Scroll To # Links
	$('.lj-menu a[href^="#"],.panel ul li a[href^="#"]').on('click', function(e) {
		e.preventDefault();

		var target = this.hash;
		target = target.replace('#', '');
		 var $target = $('.' + target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top+50
		}, 1000, function() {
			window.location.hash = '#' + target;
		});
	});

	// call bigSlide
	$('.lj-menu span,.lj-menu-fixed-button span').bigSlide({
		easyClose: true,
		side: 'right',
		menuWidth: '250px',
		afterOpen: function() {
			$('.lj-menu span,.lj-menu-fixed-button span').removeClass('ion-android-menu').addClass('ion-android-close');
			$('.panel').css('box-shadow','-5px 0 10px 0 rgba(0,0,0,.1),-5px 0 30px 0 rgba(0,0,0,.20)');
		},
		afterClose: function() {
			$('.lj-menu span,.lj-menu-fixed-button span').removeClass('ion-android-close').addClass('ion-android-menu');
			$('.panel').css('box-shadow','');
		}
	});

	// fixed sidebar menu button fading
	function menuScroll() {
		var h = $('header').outerHeight();
		if ($(window).scrollTop() > h) {
			$('.lj-menu-fixed-button span').css({'visibility':'visible','opacity':1});
		} else {
			$('.lj-menu-fixed-button span').css({'visibility':'hidden','opacity':0});
		}
	}

	menuScroll();
	$(window).scroll(function() {
		menuScroll();
	});

});

// Preloader
// Change delay and fadeOut speed (in miliseconds)
$(window).load(function() {
	$(".lj-preloader").delay(250).fadeOut(500);

	if ($(window).width() < 992) {
		$('.lj-tour-l').each(function () {
			if (!$(this).text().match(/^\s*$/)) {
				$(this).insertBefore($(this).prev('.lj-tour-l-image'));
			}
		});
	}

});