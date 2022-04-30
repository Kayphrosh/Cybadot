let toggleNavstatus = false;
let getNavcontainer = document.querySelector('.nav-active')
let getNavCon = document.querySelector('.navbar')
let openNav = document.querySelector('#open')
let closeNav = document.querySelector('#close')
let toggleNav = function() {
    

    if (window.innerWidth > 768 || toggleNavstatus === false) {
        getNavcontainer.style.display = "flex";
        getNavcontainer.style.visibility = "visible";
        getNavcontainer.style.minHeight = "60vh";
        openNav.style.display = 'none'
        closeNav.style.display = 'flex'
        toggleNavstatus = true
        
    }

    else if (toggleNavstatus === true)  {
        getNavcontainer.style.display =  "none";
        getNavcontainer.style.visibility = "hidden";
        getNavcontainer.style.minHeight = "0";
        openNav.style.display = 'flex'
        closeNav.style.display = 'none'
        toggleNavstatus = false;

    }
    
}