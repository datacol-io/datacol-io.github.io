
(function($) {
  var scrollNav = function() {
    $('a.scroll-nav').click(function(){
      //Animate
      $('html, body').stop().animate({
          scrollTop: $($(this).attr('href')).offset().top - 160
      }, 400);
      return false;
    });
  };

  var subscribeForm = function(){
    var form = $(".subscribe-form"), 
        emailF = form.find("[name='email']"),
        group  = form.find(".form-group");

    form.find('.btn-subscribe').unbind().click(function(ev){
      ev.preventDefault();

      if(emailF.val().length > 0){
        $.ajax({
          dataType: 'jsonp',
          url: "http://cli-analytics.datacol.io/subscribe/datacol",
          data: { email: emailF.val() },
        }).done(function(){
          setTimeout(function(){
            emailF.val('')
            group.after($("<p></p>").html("Awesome! thrilled to have you."))
          }, 600);
        })
      }
    })
  }

  var contactForm = function(selector){
    var formUrl = 'http://getsimpleform.com/messages/ajax?form_api_token=88ed0c44bcf06188fac43ee443f49fa2';
    var form = $(selector);

    form.on('submit', function(e){
      e.preventDefault();
      var submitBtn = $(this).find("input[type='submit']");
      var formData = $(this).serialize();
      var thank_you = $('<p></p>').addClass('alert alert-success')
                      .html("Thanks for contacting us, we will respond soon.")
      submitBtn.addClass('sending');

      $.ajax({
        dataType: 'jsonp',
        url: formUrl,
        data: formData
      }).done(function() {
        setTimeout(function(){
            submitBtn.removeClass('sending').addClass('success');
            form.find("input[type='text']").val('')
            form.append(thank_you);
          }, 600);
      });
    });
  };

  var initTracking = function(){
    if(window.analytics){
      var event = 'GA clicked'
      analytics.ready(function(){
        analytics.trackLink($('.banner-actions a.bg-green').get(0), event, { button: "Get started" });
        analytics.trackLink($('.banner-actions a.btn-how-works').get(0), event, { button: "how it works" });
        analytics.trackLink($('#try-modal .bg-green').get(0), event, { button: 'Download CLI' });
      });
    }
  };

  function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
      os = 'Linux';
    }

    return os;
  }

  changeCLIUrl = function(){
    var baseurl = "https://storage.googleapis.com/datacol-distros/";
    var os = getOS()
    if(os == "Mac OS" || os == "iOS") {
      baseurl += "osx.zip"
    } else {
      baseurl += "linux.zip"
    }

    $("#try-modal").find('.modal-footer .bg-green').attr('href', baseurl)
  }

  $(function() {
    contactForm('#contact');
    subscribeForm();
    scrollNav();
    initTracking();
    changeCLIUrl()
  });

})(jQuery);