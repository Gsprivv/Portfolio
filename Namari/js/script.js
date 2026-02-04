// Select elements
const slides = document.querySelector('.slides');
const upButton = document.getElementById('up-button');
const downButton = document.getElementById('down-button');

// Track current slide index
let currentIndex = 0;

// Function to update the slide position
function updateSlidePosition() {
    const slideHeight = slides.firstElementChild.clientHeight;
    slides.style.transform = `translateY(-${currentIndex * slideHeight}px)`;
}

// Add event listeners for buttons
upButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlidePosition();
    }
});

downButton.addEventListener('click', () => {
    if (currentIndex < slides.children.length - 1) {
        currentIndex++;
        updateSlidePosition();
    }
});

function toggleText(button) {
    const container = button.parentElement;
    const shortText = container.querySelector('.short-text');
    const fullText = container.querySelector('.full-text');
    
    if (fullText.style.display === 'none') {
        shortText.style.display = 'none';
        fullText.style.display = 'inline';
        button.textContent = 'Read Less';
    } else {
        shortText.style.display = 'inline';
        fullText.style.display = 'none';
        button.textContent = 'Read More';
    }
}

// Gallery Animations
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.animate-gallery');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }
        });
    });

    galleryItems.forEach(item => observer.observe(item));
});

// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'dark') {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
}

// Check for saved theme preference
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (name.length < 2) {
        alert('Please enter a valid name');
        return false;
    }
    
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    if (subject.length < 3) {
        alert('Please enter a valid subject');
        return false;
    }
    
    if (message.length < 10) {
        alert('Please enter a detailed message (minimum 10 characters)');
        return false;
    }
    
    return true;
}

// Project Slideshow Enhancement
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const upButton = document.getElementById('up-button');
    const downButton = document.getElementById('down-button');
    let currentSlide = 0;
    let autoSlideInterval;

    function showSlide(index) {
        slides.forEach(slide => {
            slide.style.opacity = '0';
            slide.classList.remove('active');
        });
        
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        
        slides[currentSlide].style.opacity = '1';
        slides[currentSlide].classList.add('active');
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000); // Change slide every 5 seconds
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    upButton.addEventListener('click', () => {
        stopAutoSlide();
        showSlide(currentSlide - 1);
        startAutoSlide();
    });

    downButton.addEventListener('click', () => {
        stopAutoSlide();
        showSlide(currentSlide + 1);
        startAutoSlide();
    });

    // Start auto-sliding
    startAutoSlide();
    
    // Stop auto-sliding when hovering over slides
    document.querySelector('.slideshow-container').addEventListener('mouseenter', stopAutoSlide);
    document.querySelector('.slideshow-container').addEventListener('mouseleave', startAutoSlide);
});
