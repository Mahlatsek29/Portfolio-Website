document.addEventListener('DOMContentLoaded', () => {

    const themeToggle = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;

    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlEl.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        htmlEl.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme); // Save preference
    });


    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false 
    });


    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });


    const typingText = document.getElementById('typing-text');
    const words = ["elegant websites.", "intuitive designs.", "magical experiences."];
    let wordIndex = 0, charIndex = 0, isDeleting = false;

    function type() {
        if (!typingText) return;
        const currentWord = words[wordIndex];
        const typeSpeed = isDeleting ? 75 : 150;
        
        typingText.textContent = currentWord.substring(0, charIndex);
        
        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }
        }
        
        setTimeout(type, isDeleting ? typeSpeed : (charIndex === currentWord.length ? 2000 : typeSpeed));
    }
    type();


    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

});