// Initialize Lucide Icons
lucide.createIcons();

// Scroll Fade In/Out Animation
document.addEventListener('DOMContentLoaded', () => {

    // ── Hero Background Slideshow ──────────────────────────────────────
    const slides = document.querySelectorAll('.hero-slide');
    let current  = 0;

    function nextSlide() {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }

    setInterval(nextSlide, 5000); // crossfade every 5 seconds


    // ── Sponsors Background Slideshow ──────────────────────────────────
    const sponsorSlides = document.querySelectorAll('.sponsors-slide');
    let sponsorCurrent  = 0;

    function nextSponsorSlide() {
        sponsorSlides[sponsorCurrent].classList.remove('active');
        sponsorCurrent = (sponsorCurrent + 1) % sponsorSlides.length;
        sponsorSlides[sponsorCurrent].classList.add('active');
    }

    // Offset by 2s so hero and sponsors don't change at the same time
    setTimeout(() => {
        setInterval(nextSponsorSlide, 6000);
    }, 2000);

    // ── Scroll Fade Animations ─────────────────────────────────────────
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-element').forEach(el => observer.observe(el));

    // ── Mobile Menu Toggle ─────────────────────────────────────────────
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav           = document.querySelector('.radiocast-nav');
    const iconMenu      = document.querySelector('.icon-menu');
    const iconClose     = document.querySelector('.icon-close');

    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            const isOpen = nav.classList.contains('active');
            iconMenu.style.display  = isOpen ? 'none'  : 'block';
            iconClose.style.display = isOpen ? 'block' : 'none';
        });
    }
});
