'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// Gallery Modal Logic
const viewAllProjectsBtn = document.querySelector('[data-view-all-projects]');
const viewAllCertificatesBtn = document.querySelector('[data-view-all-certificates]');
const galleryModal = document.querySelector('[data-gallery-modal]');
const galleryOverlay = document.querySelector('[data-gallery-overlay]');
const galleryClose = document.querySelector('[data-gallery-close]');
const galleryGrid = document.querySelector('[data-gallery-grid]');

function toggleGalleryModal() {
  galleryModal.classList.toggle('active');
  galleryOverlay.classList.toggle('active');
}

function collectProjectImages() {
  const images = document.querySelectorAll('.project-img img');
  return Array.from(images).map(img => ({ src: img.src, alt: img.alt || 'Project image' }));
}

function collectCertificateImages() {
  const images = document.querySelectorAll('.certificate-banner-box img');
  return Array.from(images).map(img => ({ src: img.src, alt: img.alt || 'Certificate image' }));
}

function renderGallery(items) {
  galleryGrid.innerHTML = '';
  items.forEach(({ src, alt }) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    const image = document.createElement('img');
    image.src = src;
    image.alt = alt;
    item.appendChild(image);
    galleryGrid.appendChild(item);
  });
}

if (viewAllProjectsBtn) {
  viewAllProjectsBtn.addEventListener('click', () => {
    renderGallery(collectProjectImages());
    toggleGalleryModal();
  });
}

if (viewAllCertificatesBtn) {
  viewAllCertificatesBtn.addEventListener('click', () => {
    renderGallery(collectCertificateImages());
    toggleGalleryModal();
  });
}

if (galleryClose) galleryClose.addEventListener('click', toggleGalleryModal);
if (galleryOverlay) galleryOverlay.addEventListener('click', toggleGalleryModal);

// Certificate Modal Logic
const certificateModal = document.querySelector('[data-certificate-modal]');
const certificateOverlay = document.querySelector('[data-certificate-overlay]');
const certificateClose = document.querySelector('[data-certificate-close]');
const certificateBtns = document.querySelectorAll('[data-certificate-btn]');
const certificateModalImg = document.querySelector('[data-certificate-modal-img]');
const certificateModalTitle = document.querySelector('[data-certificate-modal-title]');
const certificateModalCategory = document.querySelector('[data-certificate-modal-category]');
const certificateModalDate = document.querySelector('[data-certificate-modal-date]');

function toggleCertificateModal() {
  certificateModal.classList.toggle('active');
  certificateOverlay.classList.toggle('active');
}

function showCertificate(certificateBtn) {
  const card = certificateBtn.closest('.certificate-card');
  if (!card) return;

  const img = card.querySelector('[data-certificate-img]');
  const title = card.querySelector('.certificate-item-title');
  const category = card.querySelector('.certificate-category');
  const date = card.querySelector('time');

  if (img) {
    certificateModalImg.src = img.src;
    certificateModalImg.alt = img.alt || '';
  }
  if (title) certificateModalTitle.textContent = title.textContent;
  if (category) certificateModalCategory.textContent = category.textContent;
  if (date) certificateModalDate.textContent = date.textContent;

  toggleCertificateModal();
}

// Add click event to all certificate buttons
certificateBtns.forEach(btn => {
  btn.addEventListener('click', () => showCertificate(btn));
});

if (certificateClose) certificateClose.addEventListener('click', toggleCertificateModal);
if (certificateOverlay) certificateOverlay.addEventListener('click', toggleCertificateModal);