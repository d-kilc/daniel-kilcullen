window.onscroll = function() {scrollFunction()};

const avi = document.getElementById("avi");
const navArea = document.getElementById("navArea");
const bio = document.querySelector("div#bio");
const summary = document.querySelector("div#summary");
const navLinksDiv = document.querySelector("#navLinks");
const navLinks = document.querySelector("#navLinks ul");
const socials = document.querySelector("div#socials");
const secondaryHeaders = document.querySelector("#secondaryHeaders");

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navArea.style.height = "100px";
    bio.style.display = "none";
    secondaryHeaders.style.display = "none";
    summary.style.display = "flex";
    summary.style.width = "100%";
    avi.style.height = "80px";
    avi.style.margin = "auto 15px auto 15px";
    avi.style.left = "15px";
    navLinksDiv.style.margin = "auto auto auto 30px";
    navLinks.style.display = "flex";
    // navLinks.style.float = "left";
    navLinks.style.alignItems = "center";
    navLinks.style.paddingBottom = "0px";
    socials.style.marginLeft = "auto";
  } else {
    navArea.style.height = "100%";
    bio.style.display = "block";
    secondaryHeaders.style.display = "block";
    summary.style.display = "block";
    summary.style.width = "30%";
    avi.style.height = "300px";
    navLinksDiv.style.margin = "auto";
    navLinks.style.display = "block";
    // navLinks.style.float = "left";
    navLinks.style.margin = "auto";
    navLinks.style.paddingBottom = "10px";
    socials.style.margin = "auto 15px auto 15px";
  }
}