function openNav() { // открытие бокового меню (мобильный)
    document.getElementById("mySidenav").style.width = "100%";
}
  
function closeNav() { //закрытие бокового меню (мобильный)
    document.getElementById("mySidenav").style.width = "0";
}

function subnav() { // подменю десктоп (появление)
    sb = document.getElementById("sb");
    sb.style.display = "grid";
    
}

function subnavo() { // подменю десктоп (исчезновение)
    sb = document.getElementById("sb");
    sb.style.display = "none";
}

function subnavm() { //подменю в мобильном режиме
    let sbm = document.getElementsByClassName("subnav_item_m");
    for(let i=0; i<sbm.length; i++) {
    sbm[i].classList.toggle("subnav_item_m2");
    }
}
