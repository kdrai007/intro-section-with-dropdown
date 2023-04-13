$(function () {
  //handling features section in normal mode
  $(".Features").click(function () {
    // $(".all-feature").slideToggle();
    $(".all-feature").slideToggle(100);
    handleArrow(".feature-dropdown");
  });
  //handling company section in normal mode

  $(".company").click(function () {
    $(".all-company").slideToggle(100);
    handleArrow(".company-dropdown");
  });
  //handling nav bar in responsive mode
  $(".menu-btn").click(function () {
    $(".mobile-view").toggle(100);
    $("body").toggleClass("class2");
    let menuBtn = $(".menu-btn img");
    if (menuBtn.attr("src") == "./images/icon-close-menu.svg") {
      $(".menu-all-feature").hide();
      $(".menu-all-company").hide();
      menuBtn.attr("src", "./images/icon-menu.svg");
    } else menuBtn.attr("src", "./images/icon-close-menu.svg");
  });
  //handling feature section in mobile view
  $(".menu-feature").click(function () {
    $(".menu-all-feature").slideToggle(100);
    handleArrow(".menu-feature_icon");
  });
  $(".menu-company").click(function () {
    $(".menu-all-company").slideToggle(100);
    handleArrow(".menu-company_icon");
  });
});
function handleArrow(cls) {
  if ($(cls).attr("src") === "./images/icon-arrow-up.svg") {
    $(cls).attr("src", "./images/icon-arrow-down.svg");
  } else {
    $(cls).attr("src", "./images/icon-arrow-up.svg");
  }
}
