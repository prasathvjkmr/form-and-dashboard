$(document).ready(function () {
  var path = window.location.pathname;
  $(".navbar ul")
    .first()
    .children("li:not(:first-child)")
    .children("a")
    .each(function () {
      if (this.href === window.location.origin + path) {
        $(this).addClass("active");
      }
    });
});

$(document).ready(function () {
  var dirname = window.location.pathname.slice(
    1,
    window.location.pathname.lastIndexOf(".html")
  );
  $(".title").text(dirname);
});
$(document).ready(function () {
  var selectedTheme = "";
  $(".theme-select-option")
    .children("div")
    .click(function () {
      selectedTheme = $(this).attr("class");
      console.log(selectedTheme);
      $(".theme-select-option").removeClass("show");
      $(".theme-selected").children("img").attr("alt", selectedTheme);
    });
  $(".theme-selected")
    .children("img")
    .click(function () {
      $(".theme-select-option").toggleClass("show");
    });
});
