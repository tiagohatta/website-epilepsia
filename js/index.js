/**
 * Javascript code for the index page of Epilepsy Webdocumentary
*/

$(document).ready(function(){

    /* Configure the main page */
    mainPage();

    /* Broken links, just show a little message for the user */
    $("#adulta").click( function(ev){
        ev.preventDefault();
        alert("Esse vídeo ainda não está disponível :(", "Aviso");
    });
    $("#velhice").click( function(ev){
        ev.preventDefault();
        alert("Esse vídeo ainda não está disponível :(", "Aviso");
        });

});

/* If it happens a resize of the window, it's necessary to adapt the main page */
$(window).bind('resize', function () { 
    mainPage();
});

/* Function which configures the main page according with the user's window width and height*/
function mainPage(){
    var width = $(window).width();
    var height = $(window).height();

    if (width >= 1145){
        $("#landscape").show();
        $("#portrait").hide();
        $('#main-landscape').removeAttr('viewBox');
        /* https://api.jquery.com/each/ */
        $('#main-landscape').each(function () { $(this)[0].setAttribute('viewBox', '-226 -60 1800 1426') });
    }
    else if (width < 1145 && width >= 725){
        $("#landscape").show();
        $("#portrait").hide();
        var y= -100 +(((width-1145)*5)/36);
        var tamx = (((width-1145)*500)/360)+1800;
        var x= (((width-1145)*256)/(-360))-226; 
        $('#main-landscape').removeAttr('viewBox');
        $('#main-landscape').each(function () { $(this)[0].setAttribute('viewBox', ''+x+' ' +y+' '+tamx+ ' 1426') });
    }
    else if (width > 487 && width < 725){
        $("#portrait").show();
        $("#landscape").hide();
        var y = -350 + ((width-487)*275/298);
        $('#main-portrait').removeAttr('viewBox');
        $('#main-portrait').each(function () { $(this)[0].setAttribute('viewBox', '75 ' +y+' 1180 1584') });
    }
    else if (width <= 487){
        $("#portrait").show();
        $("#landscape").hide();
        $('#main-portrait').removeAttr('viewBox');
        $('#main-portrait').each(function () { $(this)[0].setAttribute('viewBox', '75 -350 1180 1584') });	
    }

}