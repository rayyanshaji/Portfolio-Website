

window.addEventListener('scroll', event => {
   var navigationLinks = document.querySelectorAll("nav ul li a");
    
   let fromTop = window.scrollY;
 
    Array.from(navigationLinks).forEach(link => {
    var section = document.querySelector(link.hash);
   
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
    });
    });

//    $(document).ready(function(){
//    // Add scrollspy to <body>
//    $('body').scrollspy({target: ".nav-container", offset: 50});   
//
//    // Add smooth scrolling on all links inside the navbar
//    $("#topmenu").on('click', function(event) {
//    // Make sure this.hash has a value before overriding default behavior
//    if (this.hash !== "") {
//      // Prevent default anchor click behavior
//      event.preventDefault();
//
//      // Store hash
//      var hash = this.hash;
//
//      // Using jQuery's animate() method to add smooth page scroll
//      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//      $('html, body').animate({
//        scrollTop: $(hash).offset()
//      }, 800, function(){
//   
//        // Add hash (#) to URL when done scrolling (default click behavior)
//        window.location.hash = hash;
//      });
//    }  // End if
//  });
//});
        
    $(document).ready(function(){
    $('.carousel').carousel({
      interval: 5000
    })
    }); 

/* ---------------------------------------------------
    NUTRITIONAL VALUE
----------------------------------------------------- */

        
    var myvideo = document.getElementById('video-nutrional'),
    jumplink1 = document.getElementById('jump-nutrition1'),
    jumplink2 = document.getElementById('jump-nutrition2'),
    jumplink3 = document.getElementById('jump-nutrition3');

    jumplink1.addEventListener("click", function (event) {
        event.preventDefault();
        myvideo.currentTime = 3;
        myvideo.play();
    }, false);

    jumplink2.addEventListener("click", function (event) {
        event.preventDefault();
        myvideo.currentTime = 7;
        myvideo.play();
    }, false);

    jumplink3.addEventListener("click", function (event) {
        event.preventDefault();
        myvideo.currentTime = 12;
        myvideo.play();
    }, false);

    //jumplink.style.color = "#f97c0f";

    $( ".jump-nutrition" ).find('a').css( "color", "#f97c0f" );
    $( ".jump-nutrition" ).find('a').css( "fontWeight",  600);

    var el = document.getElementsByClassName('.jump-nutrition');

    for (var i = 0; i < el.length; i++) {
    var currentEl = el[i];
    currentEl.style.fontColor = '#f97c0f';
        currentEl.style.fontWeight = 600;
    }
    

/* ---------------------------------------------------
    BLUEDITT
----------------------------------------------------- */

 var jumpblueditt = document.getElementById("video-blueditt"),
    jumpblueditt1 = document.getElementById('jump-blueditt1'),
    jumpblueditt2 = document.getElementById('jump-blueditt2'),
    jumpblueditt3 = document.getElementById('jump-blueditt3');

    $( ".jump-blueditt" ).find('a').css( "color", "#269fff" );
    $( ".jump-blueditt" ).find('a').css( "fontWeight",  600);


/* ---------------------------------------------------
    ISSUE-TRACKER
----------------------------------------------------- */

/* ---------------------------------------------------
    TRANSIT-TRACKER
----------------------------------------------------- */

/* ---------------------------------------------------
    TASK MAANGEMENT
----------------------------------------------------- */

    