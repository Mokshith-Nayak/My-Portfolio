// Update the toggleTheme function
const toggleTheme = () => {
  const htmlEl = document.documentElement;
  const isDark = htmlEl.classList.contains('dark');
  
  // Force remove both classes first to prevent glitches
  htmlEl.classList.remove('dark', 'light');
  
  // Apply new theme
  if (isDark) {
    htmlEl.classList.add('light');
    localStorage.setItem('theme', 'light');
    document.getElementById('theme-toggle').textContent = '🌙';
  } else {
    htmlEl.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    document.getElementById('theme-toggle').textContent = '☀️';
  }
  
  // Force redraw to prevent visual glitches
  document.body.offsetHeight;
};

// Initialize theme
const initTheme = () => {
  const savedTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.classList.add(savedTheme);
  document.getElementById('theme-toggle').textContent = savedTheme === 'dark' ? '☀️' : '🌙';
};

// Navigation scroll effect
const initNav = () => {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
};

// Initialize animations
const initAnimations = () => {
  // GSAP animations
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

  gsap.utils.toArray('[data-animate]').forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 50,
      duration: 0.7,
      ease: "power2.out"
    });
  });
};

// Initialize Typed.js
const initTyped = () => {
  new Typed('#typed', {
    strings: ['Full-Stack Developer', 'Software Engineer', 'UI/UX Enthusiast'],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true,
    backDelay: 2000
  });
};

// Initialize Vanilla Tilt
const initTilt = () => {
  VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2
  });
};

// Initialize Particles.js
const initParticles = () => {
  particlesJS('particles-js', {
    particles: {
      number: { value: 80 },
      color: { 
        value: document.documentElement.classList.contains('dark') ? 
          ["#6c5ce7", "#00cec9"] : ["#3a56e8", "#02a8a8"]
      },
      shape: { type: "circle" },
      opacity: { value: 0.3 },
      size: { value: 3 },
      line_linked: { 
        enable: true, 
        distance: 150, 
        color: "#6c5ce7", 
        opacity: 0.2,
        width: 1
      },
      move: { 
        enable: true, 
        speed: 1.5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      }
    }
  });
};

// Set current year in footer
const setCurrentYear = () => {
  document.getElementById('year').textContent = new Date().getFullYear();
};

// Load external libraries
const loadLibraries = () => {
  const scripts = [
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js',
    'https://cdn.jsdelivr.net/npm/typed.js@2.0.12',
    'https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.2/vanilla-tilt.min.js',
    'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js'
  ];

  scripts.forEach(src => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
  });
};

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
  setCurrentYear();
  
  // Theme toggle event
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  
  // Load heavy libraries after a delay
  setTimeout(() => {
    loadLibraries();
    
    // Initialize libraries after they're loaded
    const checkInterval = setInterval(() => {
      if (window.Typed && window.VanillaTilt && window.particlesJS) {
        clearInterval(checkInterval);
        initTyped();
        initTilt();
        initParticles();
        initAnimations();
      }
    }, 100);
  }, 1000);
});



// Realistic Bubble Animation
function createRealisticBubbles() {
  const container = document.createElement('div');
  container.className = 'bubble-container';
  document.body.appendChild(container);

  function spawnBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    // Random size between 30px and 100px
    const size = Math.floor(Math.random() * 70) + 30;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    
    // Random starting position at bottom
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.bottom = `-${size}px`;
    
    // Random movement path
    const moveX = (Math.random() - 0.5) * 200;
    bubble.style.setProperty('--move-x', `${moveX}px`);
    bubble.style.setProperty('--move-y', `${-window.innerHeight - size}px`);
    
    // Random reflection highlights
    bubble.style.filter = `hue-rotate(${Math.random() * 60}deg)`;
    
    container.appendChild(bubble);
    
    // Remove bubble after animation
    setTimeout(() => bubble.remove(), 15000);
  }

  // Initial bubbles
  setTimeout(spawnBubble, 1000);
  
  // Continuous spawning
  function scheduleNextBubble() {
    const delay = 10000 + Math.random() * 5000; // 10-15 seconds
    setTimeout(() => {
      spawnBubble();
      scheduleNextBubble();
    }, delay);
  }
  
  scheduleNextBubble();
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', createRealisticBubbles);
