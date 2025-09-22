// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add fade-in animation to elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe all feature cards and program cards
    const animateElements = document.querySelectorAll('.feature-card, .program-card, .stat-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Form validation and submission
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            showError(input, 'This field is required');
            isValid = false;
        } else {
            clearError(input);
        }
        
        // Email validation
        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                showError(input, 'Please enter a valid email address');
                isValid = false;
            }
        }
        
        // Password validation
        if (input.type === 'password' && input.value) {
            if (input.value.length < 8) {
                showError(input, 'Password must be at least 8 characters long');
                isValid = false;
            }
        }
    });
    
    return isValid;
}

function showError(input, message) {
    clearError(input);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = 'var(--danger-color)';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;
    input.parentNode.appendChild(errorDiv);
    input.style.borderColor = 'var(--danger-color)';
}

function clearError(input) {
    const errorMessage = input.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
    input.style.borderColor = '';
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    if (searchInput) {
        let searchTimeout;
        
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            const query = this.value.trim();
            
            if (query.length < 2) {
                if (searchResults) {
                    searchResults.innerHTML = '';
                    searchResults.style.display = 'none';
                }
                return;
            }
            
            searchTimeout = setTimeout(() => {
                performSearch(query);
            }, 300);
        });
    }
}

function performSearch(query) {
    // Mock search functionality
    const mockResults = [
        { type: 'program', name: 'Google VRP', description: 'Google Vulnerability Reward Program' },
        { type: 'program', name: 'Microsoft Bug Bounty', description: 'Microsoft Security Bug Bounty Program' },
        { type: 'report', name: 'XSS in login form', description: 'Critical XSS vulnerability found' }
    ];
    
    const filteredResults = mockResults.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );
    
    displaySearchResults(filteredResults);
}

function displaySearchResults(results) {
    const searchResults = document.getElementById('search-results');
    if (!searchResults) return;
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-no-results">No results found</div>';
    } else {
        searchResults.innerHTML = results.map(result => `
            <div class="search-result-item">
                <div class="search-result-type">${result.type}</div>
                <div class="search-result-name">${result.name}</div>
                <div class="search-result-description">${result.description}</div>
            </div>
        `).join('');
    }
    
    searchResults.style.display = 'block';
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--bg-primary);
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        padding: 1rem;
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    if (type === 'success') {
        notification.style.borderColor = 'var(--secondary-color)';
        notification.style.backgroundColor = 'rgba(16, 185, 129, 0.05)';
    } else if (type === 'error') {
        notification.style.borderColor = 'var(--danger-color)';
        notification.style.backgroundColor = 'rgba(239, 68, 68, 0.05)';
    }
    
    document.body.appendChild(notification);
    
    // Close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Loading states
function showLoading(button) {
    const originalText = button.textContent;
    button.disabled = true;
    button.innerHTML = '<span class="spinner"></span> Loading...';
    
    return function hideLoading() {
        button.disabled = false;
        button.textContent = originalText;
    };
}

// Local storage utilities
const Storage = {
    set: function(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('Error saving to localStorage:', e);
        }
    },
    
    get: function(key) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('Error reading from localStorage:', e);
            return null;
        }
    },
    
    remove: function(key) {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.error('Error removing from localStorage:', e);
        }
    }
};

// Authentication utilities
const Auth = {
    isLoggedIn: function() {
        return Storage.get('user') !== null;
    },
    
    getUser: function() {
        return Storage.get('user');
    },
    
    login: function(userData) {
        Storage.set('user', userData);
        this.updateNavigation();
    },
    
    logout: function() {
        Storage.remove('user');
        this.updateNavigation();
        window.location.href = 'index.html';
    },
    
    updateNavigation: function() {
        const navAuth = document.querySelector('.nav-auth');
        if (!navAuth) return;
        
        if (this.isLoggedIn()) {
            const user = this.getUser();
            navAuth.innerHTML = `
                <div class="user-menu">
                    <span>Welcome, ${user.username}</span>
                    <a href="dashboard.html" class="btn btn-outline">Dashboard</a>
                    <button onclick="Auth.logout()" class="btn btn-danger">Logout</button>
                </div>
            `;
        } else {
            navAuth.innerHTML = `
                <a href="login.html" class="btn btn-outline">Login</a>
                <a href="register.html" class="btn btn-primary">Sign Up</a>
            `;
        }
    }
};

// Initialize auth state on page load
document.addEventListener('DOMContentLoaded', function() {
    Auth.updateNavigation();
    initializeSearch();
});

// API simulation utilities
const API = {
    baseURL: '/api', // This would be your actual API endpoint
    
    async request(endpoint, options = {}) {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));
        
        // Mock responses based on endpoint
        if (endpoint === '/login') {
            if (options.body && JSON.parse(options.body).email === 'demo@example.com') {
                return {
                    success: true,
                    user: {
                        id: 1,
                        username: 'DemoUser',
                        email: 'demo@example.com',
                        reputation: 1250,
                        rank: 'Expert'
                    }
                };
            } else {
                throw new Error('Invalid credentials');
            }
        }
        
        if (endpoint === '/register') {
            return {
                success: true,
                message: 'Registration successful'
            };
        }
        
        if (endpoint === '/reports') {
            return {
                success: true,
                data: [
                    {
                        id: 1,
                        title: 'XSS in Search Functionality',
                        severity: 'High',
                        status: 'Resolved',
                        reward: '$500',
                        date: '2024-01-15'
                    },
                    {
                        id: 2,
                        title: 'SQL Injection in Login Form',
                        severity: 'Critical',
                        status: 'Under Review',
                        reward: 'TBD',
                        date: '2024-01-20'
                    }
                ]
            };
        }
        
        if (endpoint === '/programs') {
            return {
                success: true,
                data: [
                    {
                        id: 1,
                        name: 'Google VRP',
                        company: 'Google',
                        scope: 'All Google products',
                        minReward: 100,
                        maxReward: 31337,
                        status: 'Active'
                    },
                    {
                        id: 2,
                        name: 'Microsoft Bug Bounty',
                        company: 'Microsoft',
                        scope: 'Microsoft products and services',
                        minReward: 500,
                        maxReward: 15000,
                        status: 'Active'
                    }
                ]
            };
        }
        
        return { success: true, data: [] };
    }
};

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .notification-close {
        background: none;
        border: none;
        font-size: 1.25rem;
        cursor: pointer;
        color: var(--text-secondary);
        margin-left: 1rem;
    }
    
    .notification-close:hover {
        color: var(--text-primary);
    }
    
    .search-result-item {
        padding: 0.75rem;
        border-bottom: 1px solid var(--border-color);
        cursor: pointer;
    }
    
    .search-result-item:hover {
        background-color: var(--bg-secondary);
    }
    
    .search-result-type {
        font-size: 0.75rem;
        color: var(--primary-color);
        text-transform: uppercase;
        font-weight: 600;
    }
    
    .search-result-name {
        font-weight: 600;
        margin: 0.25rem 0;
    }
    
    .search-result-description {
        font-size: 0.875rem;
        color: var(--text-secondary);
    }
    
    .search-no-results {
        padding: 1rem;
        text-align: center;
        color: var(--text-secondary);
    }
    
    .user-menu {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    
    .user-menu span {
        color: var(--text-primary);
        font-weight: 500;
    }
`;
document.head.appendChild(style);