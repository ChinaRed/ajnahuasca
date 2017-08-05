$(document).ready(function(){
  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
    $('.header_nav').toggleClass('open_tray');
  });
  // Submits Contact form to Email
  $(function(){
    // Get the form
    // var form = $('#contact');

    // Get the messages div
    var formMessages = $('#form-messages');
  });

  // Set up an event listener for the contact form
  $('#contact').submit(function(event){
console.log('form'); 
    // Stop the browser from submitting the form
    event.preventDefault();
  });

  // Serialize the form data
  var formData = $(form).serialize();

  // Submit the form using AJAX
  $.ajax({
    type: 'POST',
    url: $(form).attr('action'),
    data: formData
  })
  .done(function(response){
    // Make sure that the formMessages div has the 'success' class
    $(formMessages).removeClass('error');
    $(formMessages).addClass('success');

    // Set the message text
    $(formMessages).text(response);

    // Clear the form
    $('#name').val('');
    $('#email').val('');
    $('#message').val('');
  })
  .fail(function (data){
    // Make sure that the formMessages div has the 'error' class
    $(formMessages).removeClass('success');
    $(formMessages).addClass('error');

    // Set the message text
    if (data.responseText !== ''){
      $(formMessages).text(data.responseText);
    } else {
      $(formMessages).text('Sorry! An error occured and your message could not be sent.');
    }
  });
});


// $(document).ready(function () {

  // Logo link to home page
  // $(".logo_container").click(function(){
  //     window.location = $(this).find("a:first").attr("href");
  //     return false;
  // });

//   window.addEventListener('scroll', function(e){
//       var distanceY = window.pageYOffset || document.documentElement.scrollTop,
//           shrinkOn = 80,
//           header = document.querySelector("header");
//           menu = document.querySelector(".menu-item");
//       if (distanceY > shrinkOn) {
//           $("header").addClass("condensed");
//           $(".menu-item").addClass("condensed");
//           console.log('menu');
//       } else {
//           if ($("header").has("condensed") && $(".menu-item").has("condensed")) {
//               $("header").removeClass("condensed");
//               $(".menu-item").removeClass("condensed");
//           }
//       }
//   });
// });

