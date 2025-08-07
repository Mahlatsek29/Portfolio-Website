document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Functionality
    const themeToggle = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;

    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlEl.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        htmlEl.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Add a subtle animation to the toggle
        themeToggle.style.transform = 'scale(0.8)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 150);
    });

    // Header Scroll Effect
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    });


    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1200,
        easing: 'ease-out-cubic',
        once: true,
        mirror: false,
        offset: 100
    });

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on nav items
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('show');
            hamburger.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('show');
            hamburger.classList.remove('active');
        }
    });


    // Enhanced Typing Animation
    const typingText = document.getElementById('typing-text');
    const words = ["stunning websites.", "modern interfaces.", "digital experiences.", "creative solutions."];
    let wordIndex = 0, charIndex = 0, isDeleting = false;

    function type() {
        if (!typingText) return;
        const currentWord = words[wordIndex];
        const typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex < currentWord.length) {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        } else if (isDeleting && charIndex > 0) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }
        }
        
        const delay = isDeleting ? typeSpeed : (charIndex === currentWord.length ? 2500 : typeSpeed);
        setTimeout(type, delay);
    }
    
    // Start typing animation after a short delay
    setTimeout(type, 1000);

    // Smooth Scroll to Top
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add parallax effect to hero section
    const hero = document.querySelector('#hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

});