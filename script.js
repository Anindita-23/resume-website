$(document).ready(function () {
  $("a[href^='#']").click(function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top,
        },
        600
      );
    }
  });
});
$("a[href^='#']").click(function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top - 20,
    },
    500
  );
});
