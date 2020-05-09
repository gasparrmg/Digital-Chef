$(function () {
    $("#exampleModalCenter")
        .modal({ show: false })
        .on("hidden.bs.modal", function () {
            $(this).find("video")[0].pause();
        }); 

// Make the video start automatically when loaded
        $('#exampleModalCenter').on('shown.bs.modal', function () {
            document.getElementById('promovideo').play();
            document.getElementById('promovideo').muted = false;
          })
});

