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
