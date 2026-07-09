// ===============================
// Portfolio JavaScript
// Author: Ronn Mwangi
// GitHub: https://github.com/RonnKarimi
// ===============================

// Current Year in Footer
const yearElements = document.querySelectorAll(".current-year");

yearElements.forEach((year) => {
    year.textContent = new Date().getFullYear();
});

// ===============================
// Sticky Navigation
// ===============================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.classList.add("sticky");

    } else {

        navbar.classList.remove("sticky");

    }

});

// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===============================
// Fade In Animation
// ===============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(

".project-card, .skill-card, .contact-card, .card"

).forEach((el)=>{

    observer.observe(el);

});

// ===============================
// Contact Form Validation
// ===============================

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name = form.querySelector('input[type="text"]');

const email = form.querySelector('input[type="email"]');

const message = form.querySelector("textarea");

if(

name.value.trim()==="" ||

email.value.trim()==="" ||

message.value.trim()===""

){

alert("Please fill in all required fields.");

return;

}

alert(

"Thank you, " +

name.value +

"! Your message has been received."

);

form.reset();

});

}

// ===============================
// Typing Effect
// ===============================

const typingText = document.querySelector(".typing");

const words = [

"Information Technology Student",

"Web Developer",

"Programmer",

"GitHub Enthusiast",

"Future Software Engineer"

];

let wordIndex = 0;

let letterIndex = 0;

let deleting = false;

function typeEffect(){

if(!typingText) return;

const currentWord = words[wordIndex];

if(!deleting){

typingText.textContent =

currentWord.substring(0,letterIndex++);

if(letterIndex>currentWord.length){

deleting=true;

setTimeout(typeEffect,1500);

return;

}

}else{

typingText.textContent =

currentWord.substring(0,letterIndex--);

if(letterIndex===0){

deleting=false;

wordIndex=(wordIndex+1)%words.length;

}

}

setTimeout(typeEffect,deleting?50:100);

}

typeEffect();

// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="20px";
topBtn.style.right="20px";
topBtn.style.padding="10px 15px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.fontSize="18px";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ===============================
// Console Message
// ===============================

console.log("Welcome to Ronn Mwangi's Portfolio!");

console.log("GitHub: https://github.com/RonnKarimi");
