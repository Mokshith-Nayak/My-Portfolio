// Theme Toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  if (document.documentElement.classList.contains('dark')) {
    // Switch to light mode
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    toggle.textContent = '🌙'; // Moon icon for light mode
    localStorage.setItem('theme', 'light');
  } else {
    // Switch to dark mode
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    toggle.textContent = '☀️'; // Sun icon for dark mode
    localStorage.setItem('theme', 'dark');
  }
});

// Initialize theme on page load
const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.documentElement.classList.add(savedTheme);
toggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';


// Particles.js
particlesJS('particles-js', {
  "particles": {
    "number": { "value": 80 },
    "color": { "value": ["#6c5ce7", "#00cec9"] },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.3 },
    "size": { "value": 3 },
    "line_linked": { 
      "enable": true, 
      "distance": 150, 
      "color": "#6c5ce7", 
      "opacity": 0.2,
      "width": 1
    },
    "move": { 
      "enable": true, 
      "speed": 1.5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" },
      "resize": true
    }
  }
});

// Typed.js
var typed = new Typed('#typed', {
  strings: ['Full-Stack Developer', 'Software Engineer', 'UI/UX Enthusiast'],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true,
  backDelay: 2000
});

// Vanilla Tilt
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.2
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".nav", {
  duration: 0.8,
  y: '-100%',
  ease: "power2.out"
});

gsap.from(".hero-content", {
  duration: 1,
  opacity: 0,
  y: 50,
  ease: "power2.out",
  delay: 0.5
});

gsap.utils.toArray('.card').forEach(card => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      end: "bottom 20%",
    },
    opacity: 0,
    y: 50,
    duration: 0.7,
    ease: "power2.out",
  });
});

// Scroll Indicator
window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  const windowHeight = window.innerHeight;
  const bodyHeight = document.body.offsetHeight;

  const percentage = (scrollPosition / (bodyHeight - windowHeight)) * 100;
  document.querySelector('.scroll-line').style.width = percentage + '%';
});

// Navigation Scroll Effect
window.addEventListener('scroll', function() {
  const nav = document.getElementById('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});