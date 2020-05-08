$(document).ready(function() {
    $(".dish-list.homepage .dish-card a").click(function (e) { 
        e.preventDefault();
        console.log("IM HERE");
        $(".homepage-wrapper").fadeOut(1000, function() {
            //animation complete
            $(".videopage-wrapper").fadeIn(1000);
        });
    });
});