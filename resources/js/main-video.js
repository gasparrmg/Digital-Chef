$(document).ready(function () {
    let video = $("#main-video").get(0);

    var videoTimestamps = {
        sopa: [
            [14, 36],
            [36, 49],
            [49, 76],
            [76, 98],
            [98, 124],
            [124, 143]
        ]
    };

    videoControls(video, videoTimestamps);

    stepHighlight(video, videoTimestamps);

    stepClicks(video, videoTimestamps);
});

function stepClicks(video, timeStamps) {
    //TODO (QUANDO METERMOS OUTROS VIDS): verficar primeiro qual current vid
    console.log("STEP CLICKS");

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
}

function videoControls(video, videoTimestamps) {
    //PLAY PAUSE
    $("#btn_play").on("click", function () {
        if (video.paused) {
            video.play();
            $("#btn_play img").attr("src", "./resources/img/video-controls/btn_pause.svg");
        } else {
            video.pause();
            $("#btn_play img").attr("src", "./resources/img/video-controls/btn_play.svg");
        }
    });

    //NEXT STEP
    $("#btn-next-step").click(function () {
        //TODO: CHECK CURRENT RECIPE
        
        //IF SOPA
        for (var i = 0; i < videoTimestamps.sopa.length - 1; i++) {
            if (video.currentTime >= videoTimestamps.sopa[i][0] && video.currentTime < videoTimestamps.sopa[i][1]) {
                video.currentTime = videoTimestamps.sopa[i+1][0];
                break;
            }
        }
    });

    //PREV STEP
    $("#btn-prev-step").click(function () {
        //TODO: CHECK CURRENT RECIPE
        
        //IF SOPA
        for (var i = 1; i < videoTimestamps.sopa.length; i++) {
            if (video.currentTime >= videoTimestamps.sopa[i][0] && video.currentTime < videoTimestamps.sopa[i][1]) {
                video.currentTime = videoTimestamps.sopa[i-1][0];
                break;
            }
        }
    });

    //TODO: NEXT RECIPE

    //TODO: PREV RECIPE
}

function stepHighlight(video, videoTimestamps) {
    $("#main-video").on("timeupdate", function () {
        //TODO (QUANDO METERMOS OUTROS VIDS): verficar primeiro qual current vid

        if (video.currentTime >= videoTimestamps.sopa[0][0] && video.currentTime < videoTimestamps.sopa[0][1]) {
            $(".ingredients-bubble").fadeIn(500);
            $(".img-step.ingredients, .txt-step.ingredients").css("opacity", "1");
        } else {
            $(".ingredients-bubble").fadeOut(500);
            $(".img-step.ingredients, .txt-step.ingredients").css("opacity", "0.3");
        }
        if (video.currentTime >= videoTimestamps.sopa[1][0] && video.currentTime < videoTimestamps.sopa[1][1]) {
            $(".img-step.two, .txt-step.two").css("opacity", "1");
        } else {
            $(".img-step.two, .txt-step.two").css("opacity", "0.3");
        }
        if (video.currentTime >= videoTimestamps.sopa[2][0] && video.currentTime < videoTimestamps.sopa[2][1]) {
            $(".img-step.three, .txt-step.three").css("opacity", "1");
        } else {
            $(".img-step.three, .txt-step.three").css("opacity", "0.3");   
        }
        if (video.currentTime >= videoTimestamps.sopa[3][0] && video.currentTime < videoTimestamps.sopa[3][1]) {
            $(".img-step.four, .txt-step.four").css("opacity", "1");
        } else {
            $(".img-step.four, .txt-step.four").css("opacity", "0.3");
        }
        if (video.currentTime >= videoTimestamps.sopa[4][0] && video.currentTime < videoTimestamps.sopa[4][1]) {
            $(".img-step.five, .txt-step.five").css("opacity", "1");
            $("#image-gallery-wrapper").animate({ scrollTop: "300px" });
        } else {
            $(".img-step.five, .txt-step.five").css("opacity", "0.3");
        }
        if (video.currentTime >= videoTimestamps.sopa[5][0] && video.currentTime < videoTimestamps.sopa[5][1]) {
            $(".img-step.six, .txt-step.six").css("opacity", "1");
        } else {
            $(".img-step.six, .txt-step.six").css("opacity", "0.3");
        }
    });
}
  