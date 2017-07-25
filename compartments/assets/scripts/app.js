$(document).ready(function () {

  // HOME page click tile links
  // 
  // // Open in new window
  // $(".box1").click(function () {
  //     window.open($(this).find("a:first").attr("href"));
  //     return false;
  // });

  // brings user back to home
  $(".logo_container").click(function(){
      window.location = $(this).find("a:first").attr("href");
      return false;
  });

  window.addEventListener('scroll', function(e){
      var distanceY = window.pageYOffset || document.documentElement.scrollTop,
          shrinkOn = 80,
          header = document.querySelector("header");
      if (distanceY > shrinkOn) {
          $("header").addClass("condensed");
      } else {
          if ($("header").has("condensed")) {
              $("header").removeClass("condensed");
          }
      }
  });

  // $(document).scroll(function() {
  //   if ($(this).scrollTop() > 0) {
  //     $('.floating_nav_content').addClass('.extended_header').removeClass('.floating_nav_content');
  //     console.log('scroll');
  //   }
  //   if ($(this).scrollTop == 0) {
  //     $('.floating_nav_content').removeClass('.extended_header');
  //   }
  //   else{
  //     return;
  //   }
  // });
});

