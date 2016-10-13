// Dane wlasciciela powiadamiacza
var Strona = "http://www.hitbox.tv/losiugra";
var StronaAPI = "http://api.hitbox.tv/user/losiugra";
var Nazwa = 'Losiu';
//

function show() {
	var time = /(..)(:..)/.exec(new Date());    
	var hour = time[1] % 12 || 12;               
	var period = time[1] < 12 ? 'a.m.' : 'p.m.'; 
	var n = new Notification('Stream ('+hour + time[2] + ' ' + period+')', {
		icon: 'data/img/icon_48.png',
		body: Nazwa+' zaprasza na stream.'
	});
	var audio = new Audio("sound.mp3");
	if (JSON.parse(localStorage.isMusic))
	{
		audio.volume= localStorage.glosnosc/100;
		audio.play();
	}
	n.onclose = function(event) {audio.pause()}
	n.onclick = function(event) {window.open(Strona, "_blank"); n.close()}
}

if (!localStorage.isInitialized) {
  localStorage.isMusic = true;
  localStorage.frequency = 1;
  localStorage.glosnosc = 100;
  localStorage.isInitialized = true;
}

var stream = false;

if (window.Notification) {
	var interval = 0;
			$.getJSON( StronaAPI, function( api ) {
				if(api.is_live == 1 && stream==false)
				{
					 show();
					 stream=true;
				}
			 });

	setInterval(function() {
    interval++;

	
    if (localStorage.frequency <= interval) 
	{		
		$.getJSON( StronaAPI, function( api ) {
			if(api.is_live == 1 && stream==false)
			{
				show();
				stream=true;
			}else if(api.is_live == 0 && stream==true) stream=false;
		});
		interval = 0;
    }
  }, 60000);
}