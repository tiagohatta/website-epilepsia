function setCookie(cname,cvalue) {
    document.cookie = cname+"="+cvalue+";";
    console.log("cname:"+cname+", cvalue:"+cvalue);
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
        if (user != "") {
          console.log("nome do usuario: "+user);
    } else {
                user=myip;
          console.log("nome do usuario: "+user);
       setCookie("username", user);
           
       }

           
       
    
}