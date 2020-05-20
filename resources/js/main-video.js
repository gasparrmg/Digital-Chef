$(document).ready(function () {});

function stepClicks(video, timeStamps) {
  //TODO (QUANDO METERMOS OUTROS VIDS): verficar primeiro qual current vid
  //console.log(window.video);
  if (window.video == "sopa") {
    console.log("FIRST IF " + window.video);

    $(".img-step.ingredients, .txt-step.ingredients").click(function () {
      video.currentTime = timeStamps.sopa[0][0];
    });
    $(".img-step.two, .txt-step.two").click(function () {
      video.currentTime = timeStamps.sopa[1][0];
    });
    $(".img-step.three, .txt-step.three").click(function () {
      video.currentTime = timeStamps.sopa[2][0];
    });
    $(".img-step.four, .txt-step.four").click(function () {
      video.currentTime = timeStamps.sopa[3][0];
    });
    $(".img-step.five, .txt-step.five").click(function () {
      video.currentTime = timeStamps.sopa[4][0];
    });
    $(".img-step.six, .txt-step.six").click(function () {
      video.currentTime = timeStamps.sopa[5][0];
    });
  } else if (window.video == "vegan") {
    console.log("FIRST IF " + window.video);

    $(".img-step.ingredients, .txt-step.ingredients").click(function () {
      video.currentTime = timeStamps.vegan[0][0];
    });
    $(".img-step.two, .txt-step.two").click(function () {
      video.currentTime = timeStamps.vegan[1][0];
    });
    $(".img-step.three, .txt-step.three").click(function () {
      video.currentTime = timeStamps.vegan[2][0];
    });
    $(".img-step.four, .txt-step.four").click(function () {
      video.currentTime = timeStamps.vegan[3][0];
    });
    $(".img-step.five, .txt-step.five").click(function () {
      video.currentTime = timeStamps.vegan[4][0];
    });
    $(".img-step.six, .txt-step.six").click(function () {
      video.currentTime = timeStamps.vegan[5][0];
    });
    $(".img-step.seven, .txt-step.seven").click(function () {
      video.currentTime = timeStamps.vegan[6][0];
    });
    $(".img-step.eight, .txt-step.eight").click(function () {
      video.currentTime = timeStamps.vegan[7][0];
    });
    $(".img-step.nine, .txt-step.nine").click(function () {
      video.currentTime = timeStamps.vegan[8][0];
    });
    $(".img-step.ten, .txt-step.ten").click(function () {
      video.currentTime = timeStamps.vegan[9][0];
    });
    $(".img-step.eleven, .txt-step.eleven").click(function () {
      video.currentTime = timeStamps.vegan[10][0];
    });
    $(".img-step.twelve, .txt-step.twelve").click(function () {
      video.currentTime = timeStamps.vegan[11][0];
    });
    $(".img-step.thirteen, .txt-step.thirteen").click(function () {
      video.currentTime = timeStamps.vegan[12][0];
    });
  } else if (window.video == "meat") {
    console.log("FIRST IF " + window.video);

    $(".img-step.ingredients, .txt-step.ingredients").click(function () {
      video.currentTime = timeStamps.meat[0][0];
    });
    $(".img-step.two, .txt-step.two").click(function () {
      video.currentTime = timeStamps.meat[1][0];
    });
    $(".img-step.three, .txt-step.three").click(function () {
      video.currentTime = timeStamps.meat[2][0];
    });
    $(".img-step.four, .txt-step.four").click(function () {
      video.currentTime = timeStamps.meat[3][0];
    });
    $(".img-step.five, .txt-step.five").click(function () {
      video.currentTime = timeStamps.meat[4][0];
    });
    $(".img-step.six, .txt-step.six").click(function () {
      video.currentTime = timeStamps.meat[5][0];
    });
    $(".img-step.seven, .txt-step.seven").click(function () {
      video.currentTime = timeStamps.meat[6][0];
    });
    $(".img-step.eight, .txt-step.eight").click(function () {
      video.currentTime = timeStamps.meat[7][0];
    });
    $(".img-step.nine, .txt-step.nine").click(function () {
      video.currentTime = timeStamps.meat[8][0];
    });
    $(".img-step.ten, .txt-step.ten").click(function () {
      video.currentTime = timeStamps.meat[9][0];
    });
    $(".img-step.eleven, .txt-step.eleven").click(function () {
      video.currentTime = timeStamps.meat[10][0];
    });
    $(".img-step.twelve, .txt-step.twelve").click(function () {
      video.currentTime = timeStamps.meat[11][0];
    });
    $(".img-step.thirteen, .txt-step.thirteen").click(function () {
      video.currentTime = timeStamps.meat[12][0];
    });
  } else if (window.video == "desert") {
    console.log("FIRST IF " + window.video);

    $(".img-step.ingredients, .txt-step.ingredients").click(function () {
      video.currentTime = timeStamps.desert[0][0];
    });
    $(".img-step.two, .txt-step.two").click(function () {
      video.currentTime = timeStamps.desert[1][0];
    });
    $(".img-step.three, .txt-step.three").click(function () {
      video.currentTime = timeStamps.desert[2][0];
    });
    $(".img-step.four, .txt-step.four").click(function () {
      video.currentTime = timeStamps.desert[3][0];
    });
    $(".img-step.five, .txt-step.five").click(function () {
      video.currentTime = timeStamps.desert[4][0];
    });
    $(".img-step.six, .txt-step.six").click(function () {
      video.currentTime = timeStamps.desert[5][0];
    });
    $(".img-step.seven, .txt-step.seven").click(function () {
      video.currentTime = timeStamps.desert[6][0];
    });
    $(".img-step.eight, .txt-step.eight").click(function () {
      video.currentTime = timeStamps.desert[7][0];
    });
    $(".img-step.nine, .txt-step.nine").click(function () {
      video.currentTime = timeStamps.desert[8][0];
    });
  }
}

