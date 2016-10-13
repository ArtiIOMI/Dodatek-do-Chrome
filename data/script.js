$(document).ready(function(){
		$.getJSON( "http://api.hitbox.tv/user/losiugra", function( api ) {
			$("#kontent").empty();
			if(api.is_live == 0)
			{
				$("#kontent").prepend('<img src="data/img/offline.png"/>');
			}else
			{
				$("#kontent").prepend('<a href="http://www.hitbox.tv/losiugra" target="_blank"><img src="data/img/online.png"/></a>');
			}
		 });
});

