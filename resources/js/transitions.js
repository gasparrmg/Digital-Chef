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
////// START- initialization part for synchro VIDEO<-> IMAGE <-> TEST
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
          [263, 284]
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
          [277, 290]
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
          [188, 215]
      ]
  };


  videoControls(video, videoTimestamps);

  stepHighlight(video, videoTimestamps);

  stepClicks(video, videoTimestamps);

  ////// END- initialization part for synchro VIDEO<-> IMAGE <-> TEST


  console.log(window.video);
 

}

$(document).ready(function () {
  $(".select-recipe a").click(function(e) {
    e.preventDefault();

    if ($(".select-recipe").hasClass("select")) {
      console.log("SELECT");

      $(".select-recipe p").fadeOut(500, function() {
        $(".select-recipe p").text("GO BACK");
        $(".select-recipe p").fadeIn(500);
      });
  
      $(".start-button").fadeOut(500, function() {
        $(".dish-list.homepage").css("display", "flex").hide().fadeIn(1000);
      });
  
      $(".select-recipe").removeClass("select");
      $(".select-recipe").addClass("back");
    }

    else if ($(".select-recipe").hasClass("back")) {
      console.log("BACK");
      $(".select-recipe p").fadeOut(500, function() {
        $(".select-recipe p").text("Select a recipe");
        $(".select-recipe p").fadeIn(500);
      });
  
      $(".dish-list.homepage").fadeOut(500, function() {
        $(".start-button").fadeIn(1000);
      });
  
      $(".select-recipe").removeClass("back");
      $(".select-recipe").addClass("select");
    }
  });

  $(".start-button.homepage").click(function() {

    $(".start-button img").fadeOut(1000, function() {
      $(".start-button img").replaceWith("<h1>5</h1>");
      $(".start-button h1").css("display", "block");

      var counter = 5;
      var interval = setInterval(function() {
        counter--;

        if (counter < 0) {
          //go soup
          clearInterval(interval);
          window.video = "sopa";
          $(".select-recipe a").trigger("click").delay(500);

          setTimeout(function() {
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
