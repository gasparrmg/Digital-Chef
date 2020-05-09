$(document).ready(function() {


    $(".dish-list.homepage .dish-card a").click(function (e) { 
        e.preventDefault();
        console.log("IM HERE");

        $(".dish-card").animate({ 
            top: "+=300px",
          }, 1000 );
          
         $(".dish-card img").animate({ 
            width: "60px",
          }, 1000 );  

          $(".dish-card h2").animate({ 
            'font-size': "1.25rem",
          }, 1000 ); 

          $(".dish-list.homepage").animate({ 
            margin: "20px 300px 0px 300px",
          }, 1000 ); 


  // - TRANSITION FROM MAIN TO VIDEOPAGE ---------------
        $(".homepage-wrapper").fadeOut(1500, function() {
            //animation complete

            $(".dish-card").animate({ 
                top: "-=300px",
              }, 1 );
            $(".videopage-wrapper").fadeIn(1500);
        });
    });
 // ----------------------------------------------------

});