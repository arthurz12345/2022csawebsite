
    var lazyloadImages = document.querySelectorAll("img.lazy");    
    var lazyloadThrottleTimeout;
    
    function lazyload () {
      
      
          //var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
                img.classList.remove('lazy');
              }
          );
         
    
    }
    
    //document.addEventListener("scroll", lazyload);
    //window.addEventListener("resize", lazyload);
    //window.addEventListener("orientationChange", lazyload);
