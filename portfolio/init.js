$(function () {
var menuItems = $("nav.ui.menu .item");
menuItems
.click(function (i) {
    var section = this.getAttribute("data-section");
    console.log("Data section = " + section);
    var offset = $("#" + section).offset();
    $("html, body").animate({
      scrollTop: offset.top,
    });
    $(this)
    .addClass("active")
    .closest(".ui.menu")
    .find(".item")
    .not($(this))
    .removeClass("active");
  });
var activate = function() {
  menuItems.filter(".active").removeClass("active");
  $('nav [data-section="' + this.id + '"]').addClass("active");
};
$("main section")
.visibility({
    observeChanges: false,
    once: false,
    offset: $(window).height() / 2,
    onTopPassed: activate,
    onBottomPassedReverse: activate
  });
});
$("#project1").click(function (e) {
    $("#project_frame").attr('src', 'project1.html');
    $(".ui.modal").modal("show");
});