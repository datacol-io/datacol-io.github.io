---
---
/*
	Ion by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.init({
		reset: 'full',
		breakpoints: {
			
			// Global.
				global: {
					range: '*',
					href: '{{ site.baseurl }}/css/style.css',
					containers: 1400,
					grid: {
						gutters: {
							vertical: '4em',
							horizontal: 0
						}
					}
				},

			// XLarge.
				xlarge: {
					range: '-1680',
					href: '{{ site.baseurl }}/css/style-xlarge.css',
					containers: 1200
				},

			// Large.
				large: {
					range: '-1280',
					href: '{{ site.baseurl }}/css/style-large.css',
					containers: 960,
					grid: {
						gutters: {
							vertical: '2.5em'
						}
					},
					viewport: {
						scalable: false
					}
				},

			// Medium.
				medium: {
					range: '-980',
					href: '{{ site.baseurl }}/css/style-medium.css',
					containers: '90%',
					grid: {
						collapse: 1
					}
				},

			// Small.
				small: {
					range: '-736',
					href: '{{ site.baseurl }}/css/style-small.css',
					containers: '90%',
					grid: {
						gutters: {
							vertical: '1.25em'
						}
					}
				},

			// XSmall.
				xsmall: {
					range: '-480',
					href: '{{ site.baseurl }}/css/style-xsmall.css',
					grid: {
						collapse: 2
					}
				}

		},
		plugins: {
			layers: {
				
				// Config.
					config: {
						transform: true
					},
				
				// Navigation Panel.
					navPanel: {
						animation: 'pushX',
						breakpoints: 'medium',
						clickToHide: true,
						height: '100%',
						hidden: true,
						html: '<div data-action="moveElement" data-args="nav"></div>',
						orientation: 'vertical',
						position: 'top-left',
						side: 'left',
						width: 250
					},

				// Navigation Button.
					navButton: {
						breakpoints: 'medium',
						height: '4em',
						html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span>',
						position: 'top-left',
						side: 'top',
						width: '6em'
					}

			}
		}
	});

	var contactForm = function(form){
		var formurl = 'http://getsimpleform.com/messages/ajax?form_api_token=88ed0c44bcf06188fac43ee443f49fa2';

		$(selector).on('submit', function(e){
		  e.preventDefault();
	    var submitBtn = $(this).find("input[type='submit']");
	    var formData = $(this).serialize();
	    
	    submitBtn.addClass('sending');

	    $.ajax({
	      dataType: 'jsonp',
	      url: formUrl,
	      data: formData
	    }).done(function() {
	      setTimeout(function(){
	          submitBtn.removeClass('sending').addClass('success');
	        }, 600);
	    });

	  });

	};

	$(function() {
		contactForm('#contact');
		console.log("her");
	})();

})(jQuery);