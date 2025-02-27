function detectVideo(event, CURRENT) {
  if (
    event.target.id == "dish-card-sopa" ||
    event.target.id == "dish-card-sopa-img" || event.target.id == "soup-image" || event.target.id == "dish-title-sopa" || event.target.id == "dish-desc-sopa"
  ) {
    window.video = "sopa";

    $("#btn-text h2").animate(
      {
        color: "#000000",
        opacity: 0.5,
      },
      500
    );
    $("#btn-images h2").animate(
      {
        color: "#f7f7f7",
        opacity: 1,
      },
      500
    );

    $("#soup-image").css("opacity", "1");
    $("#soup-title").css("opacity", "1");
    $("#images-soup").css("display", "block");
    $("#text-soup").css("display", "none");

    $("#vegan-image").css("opacity", "0.5");
    $("#vegan-title").css("opacity", "0.5");
    $("#images-vegan").css("display", "none");
    $("#text-vegan").css("display", "none");

    $("#meat-image").css("opacity", "0.5");
    $("#meat-title").css("opacity", "0.5");
    $("#images-meat").css("display", "none");
    $("#text-meat").css("display", "none");

    $("#desert-image").css("opacity", "0.5");
    $("#desert-title").css("opacity", "0.5");
    $("#images-desert").css("display", "none");
    $("#text-desert").css("display", "none");
  } else if (
    event.target.id == "dish-card-vegan" ||
    event.target.id == "dish-card-vegan-img" || event.target.id == "vegan-image" || event.target.id == "dish-title-vegan" || event.target.id == "dish-desc-vegan"
  ) {
    window.video = "vegan";

    $("#btn-text h2").animate(
      {
        color: "#000000",
        opacity: 0.5,
      },
      500
    );
    $("#btn-images h2").animate(
      {
        color: "#f7f7f7",
        opacity: 1,
      },
      500
    );

    $("#vegan-image").css("opacity", "1");
    $("#vegan-title").css("opacity", "1");
    $("#images-vegan").css("display", "block");
    $("#text-vegan").css("display", "none");

    $("#soup-image").css("opacity", "0.5");
    $("#soup-title").css("opacity", "0.5");
    $("#images-soup").css("display", "none");
    $("#text-soup").css("display", "none");

    $("#meat-image").css("opacity", "0.5");
    $("#meat-title").css("opacity", "0.5");
    $("#images-meat").css("display", "none");
    $("#text-meat").css("display", "none");

    $("#desert-image").css("opacity", "0.5");
    $("#desert-title").css("opacity", "0.5");
    $("#images-desert").css("display", "none");
    $("#text-desert").css("display", "none");
  } else if (
    event.target.id == "dish-card-meat" ||
    event.target.id == "dish-card-meat-img" || event.target.id == "meat-image" || event.target.id == "dish-title-meat" || event.target.id == "dish-desc-meat"
  ) {
    window.video = "meat";

    $("#btn-text h2").animate(
      {
        color: "#000000",
        opacity: 0.5,
      },
      500
    );
    $("#btn-images h2").animate(
      {
        color: "#f7f7f7",
        opacity: 1,
      },
      500
    );

    $("#meat-image").css("opacity", "1");
    $("#meat-title").css("opacity", "1");
    $("#images-meat").css("display", "block");
    $("#text-meat").css("display", "none");

    $("#soup-image").css("opacity", "0.5");
    $("#soup-title").css("opacity", "0.5");
    $("#images-soup").css("display", "none");
    $("#text-soup").css("display", "none");

    $("#vegan-image").css("opacity", "0.5");
    $("#vegan-title").css("opacity", "0.5");
    $("#images-vegan").css("display", "none");
    $("#text-vegan").css("display", "none");

    $("#desert-image").css("opacity", "0.5");
    $("#desert-title").css("opacity", "0.5");
    $("#images-desert").css("display", "none");
    $("#text-desert").css("display", "none");
  } else if (
    event.target.id == "dish-card-desert" ||
    event.target.id == "dish-card-desert-img" || event.target.id == "desert-image" || event.target.id == "dish-title-desert" || event.target.id == "dish-desc-desert"
  ) {
    window.video = "desert";

    $("#btn-text h2").animate(
      {
        color: "#000000",
        opacity: 0.5,
      },
      500
    );
    $("#btn-images h2").animate(
      {
        color: "#f7f7f7",
        opacity: 1,
      },
      500
    );

    $("#desert-image").css("opacity", "1");
    $("#desert-title").css("opacity", "1");
    $("#images-desert").css("display", "block");
    $("#text-desert").css("display", "none");

    $("#soup-image").css("opacity", "0.5");
    $("#soup-title").css("opacity", "0.5");
    $("#images-soup").css("display", "none");
    $("#text-soup").css("display", "none");

    $("#vegan-image").css("opacity", "0.5");
    $("#vegan-title").css("opacity", "0.5");
    $("#images-vegan").css("display", "none");
    $("#text-vegan").css("display", "none");

    $("#meat-image").css("opacity", "0.5");
    $("#meat-title").css("opacity", "0.5");
    $("#images-meat").css("display", "none");
    $("#text-meat").css("display", "none");
  }
  ////// START- initialization part for synchro VIDEO<-> IMAGE <-> TEST
  let video = $("#main-video").get(0);
  var videoTimestamps = {
    sopa: [
      [14, 36],
      [36, 49],
      [49, 76],
      [76, 98],
      [98, 124],
      [124, 143],
    ],

    vegan: [
      [15, 45],
      [45, 58],
      [58, 82],
      [82, 110],
      [110, 121],
      [121, 136],
      [136, 164],
      [164, 180],
      [180, 200],
      [200, 210],
      [210, 228],
      [228, 263],
      [263, 284],
    ],

    meat: [
      [20, 52],
      [52, 87],
      [87, 100],
      [100, 120],
      [120, 139],
      [139, 159],
      [159, 172],
      [172, 187],
      [187, 209],
      [209, 236],
      [236, 251],
      [251, 277],
      [277, 290],
    ],

    desert: [
      [21, 47],
      [47, 69],
      [69, 88],
      [88, 126],
      [126, 139],
      [139, 148],
      [148, 181],
      [181, 188],
      [188, 215],
    ],
  };

  videoControls(video, videoTimestamps);

  stepHighlight(video, videoTimestamps);

  stepClicks(video, videoTimestamps);

  ////// END- initialization part for synchro VIDEO<-> IMAGE <-> TEST

  console.log(window.video);
}

