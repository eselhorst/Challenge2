//datum
var today = new Date(); 
var maanden =  ['januari', 'febuari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
var formatDate = today.getDate() +' '+ maanden [today.getMonth()] +' '+ today.getFullYear();
document.getElementById('date').innerHTML = formatDate;

//afbeeldingen
var now = new Date();
var hours = now.getHours();

// verandering van achtergrondkleur per fase van de dag
//6:00 - 18:00 ochtend/middag
if (hours > 6 && hours < 18){
 document.write ('<body style="background-color: #FFE872; color: black;">');
}

//18:00-6:00 avond/nacht
else {
 document.write ('<body style="background-color: #02094C; color: white">');
}

//verander plaatje in ad2 (dus van maan naar zon of andersom)
		if (hours > 6 && hours < 18){
		document.getElementById("maan-zon").style.backgroundImage ="url('sun.png')";
		}
		else {
		document.getElementById("maan-zon").style.backgroundImage ="url('moon.png')";
		}

//klok
setInterval(function(){
	var date = new Date();
	updateKlok(date);
}, 1000);

function updateKlok(date){
	var hrsWijzer =
	document.getElementById("hrs-wijzer").style;
	var minWijzer =
	document.getElementById("min-wijzer").style;
	var secWijzer =
	document.getElementById("sec-wijzer").style;

	hrsWijzer.transform = "rotate(" + (date.getHours() * 30 + date.getMinutes() * 0.5) + "deg)";
	secWijzer.transform = "rotate(" + date.getSeconds() * 6 + "deg)";
	minWijzer.transform = "rotate(" + date.getMinutes() * 6 + "deg)";
	
}

//animatie zon en maan (rond draaien)
TweenMax.to("#maan-zon", 120, {rotation:260,ease:Power0.easeNone,repeat:-1 });

//animatie klok van boven naar beneden
function animatie(){
    var timeline = new TimelineMax ({repeat:-1});
    timeline.to("#klok", 50, {ease: Elastic.easeOut.config(10), y:6});
};

animatie();
