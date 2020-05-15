
function detectVideo(event, CURRENT) {
  
  if (
    event.target.id == "dish-card-sopa" ||
    event.target.id == "dish-card-sopa-img"
  ) {
    window.video = "sopa";
  } else if (
    event.target.id == "dish-card-vegan" ||
    event.target.id == "dish-card-vegan-img"
  ) {
    window.video = "vegan";
  } else if (
    event.target.id == "dish-card-meat" ||
    event.target.id == "dish-card-meat-img"
  ) {
    window.video = "meat";
  } else if (
    event.target.id == "dish-card-desert" ||
    event.target.id == "dish-card-desert-img"
  ) {
    window.video = "desert";
  }

  let video = $("#main-video").get(0);
  var videoTimestamps = {
      sopa: [
          [14, 36],
          [36, 49],
          [49, 76],
          [76, 98],
          [98, 124],
          [124, 143]
      ],
      vegan: [
          [14, 44],
          [44, 57],
          [57, 82],
          [82, 110],
          [110, 121],
          [121, 136],
          [136, 153],
          [153, 180],
          [180, 200],
          [200, 210],
          [210, 228],
          [228, 263],
          [263, 284 ]
      ]
  };


  videoControls(video, videoTimestamps);

  stepHighlight(video, videoTimestamps);

  stepClicks(video, videoTimestamps);

  console.log(window.video);
 

}

$(document).ready(function () {
  $(".dish-list.homepage .dish-card a").click(function (event) {
    detectVideo(event);
    //console.log(window.video);

    $(".cta-promo-video-btn").fadeOut(100);

    $(".dish-list.homepage .dish-card").css("margin", "0px");

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
          top: "-=300px",
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
        $("#images-soup").fadeOut(1000, function () {
          $("#text-soup").fadeIn(1000);
        });
        break;
      case "vegan":
          $("#images-vegan").fadeOut(1000, function () {
          $("#text-vegan").fadeIn(1000);
        });
        break;
      case "meat":
        $("#images-meat").fadeOut(1000, function(){
          $("#text-meat").fadeIn(1000);
      });
        
        break;

      case "desert":
        $("#images-desert").fadeOut(1000, function () {
          $("#text-desert").fadeIn(1000);

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
        $("#text-soup").fadeOut(1000, function () {
          $("#images-soup").fadeIn(1000);
        });
        break;
      case "vegan":
        $("#text-vegan").fadeOut(1000, function () {
          $("#images-vegan").fadeIn(1000);
        });
        break;
      case "meat":
        $("#text-meat").fadeOut(1000,function(){
          $("#images-meat").fadeIn(1000);
      });
        break;
      case "desert":
        $("#text-desert").fadeOut(1000, function () {
          $("#images-desert").fadeIn(1000);
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

    $("#btn-images").click()
  });
  //-------------------------------------------------------
});
