$(document).ready(function () {
  $(".dish-list.homepage .dish-card a").click(function (e) {
    e.preventDefault();
    console.log("IM HERE");

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

      $(".videopage-wrapper").fadeIn(1500, function () {
        $("#main-video").get(0).play();
        $("#btn_play img").attr("src", "./resources/img/video-controls/btn_pause.svg");
      });
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

    $("#image-gallery-wrapper").fadeOut(500, function () {
      $("#text-section-wrapper").fadeIn(500);
    });
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

    $("#text-section-wrapper").fadeOut(500, function () {
      $("#image-gallery-wrapper").fadeIn(500);
    });

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
  });
  //-------------------------------------------------------
});
