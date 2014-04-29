$(document).ready(function(){
	//loads nav
	$(".js-include").each(function(){
	    var inc=$(this);
	    $.get(inc.attr("title"), function(data){
	        inc.replaceWith(data);
	    });
	});
	//bg image
	$('img.bg').randomImage();
	//fades in elements
	$("h1, h2, img, #main").stop().animate({"opacity": "1", }, {duration:2000});
	//checks for plugin
	if(jQuery().elastislide) {
	     //run plugin dependent code
	     	$('#carousel').elastislide({ imageW : 960, minItems: 1 });
	 }
	 if(jQuery().flexslider) {
		$('.flexslider').flexslider({ animation: "slide", slideshow: "false" });
	 }

	    console.log('document ready');
	    //mixpanel.track('Document Ready');
	    $('.shuffle').randomImage();	
	    //set variables to determine if scripts for a particular environment need to be called.
	    mobileEnvironment = 1;
	    tabletEnvironment = 0;
	    desktopEnvironment = 0;

	    $('body').addClass('mobile'); //assume mobile! mobile first, yo.

	    environmentChecker();
	    console.log('environmentChecker ready');
	    $(window).resize(function(){
	        environmentChecker();
	    });

}); //document.ready

/*==( ^ Checks to see if Mobile, Tablet, or Desktop )======================================================*/
function environmentChecker() {
    console.log('environmentChecker `fired');
    if ($(window).width() >= 960) {
        if (tabletEnvironment == 0){
            tabletEnvironment = 1;
            //tabletController();
        }; //tabletcheck
        if (desktopEnvironment == 0){
            desktopEnvironment = 1;
            //desktopController(); 
        }; //desktopcheck
        $('body').removeClass('mobile').removeClass('tablet').addClass('desktop');
        //mixpanel.track('Desktop Environment');
    } else if ($(window).width() >= 600) {
        if (tabletEnvironment == 0){
            tabletEnvironment = 1;
           // tabletController();
        }; //tabletcheck
        $('body').removeClass('mobile').removeClass('desktop').addClass('tablet');
        //mixpanel.track('Tablet Environment');
    } else {
        $('body').removeClass('tablet').removeClass('desktop').addClass('mobile');
        //mixpanel.track('Mobile Environment');
    }; //window.width

    heightSetter();

}; //environmentChecker

function heightSetter(){
    //alert($(window).height());
    //$('.expanded-project').css({'height':$(window).height()});
}; //heightSetter
