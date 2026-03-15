function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.body.style.overflow = 'hidden'; 
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            activeModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

let currentSlide = {}; 

function moveSlide(trackId, direction) {
    const track = document.getElementById(trackId);
    const slides = track.querySelectorAll('img');
    
    if (currentSlide[trackId] === undefined) {
        currentSlide[trackId] = 0;
    }

    currentSlide[trackId] += direction;

    if (currentSlide[trackId] < 0) {
        currentSlide[trackId] = slides.length - 1;
    } else if (currentSlide[trackId] >= slides.length) {
        currentSlide[trackId] = 0;
    }

    const slideWidth = slides[0].clientWidth;
    track.style.transform = 'translateX(-' + (currentSlide[trackId] * slideWidth) + 'px)';
}

function animateItem(element) {
    element.classList.remove('animate-pop');
    void element.offsetWidth; 
    element.classList.add('animate-pop');
    setTimeout(() => {
        element.classList.remove('animate-pop');
    }, 500);
}

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.classList.replace('ri-moon-line', 'ri-sun-line');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.replace('ri-moon-line', 'ri-sun-line');
    } else {
        localStorage.setItem('theme', 'light');
        themeIcon.classList.replace('ri-sun-line', 'ri-moon-line');
    }
});