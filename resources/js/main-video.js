$(document).ready(function () {
    let video = $("#main-video").get(0);

    var videoTimestamps = {
        sopa: {
            ingredients: [
                14, 36
            ],
            two: [
                36, 49
            ],
            three: [
                49, 76
            ],
            four: [
                76, 98
            ],
            five: [
                98, 124
            ],
            six: [
                124, 143
            ]
        }
    };

    $(function () {
        $("#btn_play").on("click", function () {
            if (video.paused) {
                video.play();
                $("#btn_play img").attr("src", "./resources/img/video-controls/btn_pause.svg");
            } else {
                video.pause();
                $("#btn_play img").attr("src", "./resources/img/video-controls/btn_play.svg");
            }
        });
    });

    $("#main-video").on("timeupdate", function () {
        //TODO (QUANDO METERMOS OUTROS VIDS): verficar primeiro qual current vid

        if (video.currentTime >= videoTimestamps.sopa.ingredients[0] && video.currentTime < videoTimestamps.sopa.ingredients[1]) {
            $(".ingredients-bubble").fadeIn(500);
            $(".img-step.ingredients").css("opacity", "1");
        } else {
            $(".ingredients-bubble").fadeOut(500);
            $(".img-step.ingredients").css("opacity", "0.3");
        }
        
        if (video.currentTime >= videoTimestamps.sopa.two[0] && video.currentTime < videoTimestamps.sopa.two[1]) {
            $(".img-step.two").css("opacity", "1");
        } else {
            $(".img-step.two").css("opacity", "0.3");
        }

        if (video.currentTime >= videoTimestamps.sopa.three[0] && video.currentTime < videoTimestamps.sopa.three[1]) {
            $(".img-step.three").css("opacity", "1");
        } else {
            $(".img-step.three").css("opacity", "0.3");
        }

        if (video.currentTime >= videoTimestamps.sopa.four[0] && video.currentTime < videoTimestamps.sopa.four[1]) {
            $(".img-step.four").css("opacity", "1");
        } else {
            $(".img-step.four").css("opacity", "0.3");
        }

        if (video.currentTime >= videoTimestamps.sopa.five[0] && video.currentTime < videoTimestamps.sopa.five[1]) {
            $(".img-step.five").css("opacity", "1");
        } else {
            $(".img-step.five").css("opacity", "0.3");
        }

        if (video.currentTime >= videoTimestamps.sopa.six[0] && video.currentTime < videoTimestamps.sopa.six[1]) {
            $(".img-step.six").css("opacity", "1");
        } else {
            $(".img-step.six").css("opacity", "0.3");
        }

    })
});
  