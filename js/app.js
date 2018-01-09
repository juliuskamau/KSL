
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

SEARCHICON = {
    bindSearchIcon: function () {
   
        $(document).ready(function(){
           $(".search_icon_mobile").click(function(){
                $(".mobile_input_search").toggle();
            });
        });           
    }
};


GOOLEMAP = {
    bindGoogleMap: function () {
        function initialize() {
            var map_canvas = document.getElementById('map_canvas');
            var map_options = {
              center: new google.maps.LatLng(-1.288966, 36.826475),
              zoom: 14,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            var map = new google.maps.Map(map_canvas, map_options)
            var LatLng = new google.maps.LatLng(-1.288966, 36.826475);
            var marker = new google.maps.Marker({
                position: LatLng,
                title: 'Premier Water Solutions Ltd',
                map: map
              });
          }
          google.maps.event.addDomListener(window, 'load', initialize);
               
    }
};





var onLoad = function () {
    ACTIVELINKS.bindActiveLinks();
    MARQUEE.bindMarquee();
    LOADER.bindLoader();
    SEARCHICON.bindSearchIcon();
    GOOLEMAP.bindGoogleMap();
 
};


$(document).foundation();
window.onload = onLoad();
