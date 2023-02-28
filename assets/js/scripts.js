'use strict';

// Add Event On Element

const addEventOnElement = function (element,type,callback) {

    if(element.length > 1) {
        for(let i=0; i < element.length; i++) {
            element[i].addEventListener(type,callback)
        }
    }else {
        element.addEventListener(type,callback);
    }
}



// NavBar Toggle
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () { 
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");
}


addEventOnElement(navTogglers,"click",toggleNavbar);


const closeNavbar = function () { 
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("active");
}

addEventOnElement(navbarLinks,"click",closeNavbar);


// Header & back to top active when scroll down to 100px
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const showElementOnScroll = function () {  
    if(window.scrollY > 100){
        header.classList.add("active");
        backTopBtn.classList.add("active");
    }else{
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
}


addEventOnElement(window,"scroll",showElementOnScroll);


// Product Filter

const filterBtnS = document.querySelectorAll("[data-filter-btn]");
const filterBox = document.querySelector("[data-filter]"); 

let lastClickedFilterBtn = filterBtnS[0];

const filter = function () {
    lastClickedFilterBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedFilterBtn = this;

    filterBox.setAttribute("data-filter", this.dataset.filterBtn);
}

addEventOnElement(filterBtnS , "click" , filter);


