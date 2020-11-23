//function openNav() {
//  document.getElementById("sidebar").style.width = "250px";
//  document.getElementById("content").style.marginRight= "0";
//}
//
//function closeNav() {
//
//  document.getElementById("sidebar").style.width = "0";
//  document.getElementById("content").style.marginRight= "250px";
//}
$(window).scroll(function(e){ 
  var $el = $('.topnav'); 
  var isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() > 100 && !isPositionFixed){ 
    $el.css({'position': 'sticky'}); 
  }
  if ($(this).scrollTop() < 100 && isPositionFixed){
    $el.css({'position': 'sticky'}); 
  } 
});



function openNav() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

$('#opennav').on('click', function(e) {
    if($('.myLinks').hasClass('active')){
          $(this).removeClass('active');
            $('.myLinks').css('display','none');
			setTimeout(function(){
				$('.myLinks').hide() 
			}, 300);
    } else {  
        $('.myLinks').show();
        $('.myLinks').addClass('active');
    }
});




function closeNav() {
  document.getElementById("myLinks").style.width = "0";
  //document.getElementById("content").style.marginRight= "0";
}

$('#copy').tooltip({
  trigger: 'click',
  placement: 'bottom'
});

function setTooltip(btn, message) {
  $(btn).tooltip('hide')
    .attr('data-original-title', message)
    .tooltip('show');
}

function hideTooltip(btn) {
  setTimeout(function() {
    $(btn).tooltip('hide');
  }, 1000);
}

var clipboard = new Clipboard('#copy');

clipboard.on('success', function(e) {
  setTooltip(e.trigger, 'Copied!');
  hideTooltip(e.trigger);
});

clipboard.on('error', function(e) {
  setTooltip(e.trigger, 'Failed!');
  hideTooltip(e.trigger);
});

// Select all links with hashes
/*$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 700, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });*/

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("li a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      let hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// var navigationLinks = document.querySelectorAll("nav ul li a");
//var fromTop = window.scrollY;
//window.addEventListener('scroll', event => {
//  
//    
//    
// 
//    Array.from(navigationLinks).forEach(link => {
//    var section = document.querySelector(link.hash);
//   
//    if (
//      section.offsetTop <= fromTop &&
//      section.offsetTop + section.offsetHeight > fromTop
//    ) {
//      link.classList.add('active');
//    } else {
//      link.classList.remove('active');
//    }
//    });
//    });
//
//    function outFunc() {
//  var tooltip = document.getElementById("myTooltip");
//  tooltip.innerHTML = "Copy to clipboard";
//}
//  var copybutton = document.getElementById("copybutton");
//  copybutton.addEventListener('click', function(event) {  
//  // Select the email link anchor text  
//  var emailLink = document.getElementById("copy");  
//  var range = document.createRange();  
//  range.selectNode(emailLink);  
//  window.getSelection().addRange(range);  
//
//  try {  
//    // Now that we've selected the anchor text, execute the copy command  
//    var successful = document.execCommand('copy');  
//    var msg = successful ? 'successful' : 'unsuccessful';  
//    console.log('Copy email command was ' + msg);  
//      alert('Copy email command was ' + msg);  
//  } catch(err) {  
//    console.log('Oops, unable to copy');  
//  }
//  
//
//  // Remove the selections - NOTE: Should use
//  // removeRange(range) when it is supported  
//  window.getSelection().removeAllRanges();  
//      });

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

    