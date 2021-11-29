window.onscroll = function() {scrollFunction()};

const menuBtn = document.querySelector("input#check");
const menu = document.querySelector("div#menu");
const menuItems = document.querySelectorAll("div#menu div.menuItem");
const avi = document.querySelector("div#nav div#navLeft img#avi");
const nav = document.querySelector("div#nav");
const navLeft = document.querySelector("div#navLeft");
const navRight = document.querySelector("div#navRight");
const header = document.querySelector("div#navLeft div#headline h1");
const secondaryHeaders = document.querySelector("div#secondaryHeaders");
const socials = document.querySelector("div#socials");
const navLinks = document.querySelector("div#navLinks");
const bioLink = document.getElementById("bioLink")
const navList = document.querySelector("ul#navList");

const skills = document.querySelector("div#skills");
const projects = document.querySelector("div#projects");

//doesnt fucking work lol
// window.onload = (event) => {
//     console.log('page loaded');
//     window.scrollTo(0,0)
// };

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function toggleMenu() {
    if( menu.style.width === "0px" || menu.style.width === "") {
        menu.style.width = "600px";
    } else {
        menu.style.width = "0px";
    }
}

function scrollFunction() {
    if (window.screen.width >= 450) { //larger screens
        if (document.body.scrollTop > 100|| document.documentElement.scrollTop > 100) {
            nav.style.height = "10vh";
            nav.style.position = "fixed";
            avi.style.height = "8vh";
            avi.style.marginLeft = "15px";
            avi.style.marginRight = "15px";
            avi.style.paddingTop = "0px";
            avi.style.paddingBottom = "0px";
            navLeft.style.display = "flex";
            navLeft.style.width = "100vw";
            navLeft.style.height = "10vh";
            navLeft.style.margin = "auto";
            navRight.style.display = "none";
            header.style.margin = "32px auto auto 15px";
            header.style.lineHeight = "1"
            secondaryHeaders.style.display = "none";
            navLinks.style.margin = "auto";
            navList.style.display = "flex";
            navList.style.margin = "auto";
            socials.style.display = "flex";
            socials.style.marginRight = "25px";
    
        } else {
            nav.style.height = "100vh";
            avi.style.height = "300px";
            avi.style.margin = "auto";
            avi.style.paddingTop = "10px";
            avi.style.paddingBottom = "10px";
            navLeft.style.display = "block";
            navLeft.style.width = "30vw";
            navLeft.style.height = "auto";
            navRight.style.display = "block";
            header.style.margin = "auto ";
            secondaryHeaders.style.display = "block";
            navList.style.display = "block";
            socials.style.display = "block";
            socials.style.margin = "auto";
    
        }
    } else { //mobile
        if (document.body.scrollTop > 100|| document.documentElement.scrollTop > 100) {
            nav.style.height = "10vh";
            nav.style.position = "fixed";
            nav.style.textAlign = "left";
            avi.style.height = "8vh";
            avi.style.width = "auto"
            avi.style.marginLeft = "15px";
            avi.style.marginRight = "15px";
            avi.style.paddingTop = "0px";
            avi.style.paddingBottom = "0px";
            navLeft.style.display = "block";
            navLeft.style.width = "auto";
            navLeft.style.height = "10vh";
            navLeft.style.margin = "auto";
            navLeft.style.display = "flex";
            navLeft.style.justifyContent = "left";
            navRight.style.display = "none";
            header.style.margin = "auto ";
            secondaryHeaders.style.display = "none";
            navLinks.style.margin = "none";
            navList.style.display = "none";
            // navList.style.margin = "auto";
            // socials.style.display = "none";
            // socials.style.marginRight = "25px";
    
        } else {
            nav.style.height = "100vh";
            avi.style.width = "40%";
            avi.style.height = "auto";
            avi.style.margin = "auto";
            avi.style.paddingTop = "10px";
            avi.style.paddingBottom = "10px";
            navLeft.style.display = "flex";
            navLeft.style.justifyContent = "center";
            navLeft.style.width = "90vw";
            navLeft.style.height = "28vh";
            navRight.style.display = "block";
            navRight.style.height = "70vh"
            header.style.margin = "auto";
            secondaryHeaders.style.display = "block";
            navList.style.display = "none";
            // socials.style.display = "block";
            // socials.style.margin = "auto";
    
        }
    }


    // if (document.body.scrollTop > 100|| document.documentElement.scrollTop > 100) {
    //     nav.style.height = "10vh";
    //     nav.style.position = "fixed";
    //     avi.style.height = "8vh";
    //     avi.style.marginLeft = "15px";
    //     avi.style.marginRight = "15px";
    //     avi.style.paddingTop = "0px";
    //     avi.style.paddingBottom = "0px";
    //     navLeft.style.display = "flex";
    //     navLeft.style.width = "100vw";
    //     navLeft.style.height = "10vh";
    //     navLeft.style.margin = "auto";
    //     navRight.style.display = "none";
    //     header.style.marginLeft = "15px";
    //     secondaryHeaders.style.display = "none";
    //     navLinks.style.margin = "auto";
    //     navList.style.display = "flex";
    //     navList.style.margin = "auto";
    //     socials.style.display = "flex";
    //     socials.style.marginRight = "25px";

    // } else {
    //     nav.style.height = "100vh";
    //     avi.style.height = "300px";
    //     avi.style.margin = "auto";
    //     avi.style.paddingTop = "10px";
    //     avi.style.paddingBottom = "10px";
    //     navLeft.style.display = "block";
    //     navLeft.style.width = "30vw";
    //     navLeft.style.height = "auto";
    //     navRight.style.display = "block";
    //     header.style.margin = "auto";
    //     secondaryHeaders.style.display = "block";
    //     navList.style.display = "block";
    //     socials.style.display = "block";
    //     socials.style.margin = "auto";

    // }

}

bioLink.addEventListener('click', topFunction);
menuBtn.addEventListener('click', toggleMenu);

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click',toggleMenu);
}
