'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }


// Sidebar functionality
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", async function () { 
    await new Promise(resolve => setTimeout(resolve, 50)); 
    elementToggleFunc(sidebar); 
});


// Testimonials functionality with async event handling
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// async modal toggle function
const testimonialsModalFunc = async function () {
    await new Promise(resolve => setTimeout(resolve, 50));
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
}

// Add click event to modal items
testimonialsItem.forEach((item) => {
    item.addEventListener("click", async function () {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
        await testimonialsModalFunc();
    });
});

modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);


// Custom select functionality
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

selectItems.forEach((item) => {
    item.addEventListener("click", function () {
        const selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);
    });
});

// Filter functionality
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
    filterItems.forEach((item) => {
        if (selectedValue === "all" || selectedValue === item.dataset.category) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}

// Navigation functionality
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((navLink) => {
    navLink.addEventListener("click", function () {
        pages.forEach((page) => {
            if (this.innerHTML.toLowerCase() === page.dataset.page) {
                page.classList.add("active");
                navigationLinks.forEach((link) => link.classList.remove("active"));
                navLink.classList.add("active");
                window.scrollTo(0, 0);
            } else {
                page.classList.remove("active");
            }
        });
    });
});

// NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW

    });

    checkFooterIntegrity();
});