function videoControls(video, videoTimestamps) {
  //PLAY PAUSE
  $("#btn_play").on("click", function () {
    if (video.paused) {
      video.play();
      $("#btn_play img").attr(
        "src",
        "./resources/img/video-controls/btn_pause.svg"
      );
    } else {
      video.pause();
      $("#btn_play img").attr(
        "src",
        "./resources/img/video-controls/btn_play.svg"
      );
    }
  });

  //NEXT STEP
  $("#btn-next-step").click(function () {
    //TODO: CHECK CURRENT RECIPE

    //IF SOPA

    if (window.video == "sopa") {
      console.log("SECOND IF " + window.video);

      for (var i = 0; i < videoTimestamps.sopa.length - 1; i++) {
        if (
          video.currentTime >= videoTimestamps.sopa[i][0] &&
          video.currentTime < videoTimestamps.sopa[i][1]
        ) {
          video.currentTime = videoTimestamps.sopa[i + 1][0];
          break;
        }
      }
    } else if (window.video == "vegan") {
      console.log("SECOND IF " + window.video);

      for (var i = 0; i < videoTimestamps.vegan.length - 1; i++) {
        if (
          video.currentTime >= videoTimestamps.vegan[i][0] &&
          video.currentTime < videoTimestamps.vegan[i][1]
        ) {
          video.currentTime = videoTimestamps.vegan[i + 1][0];
          break;
        }
      }
    } else if (window.video == "meat") {
      console.log("SECOND IF " + window.video);

      for (var i = 0; i < videoTimestamps.meat.length - 1; i++) {
        if (
          video.currentTime >= videoTimestamps.meat[i][0] &&
          video.currentTime < videoTimestamps.meat[i][1]
        ) {
          video.currentTime = videoTimestamps.meat[i + 1][0];
          break;
        }
      }
    } else if (window.video == "desert") {
      console.log("SECOND IF " + window.video);

      for (var i = 0; i < videoTimestamps.desert.length - 1; i++) {
        if (
          video.currentTime >= videoTimestamps.desert[i][0] &&
          video.currentTime < videoTimestamps.desert[i][1]
        ) {
          video.currentTime = videoTimestamps.desert[i + 1][0];
          break;
        }
      }
    }
  });

  //PREV STEP
  $("#btn-prev-step").click(function () {
    //TODO: CHECK CURRENT RECIPE

    //IF SOPA

    if (window.video == "sopa") {
      console.log("THIRD IF " + window.video);

      for (var i = 1; i < videoTimestamps.sopa.length; i++) {
        if (
          video.currentTime >= videoTimestamps.sopa[i][0] &&
          video.currentTime < videoTimestamps.sopa[i][1]
        ) {
          video.currentTime = videoTimestamps.sopa[i - 1][0];
          break;
        }
      }
    } else if (window.video == "vegan") {
      console.log("THIRD IF " + window.video);

      for (var i = 1; i < videoTimestamps.vegan.length; i++) {
        if (
          video.currentTime >= videoTimestamps.vegan[i][0] &&
          video.currentTime < videoTimestamps.vegan[i][1]
        ) {
          video.currentTime = videoTimestamps.vegan[i - 1][0];
          break;
        }
      }
    } else if (window.video == "meat") {
      console.log("THIRD IF " + window.video);

      for (var i = 1; i < videoTimestamps.meat.length; i++) {
        if (
          video.currentTime >= videoTimestamps.meat[i][0] &&
          video.currentTime < videoTimestamps.meat[i][1]
        ) {
          video.currentTime = videoTimestamps.meat[i - 1][0];
          break;
        }
      }
    } else if (window.video == "desert") {
      console.log("THIRD IF " + window.video);

      for (var i = 1; i < videoTimestamps.desert.length; i++) {
        if (
          video.currentTime >= videoTimestamps.desert[i][0] &&
          video.currentTime < videoTimestamps.desert[i][1]
        ) {
          video.currentTime = videoTimestamps.desert[i - 1][0];
          break;
        }
      }
    }
  });

  //TODO: NEXT RECIPE

  //TODO: PREV RECIPE
}

