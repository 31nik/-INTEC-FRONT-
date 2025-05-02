// Button click handler
function handleButtonClick(button) {
    // Add button click animation
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 100);

    // Handle different button actions based on text content
    const buttonText = button.textContent.trim();
    
    switch(buttonText) {
        case 'Начать зарабатывать':
            // Handle registration flow
            console.log('Starting registration process...');
            break;
        case 'Калькулятор прибыли':
            // Show profit calculator
            console.log('Opening profit calculator...');
            break;
        case 'Присоедениться к нам':
            // Handle join process
            console.log('Starting join process...');
            break;
        case 'Вход/Регистрация':
        case 'Регистрация':
            // Show auth modal
            showAuthModal();
            break;
        default:
            console.log('Button clicked:', buttonText);
    }
}

// Add hover effects to all buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        // Add hover effect
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.02)';
            button.style.transition = 'transform 0.2s ease';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });

    // Modal functionality
    const modal = document.getElementById('authModal');
    const closeBtn = document.querySelector('.close');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Close modal when clicking the X
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Tab switching
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Form submission handling
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login form submitted');
    });

    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle registration logic here
        console.log('Register form submitted');
    });
});

// Function to show auth modal
function showAuthModal() {
    const modal = document.getElementById('authModal');
    modal.style.display = 'block';
}
