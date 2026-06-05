// ================= NAVBAR EFFECT =================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// ================= SCROLL REVEAL =================

// const revealElements = document.querySelectorAll(".reveal, .reveal-delay");

// function revealOnScroll() {
//     revealElements.forEach((element) => {
//         const windowHeight = window.innerHeight;
//         const elementTop = element.getBoundingClientRect().top;

//         if (elementTop < windowHeight - 120) {
//             element.classList.add("active");
//         }
//     });
// }

// window.addEventListener("scroll", revealOnScroll);
// revealOnScroll();


// ================= NAV ACTIVE LINKS =================

const links = document.querySelectorAll(".nav-links a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});


// ================= MOBILE MENU =================

// document.addEventListener("DOMContentLoaded", () => {
//     const menuIcon = document.getElementById("menuIcon");
//     const navLinks = document.querySelector(".nav-links");

//     if (menuIcon && navLinks) {
//         menuIcon.addEventListener("click", () => {
//             navLinks.classList.toggle("active");
//             menuIcon.classList.toggle("active");
//         });
//     }
// });


const menuIcon = document.getElementById("menuIcon");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuIcon.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuIcon.classList.remove("active");
    overlay.classList.remove("active");
});

// ================= LANG SWITCH =================

// function toggleLang() {
//     const path = window.location.pathname;

//     if (path.includes("home-ar.html")) {
//         window.location.href = "./index.html";
//     } else {
//         window.location.href = "./home-ar.html";
//     }
// }

function toggleLang() {
    const page = window.location.pathname.split("/").pop();

    if (page === "home-ar.html") {
        window.location.href = "index.html";
    } else {
        window.location.href = "home-ar.html";
    }
}


// ================= LANGUAGE INIT =================

window.addEventListener("load", () => {
    const savedLang = localStorage.getItem("lang") || "en";

    document.body.classList.add(savedLang);

    const langText = document.getElementById("langText");

    if (langText) {
        langText.innerText = savedLang === "ar" ? "AR" : "EN";
    }
});


// ================= WHY CARDS SCROLL ANIMATION =================

const whyCards =
document.querySelectorAll(".why-card");

function revealCards(){

    whyCards.forEach((card,index)=>{

        const windowHeight =
        window.innerHeight;

        const cardTop =
        card.getBoundingClientRect().top;

        if(cardTop < windowHeight - 80){

            setTimeout(()=>{

                card.classList.add("active");

            },index * 150);

        }

    });

}

window.addEventListener(
"scroll",
revealCards
);

revealCards();


// ================= COURSES ANIMATION =================

const courseCards =
document.querySelectorAll(".course-card");

function revealCourses(){

    courseCards.forEach((card,index)=>{

        const windowHeight =
        window.innerHeight;

        const cardTop =
        card.getBoundingClientRect().top;

        if(cardTop < windowHeight - 80){

            setTimeout(()=>{

                card.classList.add("active");

            },index * 140);

        }

    });

}

window.addEventListener(
"scroll",
revealCourses
);

revealCourses();



// ================= fac toggle =================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    faqItems.forEach((faq) => {

      if (faq !== item) {
        faq.classList.remove("open");
      }

    });

    item.classList.toggle("open");

  });

});

// REVEAL ANIMATION

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }

  });

}, {
  threshold: 0.2
});

reveals.forEach((element) => {
  observer.observe(element);
});


// ----------------------- Animation ---------------------
const revealElements = document.querySelectorAll(".reveal, .reveal-delay");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


//  ABOUT PAGE //////////////////////////////////////////////////////////
//  ABOUT PAGE //////////////////////////////////////////////////////////

const storyImages = document.querySelector(".story-images");
const storyContent = document.querySelector(".story-content");

function activateStory() {
  storyImages.classList.add("active");
  storyContent.classList.add("active");
}

// يظهر فور فتح الصفحة
window.addEventListener("load", activateStory);



const miniCta=
document.querySelector(".mini-cta-box");

window.addEventListener("scroll",()=>{

  const top=
  miniCta.getBoundingClientRect().top;

  if(top < window.innerHeight - 100){

    miniCta.classList.add("active");
  }

});


//  courses PAGE //////////////////////////////////////////////////////////
//  courses PAGE //////////////////////////////////////////////////////////

const filterButtons=document.querySelectorAll(".filter-btn");

const cards=document.querySelectorAll(".course-card");

filterButtons.forEach(button=>{

        button.addEventListener("click",()=>{

                filterButtons.forEach(btn=>{

                        btn.classList.remove("active");

                });

                button.classList.add("active");

                const filterValue=button.getAttribute("data-filter");

                cards.forEach(card=>{

                        const category=card.getAttribute("data-category");

                        if(filterValue==="all"||category===filterValue){

                                card.style.display="block";

                                card.classList.remove(
                                        "left-show",
                                        "right-show",
                                        "bottom-show"
                                );

                                void card.offsetWidth;

                                if(card.classList.contains("from-left")){

                                        card.classList.add("left-show");

                                }else if(card.classList.contains("from-right")){

                                        card.classList.add("right-show");

                                }else{

                                        card.classList.add("bottom-show");

                                }

                        }else{

                                card.style.display="none";

                        }

                });

        });

});


//  pricing PAGE //////////////////////////////////////////////////////////
//  pricing PAGE //////////////////////////////////////////////////////////

const pricingCards=document.querySelectorAll(".pricing-card");

const pricingObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.2
});

pricingCards.forEach(card=>{

    pricingObserver.observe(card);

});



//  contact PAGE //////////////////////////////////////////////////////////
//  contact PAGE //////////////////////////////////////////////////////////