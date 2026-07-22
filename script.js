// JavaScript for M&V Consulting Standalone Web App

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Header Scroll Effect
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-md', 'py-3.5');
      header.classList.remove('py-5');
    } else {
      header.classList.remove('shadow-md', 'py-3.5');
      header.classList.add('py-5');
    }
  });

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Close mobile menu on link click
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) mobileMenu.classList.add('hidden');
    });
  });
});

// Close Mobile Menu Helper
function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) mobileMenu.classList.add('hidden');
}

// Modal Functions
function openModal(serviceTitle) {
  const modalOverlay = document.getElementById('modal-overlay');
  const serviceTag = document.getElementById('modal-service-tag');
  const emailBtn = document.getElementById('modal-email-btn');
  const whatsappBtn = document.getElementById('modal-whatsapp-btn');

  if (serviceTag) {
    serviceTag.textContent = serviceTitle || 'Consulta General';
  }

  if (emailBtn) {
    const subject = encodeURIComponent(`Solicitud de Cotización - ${serviceTitle}`);
    const body = encodeURIComponent(`Hola M&V Consulting,\n\nMe gustaría solicitar una cotización para el servicio de: ${serviceTitle}.\n\nQuedo atento a su respuesta.\n\nSaludos.`);
    emailBtn.href = `mailto:consultoresmv20@gmail.com?subject=${subject}&body=${body}`;
  }

  if (whatsappBtn) {
    const text = encodeURIComponent(`Hola M&V Consulting, me gustaría solicitar información y cotización para el servicio de: ${serviceTitle}.`);
    whatsappBtn.href = `https://wa.me/50766782482?text=${text}`;
  }

  if (modalOverlay) {
    modalOverlay.classList.remove('hidden');
  }
}

function closeModal() {
  const modalOverlay = document.getElementById('modal-overlay');
  if (modalOverlay) {
    modalOverlay.classList.add('hidden');
  }
}

// Contact Form Handler
function handleContactSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('contact-name').value;
  const service = document.getElementById('contact-service').value;
  const feedback = document.getElementById('form-feedback');

  if (feedback) {
    feedback.textContent = `¡Gracias, ${name}! Hemos recibido tu consulta sobre "${service}". Te contactaremos a la brevedad.`;
    feedback.classList.remove('hidden');
  }

  // Reset form
  document.getElementById('contact-form').reset();

  setTimeout(() => {
    if (feedback) feedback.classList.add('hidden');
  }, 6000);
}

// Newsletter Handler
function handleNewsletter(event) {
  event.preventDefault();
  const emailInput = document.getElementById('newsletter-email');
  const statusMsg = document.getElementById('newsletter-status');

  if (statusMsg && emailInput) {
    statusMsg.textContent = `¡Gracias! El correo ${emailInput.value} ha sido registrado exitosamente en nuestro boletín.`;
    statusMsg.classList.remove('hidden');
    emailInput.value = '';
  }

  setTimeout(() => {
    if (statusMsg) statusMsg.classList.add('hidden');
  }, 5000);
}
