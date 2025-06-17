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

// Project tabs functionality
document.addEventListener("DOMContentLoaded", () => {
  const tabBtns = document.querySelectorAll(".tab-btn")
  const projectCategories = document.querySelectorAll(".project-category")

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab")

      // Update active button
      tabBtns.forEach((b) => b.classList.remove("active"))
      this.classList.add("active")

      // Show/hide categories
      projectCategories.forEach((category) => {
        category.classList.remove("active")
        if (category.classList.contains(targetTab)) {
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
  window.open("https://instagram.com/suvida_kenya", "_blank")
}

// Scroll functions
function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth",
  })
}

function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
  })
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)"
    navbar.style.backdropFilter = "blur(20px)"
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)"
  }
})

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
  const animatedElements = document.querySelectorAll(
    ".hero-container, .about-grid, .services-grid, .projects-grid, .contact-grid",
  )
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "all 0.8s ease"
    observer.observe(el)
  })
})

// Parallax effect for hero background
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const bgShape = document.querySelector(".bg-shape")
  if (bgShape) {
    bgShape.style.transform = `translateY(${scrolled * 0.1}px)`
  }
})
