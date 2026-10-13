// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    if(navLinks.style.display === "flex")
    {
        navLinks.style.display = "none";
    }
    else
    {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
    }

});

// ACCORDION

const accordions =
document.querySelectorAll(".accordion-header");

accordions.forEach(item => {

    item.addEventListener("click", () => {

        item.parentElement.classList.toggle("active");

    });

});

// COUNTERS

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {

        const target =
        +counter.getAttribute("data-target");

        const count =
        +counter.innerText;

        const increment =
        target / 100;

        if(count < target){

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(update,20);

        }else{

            counter.innerText = target;

        }

    };

    update();

});

// SCROLL ANIMATION

window.addEventListener("scroll", () => {

    document.querySelectorAll("section")
    .forEach(section => {

        const top =
        section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            section.classList.add("active");
            section.classList.add("reveal");

        }

    });

});

// TABS

const tabs =
document.querySelectorAll(".tab-btn");

const contents =
document.querySelectorAll(".tab-content");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(btn =>
        btn.classList.remove("active"));

        contents.forEach(content =>
        content.classList.remove("active"));

        tab.classList.add("active");

        document
        .getElementById(
            tab.dataset.tab
        )
        .classList.add("active");

    });

});

// SMOOTH SCROLL

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(e){

            e.preventDefault();

            document
            .querySelector(
                this.getAttribute("href")
            )
            ?.scrollIntoView({

                behavior:"smooth"

            });

        }

    );

});

// TESTIMONIAL SLIDER

const testimonials =
document.querySelectorAll(".testimonial");

let current = 0;

setInterval(() => {

    testimonials[current]
    .classList.remove("active");

    current++;

    if(current >= testimonials.length){

        current = 0;

    }

    testimonials[current]
    .classList.add("active");

},3000);


// INTERSECTION OBSERVER

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add(
                "active"
            );

        }

    });

});

document
.querySelectorAll("section")
.forEach(section => {

    observer.observe(section);

});

const glow =
document.getElementById("cursor-glow");

document.addEventListener(
"mousemove",
(e)=>{

glow.style.left =
e.clientX - 125 + "px";

glow.style.top =
e.clientY - 125 + "px";

});

window.onload = ()=>{

document.getElementById("loader")
.style.display="none";

};
window.addEventListener(
"scroll",
()=>{

const scrollY =
window.scrollY;

document.querySelector(
".hero-shape"
).style.transform =

`translateY(${scrollY*0.3}px)`;

});

window.addEventListener("scroll", function() {

    const brand = document.querySelector(".brand-container");

    if(window.scrollY > 100){
        brand.style.minHeight = "90px";
    }else{
        brand.style.minHeight = "250px";
    }

});