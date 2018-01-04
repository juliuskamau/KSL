
   LOADER = {
    bindLoader: function () {
   
        $(document).ready(function() {
            
             // Fakes the loading setting a timeout
               setTimeout(function() {
                   $('body').addClass('loaded');
               }, 3500);
            
           });
        
    }
};


ACTIVELINKS = {
    bindActiveLinks: function () {
   
        $(document).ready(function(){
            $('ul li a').click(function(){
              $('li a').removeClass("active");
              $(this).addClass("active");
          });
          });
        
    }
};






SNOW = {
    bindSnow: function () {
   
        $(document).ready( function(){
            $.fn.snow();
        });
        
    }
};


var onLoad = function () {
    ACTIVELINKS.bindActiveLinks();
    SNOW.bindSnow();
    LOADER.bindLoader();
   
 
};


$(document).foundation();
window.onload = onLoad();
