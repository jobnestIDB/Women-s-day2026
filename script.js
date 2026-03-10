const section = document.querySelector('.scroll-section');
const cards = [...document.querySelectorAll('.card')];
const manymore = document.querySelector('.manymore');

const center = Math.floor(cards.length / 2);

let isPlaying = false;

function resetCards() {
  cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'scale(.7)';
  });

  cards[center].style.opacity = 1;
  cards[center].style.transform = 'scale(1)';

  manymore.style.opacity = 0;
}

function revealCards() {
  if (isPlaying) return;
  isPlaying = true;

  cards.forEach((card, i) => {
    setTimeout(() => {
      card.style.opacity = 1;
      card.style.transform = 'scale(1)';
    }, Math.abs(i - center) * 200);
  });

  setTimeout(() => {
    manymore.style.opacity = 1;
  }, 1200);
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      resetCards();

      
      setTimeout(() => {
        revealCards();
      }, 150);
    } else {
    
      isPlaying = false;
      resetCards();
    }

  });
}, {
  threshold: 0.3
});

observer.observe(section);

resetCards();

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});

const eventStart = new Date("March 28, 2026 09:00:00").getTime();
const eventEnd = new Date("March 29, 2026 18:00:00").getTime();

const countdown = setInterval(function () {

  const now = new Date().getTime();

  // BEFORE EVENT
  if (now < eventStart) {

    const distance = eventStart - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  }

  // DURING EVENT
  else if (now >= eventStart && now <= eventEnd) {

    clearInterval(countdown);

    document.querySelector(".countdown").innerHTML =
      "<h3>The Celebration Has Begun!</h3><p>Join Us on 28th and 29 March</p>";
  }

  // AFTER EVENT
  else {

    clearInterval(countdown);

    document.querySelector(".countdown").innerHTML =
      "<h3>Thank You for Being Part of Women's Day 2026</h3><p>See You Next Year</p>";
  }

}, 1000);

//FAQ


const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

question.addEventListener("click", () => {

const faqItem = question.parentElement;
const answer = faqItem.querySelector(".faq-answer");

faqItem.classList.toggle("active");

if(answer.style.maxHeight){
answer.style.maxHeight = null;
}
else{
answer.style.maxHeight = answer.scrollHeight + "px";
}

});

});

const registerBtn = document.querySelector(".register-btn");

if(registerBtn){
registerBtn.addEventListener("click",()=>{
for(let i=0;i<30;i++){
let conf=document.createElement("span");
conf.className="confetti";
conf.style.left=Math.random()*100+"%";
document.body.appendChild(conf);

setTimeout(()=>conf.remove(),2000);
}
});
}

// LIGHTBOX

// LIGHTBOX

const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 0;

galleryImages.forEach((img,index)=>{
  img.addEventListener("click",()=>{
    currentIndex = index;
    lightbox.style.display="flex";
    lightboxImg.src = img.src;
  });
});

lightboxClose.addEventListener("click",()=>{
  lightbox.style.display="none";
});

nextBtn.addEventListener("click",(e)=>{
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
});

prevBtn.addEventListener("click",(e)=>{
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
});

lightbox.addEventListener("click",(e)=>{
  if(e.target !== lightboxImg){
    lightbox.style.display="none";
  }
});


/* HAMBURGER MENU */

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

/* open / close menu */

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

/* close menu when nav item clicked */

document.querySelectorAll(".brand-nav a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});