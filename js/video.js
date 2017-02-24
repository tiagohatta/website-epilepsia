$(window).bind('resize', function () { 
    corrigirquadrados();
    posconfig();
  
});

$(document).ready(function(){
	customcontrols();
	corrigirquadrados();
	posconfig();


});

function posconfig(){
	var width = $(window).width();
	if (width > 750){
		var x = (440 + ((width-750)*490/610));
		
		$('#config').css({
		'left':x
		});
		
		$('#qualidade').css({
		'left':x+100
		});

		$('#velocidade').css({
		'left':x+100
		});
	}
	else {
		$('#config').css({
		'left':440
		});

		$('#qualidade').css({
		'left':540
		});

		$('#velocidade').css({
		'left':540
		});
	}
}


function desativardivs(){
	document.getElementById("selec2").className = 'option1';
	document.getElementById("selec3").className = 'option1';
	document.getElementById("selec4").className = 'option1';
	document.getElementById("selec5").className = 'option1';
	document.getElementById("selec6").className = 'option1';
	document.getElementById("selec7").className = 'option1';
	document.getElementById("selec8").className = 'option1';
	document.getElementById("selec9").className = 'option1';
	document.getElementById("fim").className ="option1";
	document.getElementById("voltarinicio").className = 'option1';
}

function customcontrols(){
	var video = $(".myVideo");

	//remove default control when JS loaded
	video[0].removeAttribute("controls");
	$('.control').show().css({'bottom': 50});
	$('.barralateral').show();
	$('.loading').fadeIn(500);

	//$('.caption').fadeIn(500);
	var container = $(".videoContainer");

	//before everything get started
	video.on('loadedmetadata', function() {				
		//set video properties
		$('.current').text(timeFormat(0));
		$('.duration').text(timeFormat(video[0].duration));
		/*var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)volume\s*\=\s*([^;]*).*$)|^.*$/, "$1");
		console.log("cookievalue="+cookieValue)
		cookieValue=cookieValue/100;
		updateVolume(0, cookieValue);
		;
		*/	
		//start to get video buffering data 
		setTimeout(startBuffer, 150);
	});
		
	$(window).keypress(function(e) {
		var video = document.getElementById("vid");
		if (e.which == 32) {
		playpause();
		}
	});

	$(video).on("click", function(){
		playpause();
	});

		//INATIVIDADe
	var timeoutID;
	
	function setup() {
		this.addEventListener("mousemove", resetTimer, false);
		this.addEventListener("mousedown", resetTimer, false);
		this.addEventListener("keypress", resetTimer, false);
		this.addEventListener("DOMMouseScroll", resetTimer, false);
		this.addEventListener("mousewheel", resetTimer, false);
		this.addEventListener("touchmove", resetTimer, false);
		this.addEventListener("MSPointerMove", resetTimer, false);
		startTimer(); 
	}

	setup();

	function startTimer() {
		// wait 2 seconds before calling goInactive
		timeoutID = window.setTimeout(goInactive, 1750);
	}

	function resetTimer(e) {
		window.clearTimeout(timeoutID);
		goActive();
	}

	function goInactive() {
		// do something
		if ($('#config').css('display') == 'none' && $('.botoes').css('display') == 'none' && $('.vidmochila').css('display') == 'none'){
			$('.control').stop().animate({'opacity':0}, 500);
			$('.barralateral').stop().animate({'opacity':0}, 500);
			//	$('.caption').stop().animate({'opacity':0}, 500);
			$('.preview').css({"display": "none"});
		}
	}

	function goActive() {
		// do something
		$('.control').stop().animate({'opacity':80}, 500);
		$('.barralateral').stop().animate({'opacity':80}, 500);
		//$('.caption').stop().animate({'opacity':100}, 500);
		startTimer();
	}


	//display video buffering bar
	var startBuffer = function() {
		var currentBuffer = video[0].buffered.end(0);
		var maxduration = video[0].duration;
		var perc = 100 * currentBuffer / maxduration;
		$('.bufferBar').css('width',perc+'%');
			
		if(currentBuffer < maxduration) {
			setTimeout(startBuffer, 500);
		}
	};	
	
	//display current video play time
	video.on('timeupdate', function() {
		var currentPos = video[0].currentTime;
		var maxduration = video[0].duration;
		var perc = 100 * currentPos / maxduration;
		$('.timeBar').css('width',perc+'%');	
		$('.current').text(timeFormat(currentPos));

		if (document.title === "Infancia"){
			if ((currentPos >= 20 ) && (currentPos <33)){
				document.getElementById("selec6").className = 'option2';
				document.getElementById("selec7").className = 'option2';
			}
			else if ((currentPos >= 10) && (currentPos <15)){
				$('.preview').css({"display": "block"});
				document.getElementById("selec6").className = 'option1';
				document.getElementById("selec7").className = 'option1';
				$('.control').stop().animate({'opacity':80}, 500);
				$('.barralateral').stop().animate({'opacity':80}, 500);
				window.setTimeout(goInactive, 5000);
			}
			else if ((currentPos < 10) || ((currentPos >= 15) && (currentPos <20))) { 
				document.getElementById("selec6").className = 'option1';
				document.getElementById("selec7").className = 'option1';		
			}

		}
		else if (document.title === "Juventude"){
			if ((currentPos >= 41 ) && (currentPos <=65)){
				document.getElementById("selec8").className = 'option2';
				document.getElementById("selec9").className = 'option2';
			}
			else{ 
				document.getElementById("selec8").className = 'option1';
				document.getElementById("selec9").className = 'option1';
			}
		}
		else if (document.title === "Not Yet"){
			if ((currentPos >= 0 ) && (currentPos <=12)){
				document.getElementById("voltarinicio").className = 'option2';
			}
			else{ 
				document.getElementById("voltarinicio").className = 'option1';
			}

		}
		else if (document.title === "Intro"){
			if ((currentPos >= 15 ) && (currentPos <=25)){
				document.getElementById("selec2").className = 'option2';
				document.getElementById("selec3").className = 'option2';
				document.getElementById("selec4").className = 'option2';
				document.getElementById("selec5").className = 'option2';
				document.getElementById("selec6").className = 'option2';
				document.getElementById("selec7").className = 'option2';
			}
			else{ 
				document.getElementById("selec2").className = 'option1';
				document.getElementById("selec3").className = 'option1';
				document.getElementById("selec4").className = 'option1';
				document.getElementById("selec5").className = 'option1';
				document.getElementById("selec6").className = 'option1';
				document.getElementById("selec7").className = 'option1';
			}
		}

	});
		
	//CONTROLS EVENTS
	//video screen and play button clicked
	video.on('click', function() { fecharjanelas(); } );
		
	$('.btnPlay').on('click', function() { 
		playpause(); 
	});
	
	var playpause = function() {
		if($('#config').css('display') == 'block'){
			$('#config').css({"display": "none"}); 
		}
		else if(video[0].paused || video[0].ended) {
			$('.btnPlay').addClass('paused');
			video[0].play();
			$('#config').css({"display": "none"});
		}
		else {
			$('.btnPlay').removeClass('paused');
			video[0].pause();
		}
	};
		
	//speed changed
	$('#05x').on('click', function() { fastfowrd(this, 0.5); });
	$('#1x').on('click', function() { fastfowrd(this, 1); });
	$('#125x').on('click', function() { fastfowrd(this, 1.25); });
	$('#15x').on('click', function() { fastfowrd(this, 1.5); });
	$('#2x').on('click', function() { fastfowrd(this, 2); });
	
	var fastfowrd = function(obj, spd) {
		$('#vel').text(spd+'x');
		$('#config').css({"display": "block"}); 
		$('#velocidade').css({"display": "none"}); 
		video[0].playbackRate = spd;
		video[0].play();

	};

		//quality changed
	$('#720p').on('click', function() { 
		$('#qual').text('720p');
		video[0].pause();
		$('#config').css({"display": "none"}); 
		$('#qualidade').css({"display": "none"}); 
		
		var tempo = video[0].currentTime;
		
		if (document.title === "Infancia"){	var num=2;}
		else if (document.title === "Not Yet"){ var num=0;}
		else if (document.title === "Infancia 2x"){ var num=3;}
		else if (document.title === "Infancia 2y"){ var num=4;}
		else if (document.title === "Juventude"){ var num=6;}
		else if (document.title === "Juventude 1"){ var num=7;}

		$('#mp4video').attr("src", "videos/ep"+num+".mp4" );
		$('#webmvideo').attr("src", "videos/ep"+num+".webm" );
		
		video[0].load();
		video[0].currentTime = tempo;
		video[0].play();

	});

	$('#360p').on('click', function() { 
		$('#qual').text('360p');
		video[0].pause();
		$('#config').css({"display": "none"}); 
		$('#qualidade').css({"display": "none"}); 
		var tempo = video[0].currentTime;
	
		if (document.title === "Infancia"){	var num=2;}
		else if (document.title === "Not Yet"){ var num=0;}
		else if (document.title === "Infancia 2x"){ var num=3;}
		else if (document.title === "Infancia 2y"){ var num=4;}
		else if (document.title === "Juventude"){ var num=6;}
		else if (document.title === "Juventude 1"){ var num=7;}

		$('#mp4video').attr("src", "videos/360p/ep"+num+".mp4" );
		$('#webmvideo').attr("src", "videos/360p/ep"+num+".webm" );
		video[0].load();
		video[0].currentTime = tempo;
		video[0].play();
	});
		
	//stop button clicked
	$('.btnStop').on('click', function() {
		$('.btnPlay').removeClass('paused');
		updatebar($('.progress').offset().left);
		video[0].pause();
	});
		
	//fullscreen button clicked
	$('.btnFS').on('click', function()  {
		if (!document.fullscreenElement &&    // alternative standard method
		!document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
			if (document.documentElement.requestFullscreen) {
			document.documentElement.requestFullscreen();
			} else if (document.documentElement.msRequestFullscreen) {
			document.documentElement.msRequestFullscreen();
			} else if (document.documentElement.mozRequestFullScreen) {
			document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullscreen) {
			document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
			}
			else{
				alert("Seu navegador não aceita o modo de Tela Cheia. :(")
			}
		} 
		else {
			if (document.exitFullscreen) {
			document.exitFullscreen();
			} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
			} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
			} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
			}
		}
	});


	//função fechar janelas
	function fecharjanelas(){
		if ($('#config').css('display') == 'none' && $('#legendas').css("display") == 'none' && 
			$('#qualidade').css("display") == 'none' && $('#velocidade').css("display") == 'none' && 
			$('.botoes').css("display") == 'none'  && $('.vidmochila').css("display") == 'none'){
				playpause();
		}
		else {
			$('#config').css({"display": "none"});
			$('.btnLight').addClass("lighton");
			$('#legendas').css({"display": "none"});
			$('#qualidade').css({"display": "none"});
			$('#velocidade').css({"display": "none"});
			$('.botoes').css({"display": "none"});
			$('.vidmochila').css({"display": "none"});

			startTimer();
		}
	}

	//JANELA CONFIGURAÇOES
	$('.btnLight').click(function() {

		if ($('#velocidade').css('display') == "block"){
			$('#velocidade').css({'display': "none"});
				$('#config').css({"display": "none"});
			$('.btnLight').addClass("lighton");
			startTimer();
		}
		else if ($('#qualidade').css('display') == "block"){
			$('#qualidade').css({'display': "none"});
			$('#config').css({"display": "none"});
			$('.btnLight').addClass("lighton");
			startTimer();
		}

		else if($('#config').css('display') == 'block'){
			$('#config').css({"display": "none"});
			$('.btnLight').addClass("lighton");
			startTimer();
		}
		else{
			$('#config').css({"display": "block"});
			$('.btnLight').removeClass("lighton");
		}
	});

	
	$('#leg').click(function() {		
		$('#legendas').css({"display": "block"});
		$('#config').css({"display": "none"});
	});
	
	$('#voltarleg').click(function() {
		$('#legendas').css({"display": "none"});
		$('#config').css({"display": "block"});
	});

	
	$('#voltarqual').click(function() {
		$('#qualidade').css({"display": "none"});
		$('#config').css({"display": "block"});
	});

	$('#voltarvel').click(function() {			
		$('#velocidade').css({"display": "none"});
		$('#config').css({"display": "block"});
	});

	$('#qual').click(function() {
		if($('#qualidade').css('display') == 'none'){
			$('#qualidade').css({"display": "block"});
			$('#config').css({"display": "none"});
		}
		else {
			$('#qualidade').css({"display": "none"});
			startTimer();
		}
	});

	$('#vel').click(function() {
		if($('#velocidade').css('display') == 'none'){
			$('#velocidade').css({"display": "block"});
			$('#config').css({"display": "none"});
		}
		else {
			$('#velocidade').css({"display": "none"});
			startTimer();
		}
	});

	//JANELA COMPARTILHAMENTO
	$('.share').click(function() {
		if($('.botoes').css('display') == 'none'){
			$('.vidmochila').css({"display": "none"});
			$('.botoes').css({"display": "block"});
		}
		else {
			$('.botoes').css({"display": "none"});
			startTimer();
		}
	});

	//JANELA MOCHILA
	$('.mochila').click(function() {
		if($('.vidmochila').css('display') == 'none')
		{
			$('.botoes').css({"display": "none"});
			$('.vidmochila').css({"display": "block"});
		}
		else {
			$('.vidmochila').css({"display": "none"});
			startTimer();
		}
	});

	//sound button clicked
	$('.sound').click(function() {
		video[0].muted = !video[0].muted;
		$(this).toggleClass('muted');
		if(video[0].muted) {
			$('.volumeBar').css('width',0);
		}
		else{
			$('.volumeBar').css('width', video[0].volume*100+'%');
		}
	});

	//sound button clicked
	$('.sound').click(function() {
		video[0].muted = !video[0].muted;
		$(this).toggleClass('muted');
		if(video[0].muted) {
			$('.volumeBar').css('width',0);
		}
		else{
			$('.volumeBar').css('width', video[0].volume*100+'%');
		}
	});
		

	//barravolume
	$('.som').on('mouseenter', function() {
		$(".volume").css({"display": "block"})
	});
	
	$('.som').on('mouseleave', function(){
		$(".volume").css({"display": "none"})
	});

	//VIDEO EVENTS
	//video canplay event
	video.on('canplay', function() {
		$('.loading').fadeOut(100);
	});
		
	//video canplaythrough event
	//solve Chrome cache issue
	var completeloaded = false;
	video.on('canplaythrough', function() {
		completeloaded = true;
	});
		
	//video ended event
	video.on('ended', function() {
		$('.btnPlay').removeClass('paused');
		video[0].pause();
	});

	//video seeking event
	video.on('seeking', function() {
		//if video fully loaded, ignore loading screen
		if(!completeloaded) { 
			$('.loading').fadeIn(200);
		}	
	});
		
	//video seeked event
	video.on('seeked', function() { });
	
	//video waiting for more data event
	video.on('waiting', function() {
		$('.loading').fadeIn(200);
	});
	
	//VIDEO PROGRESS BAR
	//when video timebar clicked
	var timeDrag = false;	/* check for drag event */
	$('.progress').on('mousedown', function(e) {
		timeDrag = true;
		updatebar(e.pageX);
	});

	$(document).on('mouseup', function(e) {
		if(timeDrag) {
			timeDrag = false;
			updatebar(e.pageX);
		}
	});

	$(document).on('mousemove', function(e) {
		if(timeDrag) {
			updatebar(e.pageX);
		}
	});

	var updatebar = function(x) {
		var progress = $('.progress');
		
		//calculate drag position
		//and update video currenttime
		//as well as progress bar
		var maxduration = video[0].duration;
		var position = x - progress.offset().left;
		var percentage = 100 * position / progress.width();
		if(percentage > 100) {
			percentage = 100;
		}
		if(percentage < 0) {
			percentage = 0;
		}
		$('.timeBar').css('width',percentage+'%');	
		video[0].currentTime = maxduration * percentage / 100;
	};

	//VOLUME BAR
	//volume bar event
	var volumeDrag = false;
	$('.volume').on('mousedown', function(e) {
		volumeDrag = true;
		video[0].muted = false;
		$('.sound').removeClass('muted');
		updateVolume(e.pageX);
	});

	$(document).on('mouseup', function(e) {
		if(volumeDrag) {
			volumeDrag = false;
			updateVolume(e.pageX);
		}
	});

	$(document).on('mousemove', function(e) {
		if(volumeDrag) {
			updateVolume(e.pageX);
		}
	});

	var updateVolume = function(x, vol) {
		var volume = $('.volume');
		var percentage;
		//if only volume have specificed
		//then direct update volume
		if(vol) {
			percentage = vol * 100;
		}
		else {
			var position = x - volume.offset().left;
			percentage = 100 * position / volume.width();
		}
		
		if(percentage > 100) {
			percentage = 100;
		}
		if(percentage < 0) {
			percentage = 0;
		}
			
		//update volume bar and video volume
		$('.volumeBar').css('width',percentage+'%');	
		video[0].volume = percentage / 100;
		
		// cookie volume
		document.cookie = "volume="+percentage+"; expires=Fri, 31 Dec 9999 23:59:59 GMT";
		console.log("VOLUME ALTERADO: "+percentage);
			
		//change sound icon based on volume
		if(video[0].volume == 0){
			$('.sound').removeClass('sound2').addClass('muted');
		}
		else if(video[0].volume > 0.5){
			$('.sound').removeClass('muted').addClass('sound2');
		}
		else{
			$('.sound').removeClass('muted').removeClass('sound2');
		}
			
	};

	//Time format converter - 00:00
	var timeFormat = function(seconds){
		var m = Math.floor(seconds/60)<10 ? "0"+Math.floor(seconds/60) : Math.floor(seconds/60);
		var s = Math.floor(seconds-(m*60))<10 ? "0"+Math.floor(seconds-(m*60)) : Math.floor(seconds-(m*60));
		return m+":"+s;
	};
}