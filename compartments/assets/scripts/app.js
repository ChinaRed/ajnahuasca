// Toggles Nav Tray (Mobile)
$(document).ready(function(){
  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
    $('.header_nav').toggleClass('open_tray');
  });
});
// Clears Contact fields form after submit
  function clearFields(){
    console.log("wassup");
    setTimeout(function() {
      document.getElementById("contact-form").reset();
   }, 100);
  }

//   $("#message_link").click(function(){
//    setTimeout(function() {
//        if (some_conditions){
//            document.getElementById("contact-form").reset();
//        }
//    }, 100);
// });

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

