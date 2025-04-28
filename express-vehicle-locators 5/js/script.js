// Express Vehicle Locators - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const controls = document.querySelectorAll('.control');
    let currentSlide = 0;
    
    if (testimonials.length > 0) {
        // Initialize first testimonial as active
        testimonials[0].classList.add('active');
        
        // Set up controls
        controls.forEach(control => {
            control.addEventListener('click', function() {
                const slideIndex = parseInt(this.getAttribute('data-slide'));
                showSlide(slideIndex);
            });
        });
        
        // Auto rotate testimonials
        setInterval(() => {
            currentSlide = (currentSlide + 1) % testimonials.length;
            showSlide(currentSlide);
        }, 5000);
    }
    
    function showSlide(index) {
        // Hide all testimonials
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        
        // Remove active class from all controls
        controls.forEach(control => {
            control.classList.remove('active');
        });
        
        // Show selected testimonial
        testimonials[index].classList.add('active');
        controls[index].classList.add('active');
        currentSlide = index;
    }
    
    // Session Storage for Form Data
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        // Restore form data from session storage
        if (form.id) {
            restoreFormData(form);
            
            // Save form data to session storage on input change
            form.addEventListener('input', function(e) {
                if (e.target.name) {
                    saveFormField(form.id, e.target.name, e.target.value);
                }
            });
            
            // Save form data before submission
            form.addEventListener('submit', function() {
                saveFormData(form);
            });
        }
    });
    
    function saveFormField(formId, fieldName, value) {
        let formData = JSON.parse(sessionStorage.getItem(formId)) || {};
        formData[fieldName] = value;
        sessionStorage.setItem(formId, JSON.stringify(formData));
    }
    
    function saveFormData(form) {
        const formData = {};
        const formElements = form.elements;
        
        for (let i = 0; i < formElements.length; i++) {
            const element = formElements[i];
            if (element.name && element.type !== 'submit' && element.type !== 'reset') {
                if (element.type === 'checkbox' || element.type === 'radio') {
                    if (element.checked) {
                        formData[element.name] = element.value;
                    }
                } else {
                    formData[element.name] = element.value;
                }
            }
        }
        
        sessionStorage.setItem(form.id, JSON.stringify(formData));
    }
    
    function restoreFormData(form) {
        const formData = JSON.parse(sessionStorage.getItem(form.id));
        
        if (formData) {
            const formElements = form.elements;
            
            for (let i = 0; i < formElements.length; i++) {
                const element = formElements[i];
                if (element.name && formData[element.name] !== undefined) {
                    if (element.type === 'checkbox' || element.type === 'radio') {
                        element.checked = (element.value === formData[element.name]);
                    } else {
                        element.value = formData[element.name];
                    }
                }
            }
        }
    }
    
    // Trade-In Calculator
    const tradeInForm = document.getElementById('trade-in-form');
    const calculateBtn = document.getElementById('calculate-btn');
    
    if (tradeInForm && calculateBtn) {
        calculateBtn.addEventListener('click', function(e) {
            e.preventDefault();
            calculateTradeInValue();
        });
    }
    
    function calculateTradeInValue() {
        const year = document.getElementById('vehicle-year').value;
        const make = document.getElementById('vehicle-make').value;
        const model = document.getElementById('vehicle-model').value;
        const mileage = document.getElementById('vehicle-mileage').value;
        const condition = document.getElementById('vehicle-condition').value;
        
        if (!year || !make || !model || !mileage || !condition) {
            alert('Please fill in all fields to calculate trade-in value.');
            return;
        }
        
        // Simple calculation for demonstration purposes
        // In a real application, this would connect to a valuation API
        let baseValue = 0;
        
        // Base value based on year
        const currentYear = new Date().getFullYear();
        const age = currentYear - parseInt(year);
        
        if (age <= 3) {
            baseValue = 20000;
        } else if (age <= 6) {
            baseValue = 15000;
        } else if (age <= 10) {
            baseValue = 10000;
        } else {
            baseValue = 5000;
        }
        
        // Adjust for mileage
        const mileageInt = parseInt(mileage);
        if (mileageInt <= 30000) {
            baseValue *= 1.1;
        } else if (mileageInt <= 60000) {
            baseValue *= 1;
        } else if (mileageInt <= 100000) {
            baseValue *= 0.8;
        } else {
            baseValue *= 0.6;
        }
        
        // Adjust for condition
        switch (condition) {
            case 'excellent':
                baseValue *= 1.2;
                break;
            case 'good':
                baseValue *= 1;
                break;
            case 'fair':
                baseValue *= 0.8;
                break;
            case 'poor':
                baseValue *= 0.6;
                break;
        }
        
        // Display result
        const resultElement = document.getElementById('result-value');
        const resultContainer = document.getElementById('calculator-result');
        
        if (resultElement && resultContainer) {
            resultElement.textContent = '$' + Math.round(baseValue).toLocaleString();
            resultContainer.style.display = 'block';
            
            // Scroll to result
            resultContainer.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    // Word count for textarea elements
    const textareas = document.querySelectorAll('textarea[data-word-count]');
    
    textareas.forEach(textarea => {
        const counterId = textarea.getAttribute('data-word-count');
        const counter = document.getElementById(counterId);
        
        if (counter) {
            textarea.addEventListener('input', function() {
                const words = this.value.trim().split(/\s+/).filter(Boolean).length;
                counter.textContent = words + ' word' + (words !== 1 ? 's' : '');
            });
            
            // Initial count
            const words = textarea.value.trim().split(/\s+/).filter(Boolean).length;
            counter.textContent = words + ' word' + (words !== 1 ? 's' : '');
        }
    });
});
