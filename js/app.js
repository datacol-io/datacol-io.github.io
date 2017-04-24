
(function($) {
  var scrollNav = function() {
    $('a.scroll-nav').click(function(){  
      $(".active").removeClass("active");
      $(this).closest('li').addClass("active");
      var theClass = $(this).attr("class");
      $('.'+theClass).parent('li').addClass('active');
      
      //Animate
      $('html, body').stop().animate({
          scrollTop: $( $(this).attr('href') ).offset().top - 160
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
      analytics.ready(function(){
        analytics.trackLink($('.banner-actions a.bg-green'), 'Request Demo clicked');
        analytics.trackLink($('.freetrail-btn a'), 'Try clicked');
      });
    }
  };

  $(function() {
    contactForm('#contact');
    subscribeForm();
    scrollNav();
    initTracking();
  });

})(jQuery);