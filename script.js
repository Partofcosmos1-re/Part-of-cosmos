// Main JavaScript file for Part of Cosmos website

// DOM Elements
let contactForm;
let newsletterForm;
let galleryItems;
let themeToggle;

// Initialize the application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeForms();
    initializeGallery();
    initializeThemeToggle();
    initializeSocialSharing();
});

// Form handling
function initializeForms() {
    // Contact form
    contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }

    // Newsletter form
    newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
}

// Handle contact form submission
function handleContactSubmit(event) {
    event.preventDefault();
    
    const name = contactForm.querySelector('#name').value;
    const email = contactForm.querySelector('#email').value;
    const message = contactForm.querySelector('#message').value;
    
    // Validate form
    if (!name || !email || !message) {
        showNotification('Please fill out all fields', 'error');
        return;
    }
    
    // In a real application, you would send this data to a server
    // For now, we'll just show a success message
    showNotification('Thank you for your message! We will get back to you soon.', 'success');
    contactForm.reset();
}

// Handle newsletter form submission
function handleNewsletterSubmit(event) {
    event.preventDefault();
    
    const email = newsletterForm.querySelector('#newsletter-email').value;
    
    // Validate email
    if (!email) {
        showNotification('Please enter your email address', 'error');
        return;
    }
    
    // In a real application, you would send this to a server
    showNotification('Thank you for subscribing to our newsletter!', 'success');
    newsletterForm.reset();
}

// Gallery functionality
function initializeGallery() {
    galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Get the full-size image URL
            const fullImageUrl = item.dataset.fullImage || item.querySelector('img').src;
            
            // Create modal with the full-size image
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <img src="${fullImageUrl}" alt="Full size image">
                </div>
            `;
            
            // Add modal to the DOM
            document.body.appendChild(modal);
            
            // Close modal when clicking the close button or outside the image
            modal.querySelector('.close-modal').addEventListener('click', () => {
                document.body.removeChild(modal);
            });
            
            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    document.body.removeChild(modal);
                }
            });
        });
    });
}

// Theme toggle functionality
function initializeThemeToggle() {
    themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        // Check for saved theme preference or use preferred color scheme
        const savedTheme = localStorage.getItem('theme') || 
                          (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        
        // Apply the saved theme
        document.body.classList.toggle('dark-theme', savedTheme === 'dark');
        themeToggle.checked = savedTheme === 'dark';
        
        // Listen for theme toggle changes
        themeToggle.addEventListener('change', () => {
            document.body.classList.toggle('dark-theme', themeToggle.checked);
            localStorage.setItem('theme', themeToggle.checked ? 'dark' : 'light');
        });
    }
}

// Social media sharing
function initializeSocialSharing() {
    const shareButtons = document.querySelectorAll('.share-button');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            
            const platform = button.dataset.platform;
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);
            let shareUrl;
            
            switch(platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
                    break;
                default:
                    return;
            }
            
            window.open(shareUrl, '_blank', 'width=600,height=400');
        });
    });
}

// Utility function to show notifications
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.classList.add('notification', `notification-${type}`);
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Automatically remove notification after 5 seconds
    setTimeout(() => {
        notification.classList.add('notification-hide');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300); // Wait for fade-out animation
    }, 5000);
}
