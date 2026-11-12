/**
 * AVM Packaging System - High-Performance Industrial JavaScript
 * Lightweight, zero dependencies, lightning-fast execution
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // 1. Sticky Header Scroll Effect
  const header = document.querySelector('.site-header');
  const scrollTopBtn = document.querySelector('.scroll-top-btn');

  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY || window.pageYOffset;
    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (scrollTopBtn) {
      if (scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 2. Mobile Drawer Navigation
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const drawerBackdrop = document.querySelector('.drawer-backdrop');
  const drawerClose = document.querySelector('.drawer-close');

  function openDrawer() {
    if (mobileDrawer && drawerBackdrop) {
      mobileDrawer.classList.add('active');
      drawerBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (mobileDrawer && drawerBackdrop) {
      mobileDrawer.classList.remove('active');
      drawerBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  // Mobile submenu accordion
  const mobileSubmenuTriggers = document.querySelectorAll('.mobile-submenu-trigger');
  mobileSubmenuTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      const parent = this.closest('.mobile-nav-item');
      const submenu = parent.querySelector('.mobile-submenu');
      if (submenu) {
        submenu.classList.toggle('active');
        const arrow = this.querySelector('svg');
        if (arrow) {
          arrow.style.transform = submenu.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
        }
      }
    });
  });

  // 3. Interactive FAQ Accordions
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const parentCard = this.closest('.faq-card');
      const isOpen = parentCard.classList.contains('open');

      // Optional: Close sibling FAQs in the same container for clean UX
      const siblingCards = parentCard.parentElement.querySelectorAll('.faq-card');
      siblingCards.forEach(function (card) {
        card.classList.remove('open');
      });

      if (!isOpen) {
        parentCard.classList.add('open');
      }
    });
  });

  // 4. Quick Quote Modal
  const modalOverlay = document.querySelector('#quoteModal');
  const modalCloseBtn = document.querySelector('.modal-close');
  const quoteButtons = document.querySelectorAll('[data-open-quote]');
  const machineSelectInput = document.querySelector('#quoteMachineSelect');

  function openQuoteModal(machineName) {
    if (modalOverlay) {
      if (machineSelectInput && machineName) {
        // Find matching option or set value
        let found = false;
        for (let i = 0; i < machineSelectInput.options.length; i++) {
          if (machineSelectInput.options[i].text.toLowerCase().includes(machineName.toLowerCase())) {
            machineSelectInput.selectedIndex = i;
            found = true;
            break;
          }
        }
        if (!found) {
          machineSelectInput.value = machineName;
        }
      }
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeQuoteModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  quoteButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const machineName = this.getAttribute('data-machine') || '';
      openQuoteModal(machineName);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeQuoteModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) closeQuoteModal();
    });
  }

  // Escape key closes modals
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeQuoteModal();
      closeDrawer();
    }
  });

  // 5. RFQ Form Submission Handler (Client Feedback Simulation)
  const leadForms = document.querySelectorAll('form.rfq-form');
  leadForms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending Enquiry...';
      }

      setTimeout(function () {
        if (submitBtn) {
          submitBtn.innerHTML = '✓ Enquiry Received! Our Engineer will call you.';
          submitBtn.style.backgroundColor = '#059669';
        }
        setTimeout(function () {
          form.reset();
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            submitBtn.style.backgroundColor = '';
          }
          closeQuoteModal();
        }, 3000);
      }, 700);
    });
  });

});
