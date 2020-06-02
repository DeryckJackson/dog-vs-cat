$(document).ready(function() {
  $("button.bark").click(function () {
    $("ul.catsays").prepend("<li>Meow!</li>");
  });
  $("button.meow").click(function () {
    $("ul.dogsays").prepend("<li>Bark!</li>");
  });
  $("button.stop").click(function () {
    $("button.stop").after("<img class=\"hammer\" src=\"img/hammertime.jpg\" alt=\"MC Hammer\">");
    $("img.hammer").click(function () {
      $(this).remove();
    });
  });
});