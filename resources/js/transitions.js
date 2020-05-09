$(document).ready(function() {


    $(".dish-list.homepage .dish-card a").click(function (e) { 

        e.preventDefault();
        console.log("IM HERE");

        $(".cta-promo-video-btn").fadeOut(100);
       
        $(".dish-list.homepage .dish-card").css("margin","0px")
           
          $(".dish-list.homepage").animate({ 
            margin: "20px 300px 0px 300px",
          }, 1000 ); 
          
          $(".dish-card h2").animate({ 
            'font-size': "1.25rem",
          }, 1000 ); 

          $(".dish-card img").animate({ 
            width: "60px",
          }, 1000 );

           $(".dish-card").animate({ 
            top: "+=300px",
          }, { duration: 1000, queue: false });

           


  // - TRANSITION FROM MAIN TO VIDEOPAGE ---------------
        $(".homepage-wrapper").fadeOut(1500, function() {
            //animation complete

            
            $(".videopage-wrapper").fadeIn(3000);
            $(".dish-card").animate({ 
                top: "-=300px",
              }, 3000 );
        });
    });
 // ----------------------------------------------------

});