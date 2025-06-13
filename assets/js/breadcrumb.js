$(document).ready(function () {
  function handleResize() {
    if ($(window).width() <= 992) {
      $(".hamburger").show();
      $(".sidebar-container")
        .hide()
        .css({
          right: "-300px",
          width: "300px",
          position: "fixed",
          top: 0,
          height: "100%",
          zIndex: 9999,
        });
      // $('header').css({display: 'flex', justifyContent: 'space-between', alignItems: 'center'});
    } else {
      $(".hamburger").hide();
      $(".sidebar-container")
        .show()
        .css({
          position: "",
          right: "",
          width: "",
          top: "",
          height: "",
          zIndex: "",
        });
      // $('header').css({display: '', justifyContent: '', alignItems: ''});
    }
  }

  handleResize();
  $(window).resize(handleResize);
  $(".hamburger").on("click", function () {
    $(".sidebar-container").show().animate({ right: 0 }, 300);
  });

  $(document).on("click", function (e) {
    if ($(window).width() <= 992) {
      if (!$(e.target).closest(".sidebar-container, .hamburger").length) {
        $(".sidebar-container").animate({ right: "-300px" }, 300, function () {
          $(this).hide();
        });
      }
    }
  });
});
