$(document).ready(function () {
  function handleResize() {
    if ($(window).width() <= 992) {
      // $(".sidebar-container .navbar ul li").hide();
      if ($(".hamburger input").is(":checked")) {
        // $(".sidebar-container .navbar ul li").show();
        $(".sidebar-container .navbar").css({
          transform: "none",
        });
        // $(".sidebar-container").css({
        //   minHeight: "100dvh",
        // });
      } else {
        $(".sidebar-container .navbar").css({
          transform: "",
        });
        // $(".sidebar-container").css({
        //   minHeight: "",
        // });
      }
    } else {
      $(".sidebar-container .navbar ul li").show();
    }
  }

  handleResize();
  $(window).resize(handleResize);

  $(".hamburger input").on("change", function () {
    handleResize();
  });
});
