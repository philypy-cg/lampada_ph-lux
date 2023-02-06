$(document).ready(function () {
  $("#quadrado").on("click", function () {
    if ($("body").css("background-color") === "rgb(0, 0, 0)") {
      $("#quadrado").effect("bounce", { times: 4 }, 1000);
      $("body").css("background-color", "yellow");
      $(".circulo, .circulo2").css({
        "box-shadow": "0px 0px 64px white",
        "background-color": "white",
        border: "white",
      });
      $("head").append(
        "<style>.circulo::before, .circulo::after, .circulo2::before{background-color: white; border: 1px solid white;}</style>"
      );
    } else {
      $("#quadrado").effect("bounce", { times: 4 }, 1000);
      $("body").css("background-color", "black");
      $(".circulo, .circulo2")
        .css("box-shadow", "0px 0px 0px #C0C0C0")
        .css("background-color", "#C0C0C0")
        .css("border", "1px solid #C0C0C0");
      $("head").append(
        "<style>.circulo::before, .circulo::after, .circulo2::before{background-color: #C0C0C0; border: 1px solid #C0C0C0;}</style>"
      );
    }
  });
});
