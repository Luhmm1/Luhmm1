"use strict";

// Shows or hides the navigation bar
const openSidebar = document.getElementById("open-sidebar");
const closeSidebar = document.getElementById("close-sidebar");
const sidebar = document.getElementById("sidebar");

document.body.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

openSidebar.addEventListener("click", (e) => {
  sidebar.classList.add("active");
  e.stopPropagation();
});

closeSidebar.addEventListener("click", (e) => {
  sidebar.classList.remove("active");
  e.stopPropagation();
});

sidebar.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() !== "a") {
    e.stopPropagation();
  }
});

// Updates the selected section
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const links = document.querySelectorAll("#sidebar nav a");

      links.forEach((a) => {
        if (a.getAttribute("href") === "#" + entry.target.id) {
          a.classList.add("selected");
        } else {
          a.classList.remove("selected");
        }
      });
    }
  });
}, {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
});

document.querySelectorAll("main section").forEach((section) => observer.observe(section));