function stepHighlight(video, videoTimestamps) {
  $("#main-video").on("timeupdate", function () {
    //TODO (QUANDO METERMOS OUTROS VIDS): verficar primeiro qual current vid

    if (window.video == "sopa") {
      console.log("FOURTH IF " + window.video);

      if (
        video.currentTime >= videoTimestamps.sopa[0][0] &&
        video.currentTime < videoTimestamps.sopa[0][1]
      ) {
        $(".ingredients-bubble").fadeIn(500);
        $(".img-step.ingredients, .txt-step.ingredients").css("opacity", "1");
      } else {
        $(".ingredients-bubble").fadeOut(500);
        $(".img-step.ingredients, .txt-step.ingredients").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.sopa[1][0] &&
        video.currentTime < videoTimestamps.sopa[1][1]
      ) {
        $(".img-step.two, .txt-step.two").css("opacity", "1");
      } else {
        $(".img-step.two, .txt-step.two").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.sopa[2][0] &&
        video.currentTime < videoTimestamps.sopa[2][1]
      ) {
        $(".img-step.three, .txt-step.three").css("opacity", "1");
      } else {
        $(".img-step.three, .txt-step.three").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.sopa[3][0] &&
        video.currentTime < videoTimestamps.sopa[3][1]
      ) {
        $(".img-step.four, .txt-step.four").css("opacity", "1");
      } else {
        $(".img-step.four, .txt-step.four").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.sopa[4][0] &&
        video.currentTime < videoTimestamps.sopa[4][1]
      ) {
        $(".img-step.five, .txt-step.five").css("opacity", "1");
        $("#image-gallery-wrapper").animate({ scrollTop: "300px" });
      } else {
        $(".img-step.five, .txt-step.five").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.sopa[5][0] &&
        video.currentTime < videoTimestamps.sopa[5][1]
      ) {
        $(".img-step.six, .txt-step.six").css("opacity", "1");
      } else {
        $(".img-step.six, .txt-step.six").css("opacity", "0.3");
      }
    } else if (window.video == "vegan") {
      console.log("FOURTH IF " + window.video);

      if (
        video.currentTime >= videoTimestamps.vegan[0][0] &&
        video.currentTime < videoTimestamps.vegan[0][1]
      ) {
        $(".ingredients-bubble").fadeIn(500);
        $(".img-step.ingredients, .txt-step.ingredients").css("opacity", "1");
      } else {
        $(".ingredients-bubble").fadeOut(500);
        $(".img-step.ingredients, .txt-step.ingredients").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.vegan[1][0] &&
        video.currentTime < videoTimestamps.vegan[1][1]
      ) {
        $(".img-step.two, .txt-step.two").css("opacity", "1");
      } else {
        $(".img-step.two, .txt-step.two").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.vegan[2][0] &&
        video.currentTime < videoTimestamps.vegan[2][1]
      ) {
        $(".img-step.three, .txt-step.three").css("opacity", "1");
      } else {
        $(".img-step.three, .txt-step.three").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.vegan[3][0] &&
        video.currentTime < videoTimestamps.vegan[3][1]
      ) {
        $(".img-step.four, .txt-step.four").css("opacity", "1");
      } else {
        $(".img-step.four, .txt-step.four").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.vegan[4][0] &&
        video.currentTime < videoTimestamps.vegan[4][1]
      ) {
        $(".img-step.five, .txt-step.five").css("opacity", "1");
        $("#image-gallery-wrapper").animate({ scrollTop: "300px" });
      } else {
        $(".img-step.five, .txt-step.five").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.vegan[5][0] &&
        video.currentTime < videoTimestamps.vegan[5][1]
      ) {
        $(".img-step.six, .txt-step.six").css("opacity", "1");
      } else {
        $(".img-step.six, .txt-step.six").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.vegan[6][0] &&
        video.currentTime < videoTimestamps.vegan[6][1]
      ) {
        $(".img-step.seven, .txt-step.seven").css("opacity", "1");
        $("#image-gallery-wrapper").animate({ scrollTop: "300px" });
      } else {
        $(".img-step.seven, .txt-step.seven").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.vegan[7][0] &&
        video.currentTime < videoTimestamps.vegan[7][1]
      ) {
        $(".img-step.eight, .txt-step.eight").css("opacity", "1");
      } else {
        $(".img-step.eight, .txt-step.eight").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.vegan[8][0] &&
        video.currentTime < videoTimestamps.vegan[8][1]
      ) {
        $(".img-step.nine, .txt-step.nine").css("opacity", "1");
        $("#image-gallery-wrapper").animate({ scrollTop: "300px" });
      } else {
        $(".img-step.nine, .txt-step.nine").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.vegan[9][0] &&
        video.currentTime < videoTimestamps.vegan[9][1]
      ) {
        $(".img-step.ten, .txt-step.ten").css("opacity", "1");
      } else {
        $(".img-step.ten, .txt-step.ten").css("opacity", "0.3");
      }

      if (
        video.currentTime >= videoTimestamps.vegan[10][0] &&
        video.currentTime < videoTimestamps.vegan[10][1]
      ) {
        $(".img-step.eleven, .txt-step.eleven").css("opacity", "1");
        $("#image-gallery-wrapper").animate({ scrollTop: "300px" });
      } else {
        $(".img-step.eleven, .txt-step.eleven").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.vegan[11][0] &&
        video.currentTime < videoTimestamps.vegan[11][1]
      ) {
        $(".img-step.twelve, .txt-step.twelve").css("opacity", "1");
      } else {
        $(".img-step.twelve, .txt-step.twelve").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.vegan[12][0] &&
        video.currentTime < videoTimestamps.vegan[12][1]
      ) {
        $(".img-step.thirteen, .txt-step.thirteen").css("opacity", "1");
        $("#image-gallery-wrapper").animate({ scrollTop: "300px" });
      } else {
        $(".img-step.thirteen, .txt-step.thirteen").css("opacity", "0.3");
      }
    } else if (window.video == "meat") {
      console.log("FOURTH IF " + window.video);

      if (
        video.currentTime >= videoTimestamps.meat[0][0] &&
        video.currentTime < videoTimestamps.meat[0][1]
      ) {
        $(".ingredients-bubble").fadeIn(500);
        $(".img-step.ingredients, .txt-step.ingredients").css("opacity", "1");
      } else {
        $(".ingredients-bubble").fadeOut(500);
        $(".img-step.ingredients, .txt-step.ingredients").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.meat[1][0] &&
        video.currentTime < videoTimestamps.meat[1][1]
      ) {
        $(".img-step.two, .txt-step.two").css("opacity", "1");
      } else {
        $(".img-step.two, .txt-step.two").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.meat[2][0] &&
        video.currentTime < videoTimestamps.meat[2][1]
      ) {
        $(".img-step.three, .txt-step.three").css("opacity", "1");
      } else {
        $(".img-step.three, .txt-step.three").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.meat[3][0] &&
        video.currentTime < videoTimestamps.meat[3][1]
      ) {
        $(".img-step.four, .txt-step.four").css("opacity", "1");
      } else {
        $(".img-step.four, .txt-step.four").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.meat[4][0] &&
        video.currentTime < videoTimestamps.meat[4][1]
      ) {
        $(".img-step.five, .txt-step.five").css("opacity", "1");
        $("#image-gallery-wrapper").animate({ scrollTop: "300px" });
      } else {
        $(".img-step.five, .txt-step.five").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.meat[5][0] &&
        video.currentTime < videoTimestamps.meat[5][1]
      ) {
        $(".img-step.six, .txt-step.six").css("opacity", "1");
      } else {
        $(".img-step.six, .txt-step.six").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.meat[6][0] &&
        video.currentTime < videoTimestamps.meat[6][1]
      ) {
        $(".img-step.seven, .txt-step.seven").css("opacity", "1");
        $("#image-gallery-wrapper").animate({ scrollTop: "300px" });
      } else {
        $(".img-step.seven, .txt-step.seven").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.meat[7][0] &&
        video.currentTime < videoTimestamps.meat[7][1]
      ) {
        $(".img-step.eight, .txt-step.eight").css("opacity", "1");
      } else {
        $(".img-step.eight, .txt-step.eight").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.meat[8][0] &&
        video.currentTime < videoTimestamps.meat[8][1]
      ) {
        $(".img-step.nine, .txt-step.nine").css("opacity", "1");
        $("#image-gallery-wrapper").animate({ scrollTop: "300px" });
      } else {
        $(".img-step.nine, .txt-step.nine").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.meat[9][0] &&
        video.currentTime < videoTimestamps.meat[9][1]
      ) {
        $(".img-step.ten, .txt-step.ten").css("opacity", "1");
      } else {
        $(".img-step.ten, .txt-step.ten").css("opacity", "0.3");
      }

      if (
        video.currentTime >= videoTimestamps.meat[10][0] &&
        video.currentTime < videoTimestamps.meat[10][1]
      ) {
        $(".img-step.eleven, .txt-step.eleven").css("opacity", "1");
        $("#image-gallery-wrapper").animate({ scrollTop: "300px" });
      } else {
        $(".img-step.eleven, .txt-step.eleven").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.meat[11][0] &&
        video.currentTime < videoTimestamps.meat[11][1]
      ) {
        $(".img-step.twelve, .txt-step.twelve").css("opacity", "1");
      } else {
        $(".img-step.twelve, .txt-step.twelve").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.meat[12][0] &&
        video.currentTime < videoTimestamps.meat[12][1]
      ) {
        $(".img-step.thirteen, .txt-step.thirteen").css("opacity", "1");
        $("#image-gallery-wrapper").animate({ scrollTop: "300px" });
      } else {
        $(".img-step.thirteen, .txt-step.thirteen").css("opacity", "0.3");
      }
    } else if (window.video == "desert") {
      console.log("FOURTH IF " + window.video);

      if (
        video.currentTime >= videoTimestamps.desert[0][0] &&
        video.currentTime < videoTimestamps.desert[0][1]
      ) {
        $(".ingredients-bubble").fadeIn(500);
        $(".img-step.ingredients, .txt-step.ingredients").css("opacity", "1");
      } else {
        $(".ingredients-bubble").fadeOut(500);
        $(".img-step.ingredients, .txt-step.ingredients").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.desert[1][0] &&
        video.currentTime < videoTimestamps.desert[1][1]
      ) {
        $(".img-step.two, .txt-step.two").css("opacity", "1");
      } else {
        $(".img-step.two, .txt-step.two").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.desert[2][0] &&
        video.currentTime < videoTimestamps.desert[2][1]
      ) {
        $(".img-step.three, .txt-step.three").css("opacity", "1");
      } else {
        $(".img-step.three, .txt-step.three").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.desert[3][0] &&
        video.currentTime < videoTimestamps.desert[3][1]
      ) {
        $(".img-step.four, .txt-step.four").css("opacity", "1");
      } else {
        $(".img-step.four, .txt-step.four").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.desert[4][0] &&
        video.currentTime < videoTimestamps.desert[4][1]
      ) {
        $(".img-step.five, .txt-step.five").css("opacity", "1");
        $("#image-gallery-wrapper").animate({ scrollTop: "300px" });
      } else {
        $(".img-step.five, .txt-step.five").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.desert[5][0] &&
        video.currentTime < videoTimestamps.desert[5][1]
      ) {
        $(".img-step.six, .txt-step.six").css("opacity", "1");
      } else {
        $(".img-step.six, .txt-step.six").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.desert[6][0] &&
        video.currentTime < videoTimestamps.desert[6][1]
      ) {
        $(".img-step.seven, .txt-step.seven").css("opacity", "1");
        $("#image-gallery-wrapper").animate({ scrollTop: "300px" });
      } else {
        $(".img-step.seven, .txt-step.seven").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.desert[7][0] &&
        video.currentTime < videoTimestamps.desert[7][1]
      ) {
        $(".img-step.eight, .txt-step.eight").css("opacity", "1");
      } else {
        $(".img-step.eight, .txt-step.eight").css("opacity", "0.3");
      }
      if (
        video.currentTime >= videoTimestamps.desert[8][0] &&
        video.currentTime < videoTimestamps.desert[8][1]
      ) {
        $(".img-step.nine, .txt-step.nine").css("opacity", "1");
        $("#image-gallery-wrapper").animate({ scrollTop: "300px" });
      } else {
        $(".img-step.nine, .txt-step.nine").css("opacity", "0.3");
      }
    }
  });
}
