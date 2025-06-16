// Navigation functionality
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link")
  const sections = document.querySelectorAll("section")

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Update active navigation on scroll
  window.addEventListener("scroll", () => {
    let current = ""
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active")
      }
    })
  })
})

// Works filter functionality
document.addEventListener("DOMContentLoaded", () => {
  const filterBtns = document.querySelectorAll(".filter-btn")
  const galleryCategories = document.querySelectorAll(".gallery-category")

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter")

      // Update active button
      filterBtns.forEach((b) => b.classList.remove("active"))
      this.classList.add("active")

      // Show/hide categories
      galleryCategories.forEach((category) => {
        category.classList.remove("active")
        if (category.classList.contains(filter)) {
          setTimeout(() => {
            category.classList.add("active")
          }, 100)
        }
      })
    })
  })
})

// Contact functions
function handleWhatsApp(phoneNumber) {
  const cleanNumber = phoneNumber.replace(/[^0-9+]/g, "")
  window.open(`https://wa.me/${cleanNumber}`, "_blank")
}

function handleEmail() {
  window.open("mailto:info@suvida.org", "_blank")
}

function handleInstagram() {
  window.open("https://instagram.com/suvida_limited", "_blank")
}

// Scroll to works
function scrollToWorks() {
  document.getElementById("works").scrollIntoView({
    behavior: "smooth",
  })
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".hero-grid, .story-grid, .craft-grid, .works-grid, .connect-grid")
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "all 0.8s ease"
    observer.observe(el)
  })
})

// Mobile sidebar toggle (for future mobile menu)
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar")
  sidebar.classList.toggle("open")
}
