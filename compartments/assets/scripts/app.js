$(document).ready(function () {

  // HOME page click tile links
  // 
  // // Open in new window
  // $(".box1").click(function () {
  //     window.open($(this).find("a:first").attr("href"));
  //     return false;
  // });

  // Or use this to Open link in same window (similar to target=_blank)
  $(".table-center").click(function(){
      window.location = $(this).find("a:first").attr("href");
      console.log('awesome');
      return false;
  });

  
});