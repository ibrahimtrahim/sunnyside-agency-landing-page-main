let headerHumberger = document.getElementById("header__humberger");
let menu = document.getElementById("menu");
let toggle = document.getElementById("toggle");

toggle.style.visibility = "hidden";



headerHumberger.onclick = function(){
    if(toggle.style.visibility == "hidden"){
        menu.src = "./app/images/icon-close.svg";
        toggle.style.visibility = "visible"
    }
    else {
        menu.src = "./app/images/icon-hamburger.svg";
        toggle.style.visibility = "hidden"
    }
}