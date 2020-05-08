$(function () {
    $("#btn_play").on("click", function () {
        let video = $("#main-video").get(0);

        if (video.paused) {
            video.play();
            $("#btn_play img").attr("src", "./resources/img/video-controls/btn_pause.svg");
        } else {
            video.pause();
            $("#btn_play img").attr("src", "./resources/img/video-controls/btn_play.svg");
        }
    });
});