$(document).ready(function () {
  $(".select-recipe button").click(function (e) {
    e.preventDefault();

    if ($(".select-recipe").hasClass("select")) {
      console.log("SELECT");

      $(".select-recipe span").fadeOut(500, function () {
        $(".select-recipe span").text("GO BACK");
        $(".select-recipe span").fadeIn(500);
      });

      $(".start-button").fadeOut(500, function () {
        $(".dish-list.homepage").css("display", "flex").hide().fadeIn(1000);
      });

      $(".select-recipe").removeClass("select");
      $(".select-recipe").addClass("back");
    } else if ($(".select-recipe").hasClass("back")) {
      console.log("BACK");
      $(".select-recipe span").fadeOut(500, function () {
        $(".select-recipe span").text("Select a recipe");
        $(".select-recipe span").fadeIn(500);
      });

      $(".dish-list.homepage").fadeOut(500, function () {
        $(".start-button").fadeIn(1000);
      });

      $(".select-recipe").removeClass("back");
      $(".select-recipe").addClass("select");
    }
  });

  $(".start-button.homepage").click(function () {
    $(".cta-promo-video-btn").fadeOut(1000, function () {
      $(".cta-promo-video-btn").css("display", "hidden");
    });

    $(".select-recipe").fadeOut(1000, function () {
      $(".select-recipe").css("display", "hidden");
    });

    $(".start-button img").fadeOut(1000, function () {
      $(".start-button img").replaceWith("<h1>5</h1>");
      $(".start-button h1").css("display", "block");

      var counter = 5;
      var interval = setInterval(function () {
        counter--;

        if (counter < 0) {
          //go soup
          clearInterval(interval);
          window.video = "sopa";
          $(".select-recipe a").trigger("click").delay(500);

          setTimeout(function () {
            $("#dish-card-sopa-img").trigger("click");
          }, 1500);
        } else {
          $(".start-button h1").text(counter);
          //console.log("Timer --> " + counter);
        }
      }, 1000);
    });
  });

  $(".dish-list.homepage .dish-card a").click(function (event) {
    detectVideo(event);
    //console.log(window.video);
    //console.log("sup");

    $(".cta-promo-video-btn").fadeOut(100);
    $(".select-recipe").fadeOut(100);

    $(".dish-list.homepage .dish-card").css("margin", "0px");

    $(".dish-list .dish-name").css("display", "none");

    $(".dish-list.homepage").animate(
      {
        margin: "20px 300px 0px 300px",
      },
      1000
    );

    $(".dish-card h2").animate(
      {
        "font-size": "1.25rem",
      },
      1000
    );

    $(".dish-card img").animate(
      {
        width: "60px",
      },
      1000
    );

    $(".dish-card").animate(
      {
        top: "+=300px",
      },
      { duration: 1000, queue: false }
    );

    // - TRANSITION FROM MAIN TO VIDEOPAGE ---------------
    $(".homepage-wrapper").fadeOut(1500, function () {
      //animation complete

      switch (window.video) {
        case "sopa":
          $("#main-video")
            .get(0)
            .setAttribute(
              "src",
              "./resources/video/Sopa de Legumes com Feijão Branco e Espinafres.mp4"
            );

          $("#listaingredientes")
            .get(0)
            .setAttribute("src", "./resources/img/receitas/receitasopa.gif");

          $("#dish-title").text(
            "Sopa de Legumes com Feijão Branco e Espinafres"
          );

          $(".videopage-wrapper").fadeIn(1500, function () {
            $("#images-soup").fadeIn(500);
            $("#main-video").get(0).play();

            $("#btn_play img").attr(
              "src",
              "./resources/img/video-controls/btn_pause.svg"
            );
          });

          break;

        case "vegan":
          $("#main-video")
            .get(0)
            .setAttribute(
              "src",
              "./resources/video/Almôndegas Crocantes de Feijão com Molho de Tomate e Pimento.mp4"
            );

          $("#listaingredientes")
            .get(0)
            .setAttribute("src", "./resources/img/receitas/receitavegan.gif");

          $("#dish-title").text(
            "Almôndegas Crocantes de Feijão com Molho de Tomate e Pimento"
          );

          $(".videopage-wrapper").fadeIn(1500, function () {
            $("#images-vegan").fadeIn(500);
            $("#main-video").get(0).play();

            $("#btn_play img").attr(
              "src",
              "./resources/img/video-controls/btn_pause.svg"
            );
          });

          break;
        case "meat":
          $("#main-video")
            .get(0)
            .setAttribute("src", "./resources/video/Strogonoff de Frango.mp4");

          $("#listaingredientes")
            .get(0)
            .setAttribute("src", "./resources/img/receitas/receitacarne.gif");

          $("#dish-title").text("Strogonoff de Frango");

          $(".videopage-wrapper").fadeIn(1500, function () {
            $("#images-meat").fadeIn(500);
            $("#main-video").get(0).play();

            $("#btn_play img").attr(
              "src",
              "./resources/img/video-controls/btn_pause.svg"
            );
          });

          break;
        case "desert":
          $("#main-video")
            .get(0)
            .setAttribute(
              "src",
              "./resources/video/Bolo Mousse de Chocolate.mp4"
            );

          $("#listaingredientes")
            .get(0)
            .setAttribute("src", "./resources/img/receitas/receitadesert.gif");

          $("#dish-title").text("Bolo Mousse de Chocolate");

          $(".videopage-wrapper").fadeIn(1500, function () {
            $("#images-desert").fadeIn(500);
            $("#main-video").get(0).play();

            $("#btn_play img").attr(
              "src",
              "./resources/img/video-controls/btn_pause.svg"
            );
          });

          break;
      }

      $(".dish-card").animate(
        {
          top: "0px",
        },
        1500
      );
    });
  });
  // ----------------------------------------------------

  // - SWITCH BETWEEN IMAGES OR TEXT ---------------------

  $("#btn-text").click(function (e) {
    e.preventDefault();

    switch (window.video) {
      case "sopa":
        $("#images-soup").fadeOut(300, function () {
          $("#text-soup").fadeIn(300);
        });
        break;
      case "vegan":
        $("#images-vegan").fadeOut(300, function () {
          $("#text-vegan").fadeIn(300);
        });
        break;
      case "meat":
        $("#images-meat").fadeOut(300, function () {
          $("#text-meat").fadeIn(300);
        });

        break;

      case "desert":
        $("#images-desert").fadeOut(300, function () {
          $("#text-desert").fadeIn(300);
        });

        break;
    }

    $("#btn-images h2").animate(
      {
        color: "#000000",
        opacity: 0.5,
      },
      500
    );
    $("#btn-text h2").animate(
      {
        color: "#f7f7f7",
        opacity: 1,
      },
      500
    );
  });

  $("#btn-images").click(function (e) {
    e.preventDefault();

    switch (window.video) {
      case "sopa":
        $("#text-soup").fadeOut(300, function () {
          $("#images-soup").fadeIn(300);
        });
        break;
      case "vegan":
        $("#text-vegan").fadeOut(300, function () {
          $("#images-vegan").fadeIn(300);
        });
        break;
      case "meat":
        $("#text-meat").fadeOut(300, function () {
          $("#images-meat").fadeIn(300);
        });
        break;
      case "desert":
        $("#text-desert").fadeOut(300, function () {
          $("#images-desert").fadeIn(300);
        });
        break;
    }

    $("#btn-text h2").animate(
      {
        color: "#000000",
        opacity: 0.5,
      },
      500
    );
    $("#btn-images h2").animate(
      {
        color: "#f7f7f7",
        opacity: 1,
      },
      500
    );

    // $("#btn-images").click();
  });
  //-------------------------------------------------------

  //Skip to next video-------------------------------------
  function nextVideo() {
    //Prevent fast clicks that can break animation
    if ($("#dish-title").css("opacity") == 1) {
      switch (window.video) {
        case "sopa":
          //Switch video section and title
          $("#dish-title")
            .animate({ opacity: 0 }, 1000, function () {
              $(this).text(
                "Almôndegas Crocantes de Feijão com Molho de Tomate e Pimento"
              );
            })
            .animate({ opacity: 1 }, 1000);

          $("#main-video")
            .get(0)
            .setAttribute(
              "src",
              "./resources/video/Almôndegas Crocantes de Feijão com Molho de Tomate e Pimento.mp4"
            );

          $("#listaingredientes")
            .get(0)
            .setAttribute("src", "./resources/img/receitas/receitavegan.gif");

          //Switch right side
          if ($("#images-soup").css("display") != "none") {
            $("#images-soup").fadeOut(500, function () {
              //$("#images-vegan").fadeIn(500);
              $("#main-video").get(0).play();
            });
          } else {
            $("#text-soup").fadeOut(500, function () {
              //$("#text-vegan").fadeIn(500);
              $("#main-video").get(0).play();
            });
          }

          window.video = "vegan";

          $("#btn-text h2").animate(
            {
              color: "#000000",
              opacity: 0.5,
            },
            500
          );
          $("#btn-images h2").animate(
            {
              color: "#f7f7f7",
              opacity: 1,
            },
            500
          );

          $("#vegan-image").css("opacity", "1");
          $("#vegan-title").css("opacity", "1");
          $("#images-vegan").css("display", "block");
          $("#text-vegan").css("display", "none");

          $("#soup-image").css("opacity", "0.5");
          $("#soup-title").css("opacity", "0.5");
          $("#images-soup").css("display", "none");
          $("#text-soup").css("display", "none");

          $("#meat-image").css("opacity", "0.5");
          $("#meat-title").css("opacity", "0.5");
          $("#images-meat").css("display", "none");
          $("#text-meat").css("display", "none");

          $("#desert-image").css("opacity", "0.5");
          $("#desert-title").css("opacity", "0.5");
          $("#images-desert").css("display", "none");
          $("#text-desert").css("display", "none");

          break;
        case "vegan":
          $("#dish-title")
            .animate({ opacity: 0 }, 1000, function () {
              $(this).text("Strogonoff de Frango");
            })
            .animate({ opacity: 1 }, 1000);

          $("#main-video")
            .get(0)
            .setAttribute("src", "./resources/video/Strogonoff de Frango.mp4");

          $("#listaingredientes")
            .get(0)
            .setAttribute("src", "./resources/img/receitas/receitacarne.gif");

          if ($("#images-vegan").css("display") != "none") {
            $("#images-vegan").fadeOut(500, function () {
              //$("#images-meat").fadeIn(500);
              $("#main-video").get(0).play();
            });
          } else {
            $("#text-vegan").fadeOut(500, function () {
              //$("#text-meat").fadeIn(500);
              $("#main-video").get(0).play();
            });
          }

          window.video = "meat";

          $("#btn-text h2").animate(
            {
              color: "#000000",
              opacity: 0.5,
            },
            500
          );
          $("#btn-images h2").animate(
            {
              color: "#f7f7f7",
              opacity: 1,
            },
            500
          );

          $("#meat-image").css("opacity", "1");
          $("#meat-title").css("opacity", "1");
          $("#images-meat").css("display", "block");
          $("#text-meat").css("display", "none");

          $("#soup-image").css("opacity", "0.5");
          $("#soup-title").css("opacity", "0.5");
          $("#images-soup").css("display", "none");
          $("#text-soup").css("display", "none");

          $("#vegan-image").css("opacity", "0.5");
          $("#vegan-title").css("opacity", "0.5");
          $("#images-vegan").css("display", "none");
          $("#text-vegan").css("display", "none");

          $("#desert-image").css("opacity", "0.5");
          $("#desert-title").css("opacity", "0.5");
          $("#images-desert").css("display", "none");
          $("#text-desert").css("display", "none");
          break;
        case "meat":
          $("#dish-title")
            .animate({ opacity: 0 }, 1000, function () {
              $(this).text("Bolo Mousse de Chocolate");
            })
            .animate({ opacity: 1 }, 1000);

          $("#listaingredientes")
            .get(0)
            .setAttribute("src", "./resources/img/receitas/receitadesert.gif");

          $("#main-video")
            .get(0)
            .setAttribute(
              "src",
              "./resources/video/Bolo Mousse de Chocolate.mp4"
            );

          if ($("#images-meat").css("display") != "none") {
            $("#images-meat").fadeOut(500, function () {
              //$("#images-desert").fadeIn(500);
              $("#main-video").get(0).play();
            });
          } else {
            $("#text-meat").fadeOut(500, function () {
              //$("#text-desert").fadeIn(1000);
              $("#main-video").get(0).play();
            });
          }

          window.video = "desert";

          $("#btn-text h2").animate(
            {
              color: "#000000",
              opacity: 0.5,
            },
            500
          );
          $("#btn-images h2").animate(
            {
              color: "#f7f7f7",
              opacity: 1,
            },
            500
          );

          $("#desert-image").css("opacity", "1");
          $("#desert-title").css("opacity", "1");
          $("#images-desert").css("display", "block");
          $("#text-desert").css("display", "none");

          $("#soup-image").css("opacity", "0.5");
          $("#soup-title").css("opacity", "0.5");
          $("#images-soup").css("display", "none");
          $("#text-soup").css("display", "none");

          $("#vegan-image").css("opacity", "0.5");
          $("#vegan-title").css("opacity", "0.5");
          $("#images-vegan").css("display", "none");
          $("#text-vegan").css("display", "none");

          $("#meat-image").css("opacity", "0.5");
          $("#meat-title").css("opacity", "0.5");
          $("#images-meat").css("display", "none");
          $("#text-meat").css("display", "none");
          break;

        case "desert":
          $("#dish-title")
            .animate({ opacity: 0 }, 1000, function () {
              $(this).text("Sopa de Legumes com Feijão Branco e Espinafres");
            })
            .animate({ opacity: 1 }, 1000);

          $("#listaingredientes")
            .get(0)
            .setAttribute("src", "./resources/img/receitas/receitasopa.gif");

          $("#main-video")
            .get(0)
            .setAttribute(
              "src",
              "./resources/video/Sopa de Legumes com Feijão Branco e Espinafres.mp4"
            );

          if ($("#images-desert").css("display") != "none") {
            $("#images-desert").fadeOut(500, function () {
              //$("#images-soup").fadeIn(500);
              $("#main-video").get(0).play();
            });
          } else {
            $("#text-desert").fadeOut(500, function () {
              //$("#text-soup").fadeIn(500);
              $("#main-video").get(0).play();
            });
          }

          window.video = "sopa";

          $("#btn-text h2").animate(
            {
              color: "#000000",
              opacity: 0.5,
            },
            500
          );
          $("#btn-images h2").animate(
            {
              color: "#f7f7f7",
              opacity: 1,
            },
            500
          );

          $("#soup-image").css("opacity", "1");
          $("#soup-title").css("opacity", "1");
          $("#images-soup").css("display", "block");
          $("#text-soup").css("display", "none");

          $("#vegan-image").css("opacity", "0.5");
          $("#vegan-title").css("opacity", "0.5");
          $("#images-vegan").css("display", "none");
          $("#text-vegan").css("display", "none");

          $("#meat-image").css("opacity", "0.5");
          $("#meat-title").css("opacity", "0.5");
          $("#images-meat").css("display", "none");
          $("#text-meat").css("display", "none");

          $("#desert-image").css("opacity", "0.5");
          $("#desert-title").css("opacity", "0.5");
          $("#images-desert").css("display", "none");
          $("#text-desert").css("display", "none");

          break;
      }

      //Update highlights, animations, etc
      $("#btn_play img").attr(
        "src",
        "./resources/img/video-controls/btn_pause.svg"
      );

      var video = $("#main-video").get(0);
      var videoTimestamps = {
        sopa: [
          [14, 36],
          [36, 49],
          [49, 76],
          [76, 98],
          [98, 124],
          [124, 143],
        ],

        vegan: [
          [15, 45],
          [45, 58],
          [58, 82],
          [82, 110],
          [110, 121],
          [121, 136],
          [136, 164],
          [164, 180],
          [180, 200],
          [200, 210],
          [210, 228],
          [228, 263],
          [263, 284],
        ],

        meat: [
          [20, 52],
          [52, 87],
          [87, 100],
          [100, 120],
          [120, 139],
          [139, 159],
          [159, 172],
          [172, 187],
          [187, 209],
          [209, 236],
          [236, 251],
          [251, 277],
          [277, 290],
        ],

        desert: [
          [21, 47],
          [47, 69],
          [69, 88],
          [88, 126],
          [126, 139],
          [139, 148],
          [148, 181],
          [181, 188],
          [188, 215],
        ],
      };

      videoControls(video, videoTimestamps);

      stepHighlight(video, videoTimestamps);

      stepClicks(video, videoTimestamps);
    }
  }

  $("#main-video").on("ended", function () {
    setTimeout(nextVideo, 3000);
  });

  $("#btn-next-recipe").on("click", nextVideo);

  function prevVideo() {
    //Prevent fast clicks that can break animation
    if ($("#dish-title").css("opacity") == 1) {
      switch (window.video) {
        case "sopa":
          //Switch video section and title
          $("#dish-title")
            .animate({ opacity: 0 }, 1000, function () {
              $(this).text("Bolo Mousse de Chocolate");
            })
            .animate({ opacity: 1 }, 1000);

          $("#listaingredientes")
            .get(0)
            .setAttribute("src", "./resources/img/receitas/receitadesert.gif");

          $("#main-video")
            .get(0)
            .setAttribute(
              "src",
              "./resources/video/Bolo Mousse de Chocolate.mp4"
            );

          //Switch right side
          if ($("#images-soup").css("display") != "none") {
            $("#images-soup").fadeOut(500, function () {
              $("#images-desert").fadeIn(500);
              $("#main-video").get(0).play();
            });
          } else {
            $("#text-soup").fadeOut(500, function () {
              //$("#text-desert").fadeIn(1000);
              $("#main-video").get(0).play();
            });
          }

          window.video = "desert";

          $("#btn-text h2").animate(
            {
              color: "#000000",
              opacity: 0.5,
            },
            500
          );
          $("#btn-images h2").animate(
            {
              color: "#f7f7f7",
              opacity: 1,
            },
            500
          );

          $("#desert-image").css("opacity", "1");
          $("#desert-title").css("opacity", "1");
          $("#images-desert").css("display", "block");
          $("#text-desert").css("display", "none");

          $("#soup-image").css("opacity", "0.5");
          $("#soup-title").css("opacity", "0.5");
          $("#images-soup").css("display", "none");
          $("#text-soup").css("display", "none");

          $("#vegan-image").css("opacity", "0.5");
          $("#vegan-title").css("opacity", "0.5");
          $("#images-vegan").css("display", "none");
          $("#text-vegan").css("display", "none");

          $("#meat-image").css("opacity", "0.5");
          $("#meat-title").css("opacity", "0.5");
          $("#images-meat").css("display", "none");
          $("#text-meat").css("display", "none");

          break;

        case "vegan":
          $("#dish-title")
            .animate({ opacity: 0 }, 1000, function () {
              $(this).text("Sopa de Legumes com Feijão Branco e Espinafres");
            })
            .animate({ opacity: 1 }, 1000);

          $("#listaingredientes")
            .get(0)
            .setAttribute("src", "./resources/img/receitas/receitasopa.gif");

          $("#main-video")
            .get(0)
            .setAttribute(
              "src",
              "./resources/video/Sopa de Legumes com Feijão Branco e Espinafres.mp4"
            );

          if ($("#images-vegan").css("display") != "none") {
            $("#images-vegan").fadeOut(500, function () {
              //$("#images-soup").fadeIn(1000);
              $("#main-video").get(0).play();
            });
          } else {
            $("#text-vegan").fadeOut(500, function () {
              $("#text-soup").fadeIn(500);
              $("#main-video").get(0).play();
            });
          }

          window.video = "sopa";

          $("#btn-text h2").animate(
            {
              color: "#000000",
              opacity: 0.5,
            },
            500
          );
          $("#btn-images h2").animate(
            {
              color: "#f7f7f7",
              opacity: 1,
            },
            500
          );

          $("#soup-image").css("opacity", "1");
          $("#soup-title").css("opacity", "1");
          $("#images-soup").css("display", "block");
          $("#text-soup").css("display", "none");

          $("#vegan-image").css("opacity", "0.5");
          $("#vegan-title").css("opacity", "0.5");
          $("#images-vegan").css("display", "none");
          $("#text-vegan").css("display", "none");

          $("#meat-image").css("opacity", "0.5");
          $("#meat-title").css("opacity", "0.5");
          $("#images-meat").css("display", "none");
          $("#text-meat").css("display", "none");

          $("#desert-image").css("opacity", "0.5");
          $("#desert-title").css("opacity", "0.5");
          $("#images-desert").css("display", "none");
          $("#text-desert").css("display", "none");

          break;
        case "meat":
          $("#dish-title")
            .animate({ opacity: 0 }, 1000, function () {
              $(this).text(
                "Almôndegas Crocantes de Feijão com Molho de Tomate e Pimento"
              );
            })
            .animate({ opacity: 1 }, 1000);

          $("#main-video")
            .get(0)
            .setAttribute(
              "src",
              "./resources/video/Almôndegas Crocantes de Feijão com Molho de Tomate e Pimento.mp4"
            );

          $("#listaingredientes")
            .get(0)
            .setAttribute("src", "./resources/img/receitas/receitavegan.gif");

          if ($("#images-meat").css("display") != "none") {
            $("#images-meat").fadeOut(500, function () {
              $("#images-vegan").fadeIn(500);
              $("#main-video").get(0).play();
            });
          } else {
            $("#text-meat").fadeOut(500, function () {
              //$("#text-vegan").fadeIn(1000);
              $("#main-video").get(0).play();
            });
          }

          window.video = "vegan";

          $("#btn-text h2").animate(
            {
              color: "#000000",
              opacity: 0.5,
            },
            500
          );
          $("#btn-images h2").animate(
            {
              color: "#f7f7f7",
              opacity: 1,
            },
            500
          );

          $("#vegan-image").css("opacity", "1");
          $("#vegan-title").css("opacity", "1");
          $("#images-vegan").css("display", "block");
          $("#text-vegan").css("display", "none");

          $("#soup-image").css("opacity", "0.5");
          $("#soup-title").css("opacity", "0.5");
          $("#images-soup").css("display", "none");
          $("#text-soup").css("display", "none");

          $("#meat-image").css("opacity", "0.5");
          $("#meat-title").css("opacity", "0.5");
          $("#images-meat").css("display", "none");
          $("#text-meat").css("display", "none");

          $("#desert-image").css("opacity", "0.5");
          $("#desert-title").css("opacity", "0.5");
          $("#images-desert").css("display", "none");
          $("#text-desert").css("display", "none");

          break;

        case "desert":
          $("#dish-title")
            .animate({ opacity: 0 }, 1000, function () {
              $(this).text("Strogonoff de Frango");
            })
            .animate({ opacity: 1 }, 1000);

          $("#main-video")
            .get(0)
            .setAttribute("src", "./resources/video/Strogonoff de Frango.mp4");

          $("#listaingredientes")
            .get(0)
            .setAttribute("src", "./resources/img/receitas/receitacarne.gif");

          if ($("#images-desert").css("display") != "none") {
            $("#images-desert").fadeOut(500, function () {
              $("#images-meat").fadeIn(500);
              $("#main-video").get(0).play();
            });
          } else {
            $("#text-desert").fadeOut(500, function () {
              $("#text-meat").fadeIn(500);
              $("#main-video").get(0).play();
            });
          }

          window.video = "meat";

          $("#btn-text h2").animate(
            {
              color: "#000000",
              opacity: 0.5,
            },
            500
          );
          $("#btn-images h2").animate(
            {
              color: "#f7f7f7",
              opacity: 1,
            },
            500
          );

          $("#meat-image").css("opacity", "1");
          $("#meat-title").css("opacity", "1");
          $("#images-meat").css("display", "block");
          $("#text-meat").css("display", "none");

          $("#soup-image").css("opacity", "0.5");
          $("#soup-title").css("opacity", "0.5");
          $("#images-soup").css("display", "none");
          $("#text-soup").css("display", "none");

          $("#vegan-image").css("opacity", "0.5");
          $("#vegan-title").css("opacity", "0.5");
          $("#images-vegan").css("display", "none");
          $("#text-vegan").css("display", "none");

          $("#desert-image").css("opacity", "0.5");
          $("#desert-title").css("opacity", "0.5");
          $("#images-desert").css("display", "none");
          $("#text-desert").css("display", "none");
          break;
      }

      //Update highlights, animations, etc
      $("#btn_play img").attr(
        "src",
        "./resources/img/video-controls/btn_pause.svg"
      );

      var video = $("#main-video").get(0);
      var videoTimestamps = {
        sopa: [
          [14, 36],
          [36, 49],
          [49, 76],
          [76, 98],
          [98, 124],
          [124, 143],
        ],

        vegan: [
          [15, 45],
          [45, 58],
          [58, 82],
          [82, 110],
          [110, 121],
          [121, 136],
          [136, 164],
          [164, 180],
          [180, 200],
          [200, 210],
          [210, 228],
          [228, 263],
          [263, 284],
        ],

        meat: [
          [20, 52],
          [52, 87],
          [87, 100],
          [100, 120],
          [120, 139],
          [139, 159],
          [159, 172],
          [172, 187],
          [187, 209],
          [209, 236],
          [236, 251],
          [251, 277],
          [277, 290],
        ],

        desert: [
          [21, 47],
          [47, 69],
          [69, 88],
          [88, 126],
          [126, 139],
          [139, 148],
          [148, 181],
          [181, 188],
          [188, 215],
        ],
      };

      videoControls(video, videoTimestamps);

      stepHighlight(video, videoTimestamps);

      stepClicks(video, videoTimestamps);
    }
  }

  $("#btn-prev-recipe").on("click", prevVideo);

  $(".dish-list.videopage .dish-card a").click((event) => {
    if (event.target.id == "soup-title" || event.target.id == "soup-image") {
      $("#btn-text h2").animate(
        {
          color: "#000000",
          opacity: 0.5,
        },
        500
      );
      $("#btn-images h2").animate(
        {
          color: "#f7f7f7",
          opacity: 1,
        },
        500
      );

      $("#soup-image").css("opacity", "1");
      $("#soup-title").css("opacity", "1");
      $("#images-soup").css("display", "block");
      $("#text-soup").css("display", "none");

      $("#vegan-image").css("opacity", "0.5");
      $("#vegan-title").css("opacity", "0.5");
      $("#images-vegan").css("display", "none");
      $("#text-vegan").css("display", "none");

      $("#meat-image").css("opacity", "0.5");
      $("#meat-title").css("opacity", "0.5");
      $("#images-meat").css("display", "none");
      $("#text-meat").css("display", "none");

      $("#desert-image").css("opacity", "0.5");
      $("#desert-title").css("opacity", "0.5");
      $("#images-desert").css("display", "none");
      $("#text-desert").css("display", "none");

      $("#dish-title")
        .animate({ opacity: 0 }, 1000, function () {
          $(this).text("Sopa de Legumes com Feijão Branco e Espinafres ");
        })
        .animate({ opacity: 1 }, 1000);

      $("#listaingredientes")
        .get(0)
        .setAttribute("src", "./resources/img/receitas/receitasopa.gif");

      $("#main-video")
        .get(0)
        .setAttribute(
          "src",
          "./resources/video/Sopa de Legumes com Feijão Branco e Espinafres.mp4"
        );

      //Switch right side
      if ($("#images-soup").css("display") != "none") {
        /*
        $("#images-soup").fadeOut(1000, function () {
          $("#images-soup").fadeIn(1000);*/
        $("#main-video").get(0).play();
        /*});
      } else {
        $("#text-soup").fadeOut(1000, function () {
          $("#text-soup").fadeIn(1000);
          $("#main-video").get(0).play();
        });
      */
      }

      window.video = "sopa";
      detectVideo(event);
    } else if (
      event.target.id == "vegan-title" ||
      event.target.id == "vegan-image"
    ) {
      $("#btn-text h2").animate(
        {
          color: "#000000",
          opacity: 0.5,
        },
        500
      );
      $("#btn-images h2").animate(
        {
          color: "#f7f7f7",
          opacity: 1,
        },
        500
      );

      $("#vegan-image").css("opacity", "1");
      $("#vegan-title").css("opacity", "1");
      $("#images-vegan").css("display", "block");
      $("#text-vegan").css("display", "none");

      $("#soup-image").css("opacity", "0.5");
      $("#soup-title").css("opacity", "0.5");
      $("#images-soup").css("display", "none");
      $("#text-soup").css("display", "none");

      $("#meat-image").css("opacity", "0.5");
      $("#meat-title").css("opacity", "0.5");
      $("#images-meat").css("display", "none");
      $("#text-meat").css("display", "none");

      $("#desert-image").css("opacity", "0.5");
      $("#desert-title").css("opacity", "0.5");
      $("#images-desert").css("display", "none");
      $("#text-desert").css("display", "none");
      $("#dish-title")
        .animate({ opacity: 0 }, 1000, function () {
          $(this).text(
            "Almôndegas Crocantes de Feijão com Molho de Tomate e Pimento "
          );
        })
        .animate({ opacity: 1 }, 1000);

      $("#listaingredientes")
        .get(0)
        .setAttribute("src", "./resources/img/receitas/receitavegan.gif");

      $("#main-video")
        .get(0)
        .setAttribute(
          "src",
          "./resources/video/Almôndegas Crocantes de Feijão com Molho de Tomate e Pimento.mp4"
        );

      //Switch right side
      if ($("#images-soup").css("display") != "none") {
        $("#images-soup").fadeOut(500, function () {
          $("#images-vegan").fadeIn(500);
          $("#main-video").get(0).play();
        });
      } else {
        $("#text-soup").fadeOut(500, function () {
          $("#images-vegan").fadeIn(500);
          $("#main-video").get(0).play();
        });
      }

      window.video = "vegan";
      detectVideo(event);
    } else if (
      event.target.id == "meat-title" ||
      event.target.id == "meat-image"
    ) {
      $("#btn-text h2").animate(
        {
          color: "#000000",
          opacity: 0.5,
        },
        500
      );
      $("#btn-images h2").animate(
        {
          color: "#f7f7f7",
          opacity: 1,
        },
        500
      );

      $("#meat-image").css("opacity", "1");
      $("#meat-title").css("opacity", "1");
      $("#images-meat").css("display", "block");
      $("#text-meat").css("display", "none");

      $("#soup-image").css("opacity", "0.5");
      $("#soup-title").css("opacity", "0.5");
      $("#images-soup").css("display", "none");
      $("#text-soup").css("display", "none");

      $("#vegan-image").css("opacity", "0.5");
      $("#vegan-title").css("opacity", "0.5");
      $("#images-vegan").css("display", "none");
      $("#text-vegan").css("display", "none");

      $("#desert-image").css("opacity", "0.5");
      $("#desert-title").css("opacity", "0.5");
      $("#images-desert").css("display", "none");
      $("#text-desert").css("display", "none");

      $("#dish-title")
        .animate({ opacity: 0 }, 1000, function () {
          $(this).text("Strogonoff de Frango ");
        })
        .animate({ opacity: 1 }, 1000);

      $("#listaingredientes")
        .get(0)
        .setAttribute("src", "./resources/img/receitas/receitacarne.gif");

      $("#main-video")
        .get(0)
        .setAttribute("src", "./resources/video/Strogonoff de Frango.mp4");

      //Switch right side
      if ($("#images-soup").css("display") != "none") {
        $("#images-soup").fadeOut(500, function () {
          $("#images-carne").fadeIn(500);
          $("#main-video").get(0).play();
        });
      } else {
        $("#text-soup").fadeOut(500, function () {
          $("#text-carne").fadeIn(500);
          $("#main-video").get(0).play();
        });
      }

      window.video = "meat";
      detectVideo(event);
    } else if (
      event.target.id == "desert-title" ||
      event.target.id == "desert-image"
    ) {
      $("#btn-text h2").animate(
        {
          color: "#000000",
          opacity: 0.5,
        },
        500
      );
      $("#btn-images h2").animate(
        {
          color: "#f7f7f7",
          opacity: 1,
        },
        500
      );

      $("#desert-image").css("opacity", "1");
      $("#desert-title").css("opacity", "1");
      $("#images-desert").css("display", "block");
      $("#text-desert").css("display", "none");

      $("#soup-image").css("opacity", "0.5");
      $("#soup-title").css("opacity", "0.5");
      $("#images-soup").css("display", "none");
      $("#text-soup").css("display", "none");

      $("#vegan-image").css("opacity", "0.5");
      $("#vegan-title").css("opacity", "0.5");
      $("#images-vegan").css("display", "none");
      $("#text-vegan").css("display", "none");

      $("#meat-image").css("opacity", "0.5");
      $("#meat-title").css("opacity", "0.5");
      $("#images-meat").css("display", "none");
      $("#text-meat").css("display", "none");

      $("#dish-title")
        .animate({ opacity: 0 }, 1000, function () {
          $(this).text("Bolo Mousse de Chocolate ");
        })
        .animate({ opacity: 1 }, 1000);

      $("#listaingredientes")
        .get(0)
        .setAttribute("src", "./resources/img/receitas/receitadesert.gif");

      $("#main-video")
        .get(0)
        .setAttribute("src", "./resources/video/Bolo Mousse de Chocolate.mp4");

      //Switch right side
      if ($("#images-soup").css("display") != "none") {
        $("#images-soup").fadeOut(500, function () {
          $("#images-desert").fadeIn(500);
          $("#main-video").get(0).play();
        });
      } else {
        $("#text-soup").fadeOut(500, function () {
          //$("#text-desert").fadeIn(1000);
          $("#main-video").get(0).play();
        });
      }

      window.video = "desert";
      detectVideo(event);
    }

    //Update highlights, animations, etc
    $("#btn_play img").attr(
      "src",
      "./resources/img/video-controls/btn_pause.svg"
    );

    var video = $("#main-video").get(0);
    var videoTimestamps = {
      sopa: [
        [14, 36],
        [36, 49],
        [49, 76],
        [76, 98],
        [98, 124],
        [124, 143],
      ],

      vegan: [
        [15, 45],
        [45, 58],
        [58, 82],
        [82, 110],
        [110, 121],
        [121, 136],
        [136, 164],
        [164, 180],
        [180, 200],
        [200, 210],
        [210, 228],
        [228, 263],
        [263, 284],
      ],

      meat: [
        [20, 52],
        [52, 87],
        [87, 100],
        [100, 120],
        [120, 139],
        [139, 159],
        [159, 172],
        [172, 187],
        [187, 209],
        [209, 236],
        [236, 251],
        [251, 277],
        [277, 290],
      ],

      desert: [
        [21, 47],
        [47, 69],
        [69, 88],
        [88, 126],
        [126, 139],
        [139, 148],
        [148, 181],
        [181, 188],
        [188, 215],
      ],
    };

    videoControls(video, videoTimestamps);

    stepHighlight(video, videoTimestamps);

    stepClicks(video, videoTimestamps);
  });
});
