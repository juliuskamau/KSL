
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






MARQUEE = {
    bindMarquee: function () {
   
        marqueeInit({ 
            uniqueid: 'mycrawler23', 
            style: { 
                'padding': '0px', 
                 
                'height': '25px' 
            }, 
            inc: 5, //speed - pixel increment for each iteration of this marquee's movement 
            mouse: 'cursor driven', //mouseover behavior ('pause' 'cursor driven' or false) 
            moveatleast: 2, 
            neutral: 150, 
            savedirection: true 
        }); 
        
    }
};


var onLoad = function () {
    ACTIVELINKS.bindActiveLinks();
    MARQUEE.bindMarquee();
    LOADER.bindLoader();
   
 
};


$(document).foundation();
window.onload = onLoad();
