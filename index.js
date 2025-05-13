document.addEventListener('DOMContentLoaded', () => {
  const scrollBtn = document.getElementById('scrollToTopBtn');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNav() {
    let currentSection = '';
    const viewportCenter = window.innerHeight / 2;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
        currentSection = section.getAttribute('id');
      }
    });

    // Fallback: force last section active when scrolled to bottom
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
      currentSection = sections[sections.length - 1].getAttribute('id');
    }

    navLinks.forEach(link => {
      const targetId = link.getAttribute('href').slice(1);
      if (targetId === currentSection) {
        link.classList.add('text-cyan-400');
      } else {
        link.classList.remove('text-cyan-400');
      }
    });
  }

function toggleScrollBtn() {
  const hash = window.location.hash;
  const scrollY = window.scrollY;
  console.log('scrollY:', scrollY); // Debugging log
  if (scrollY > 200) {
    scrollBtn.classList.remove('hidden');
    
    console.log('Button is visible');
  } else {
    scrollBtn.classList.add('hidden');
    console.log('Button is hidden');
  }
}


  window.addEventListener('scroll', () => {
    updateActiveNav();
    toggleScrollBtn();
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      setTimeout(updateActiveNav, 300);
    });
  });

  scrollBtn.addEventListener('click', () => {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    history.pushState(null, null, '#home');
  });

  updateActiveNav();
  toggleScrollBtn();
});
