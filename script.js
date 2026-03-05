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

      // tiny delay ensures SAME behavior every time
      setTimeout(() => {
        revealCards();
      }, 150);
    } else {
      // fully reset when leaving
      isPlaying = false;
      resetCards();
    }

  });
}, {
  threshold: 0.3
});

observer.observe(section);

// initial state
resetCards();

