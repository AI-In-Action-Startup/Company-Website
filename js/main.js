/**
 * Main JavaScript file for AgentixAI website
 */

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  };

  /**
   * Toggle back to top button
   */
  let backtotop = select('.back-to-top');
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active');
      } else {
        backtotop.classList.remove('active');
      }
    };
    window.addEventListener('load', toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.navbar-toggler', function() {
    select('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-bars');
    this.classList.toggle('fa-times');
  });

  /**
   * Typed effect
   */
  document.addEventListener('DOMContentLoaded', function() {
    const typedElement = select('.typed-text');
    
    if (typedElement) {
      let typed_strings = ['Agentic AI Solutions', 'SRE AI Agents', 'Customer Support AI', 'AI Integration Services'];
      
      new Typed('.typed-text', {
        strings: typed_strings,
        typeSpeed: 80,
        backSpeed: 30,
        backDelay: 1500,
        loop: true
      });
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false
    });
  });

  /**
   * Form validation and submission
   */
  document.addEventListener('DOMContentLoaded', function() {
    const form = select('.php-email-form');
    
    if (form) {
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let thisForm = this;
        
        let action = thisForm.getAttribute('action');
        
        if (!action) {
          displayError(thisForm, 'The form action property is not set!');
          return;
        }
        
        thisForm.querySelector('.loading').classList.add('d-block');
        thisForm.querySelector('.error-message').classList.remove('d-block');
        thisForm.querySelector('.sent-message').classList.remove('d-block');
        
        // Simulate form submission (in a real project, use fetch or AJAX)
        setTimeout(function() {
          thisForm.querySelector('.loading').classList.remove('d-block');
          thisForm.querySelector('.sent-message').classList.add('d-block');
          thisForm.reset();
        }, 2000);
      });
    }
    
    function displayError(thisForm, error) {
      thisForm.querySelector('.loading').classList.remove('d-block');
      thisForm.querySelector('.error-message').innerHTML = error;
      thisForm.querySelector('.error-message').classList.add('d-block');
    }
  });

  /**
   * Header scroll class
   */
  window.addEventListener('scroll', function() {
    const header = select('#header');
    
    if (header) {
      if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    }
  });

  /**
   * Create images directory if it doesn't exist
   * Note: This is a frontend simulation - in practice, directory creation
   * would happen on the server side
   */
  console.log("Images directory path: /Users/sachidanand/Business/Source Code/Website/images/");

  /**
   * Initiate GLightbox for video playback
   */
  const glightbox = GLightbox({
    selector: '.glightbox',
    type: 'video',
    touchNavigation: true,
    closeEffect: 'fade',
    videosWidth: '900px'
  });

})();
