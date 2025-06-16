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

      // Show/hide categories with enhanced animation
      projectCategories.forEach((category) => {
        category.classList.remove("active")
        if (category.classList.contains(targetTab)) {
          setTimeout(() => {
            category.classList.add("active")
          }, 150)
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

// Enhanced Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0, 0, 0, 0.98)"
    navbar.style.backdropFilter = "blur(30px)"
    navbar.style.borderBottom = "1px solid rgba(255, 107, 53, 0.3)"
  } else {
    navbar.style.background = "rgba(0, 0, 0, 0.95)"
    navbar.style.borderBottom = "1px solid rgba(255, 107, 53, 0.2)"
  }
})

// Enhanced Intersection Observer for premium animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in")
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for premium animations
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".hero-container, .about-grid, .services-grid, .projects-grid, .contact-grid, .feature-item, .service-card, .project-card",
  )
  animatedElements.forEach((el, index) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(50px)"
    el.style.transition = `all 0.8s ease ${index * 0.1}s`
    observer.observe(el)
  })
})

// Enhanced parallax effect for hero background
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const bgShape = document.querySelector(".bg-shape")
  const bgPattern = document.querySelector(".bg-pattern")

  if (bgShape) {
    bgShape.style.transform = `translateY(${scrolled * 0.15}px) scale(${1 + scrolled * 0.0002})`
  }

  if (bgPattern) {
    bgPattern.style.transform = `translateY(${scrolled * 0.05}px)`
  }
})

// Premium hover effects for cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".service-card, .project-card, .info-card, .feature-item")

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-12px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })
})

// Dynamic stats animation
document.addEventListener("DOMContentLoaded", () => {
  const statNumbers = document.querySelectorAll(".stat-number")

  const animateStats = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target
        const finalValue = target.textContent
        const isPercentage = finalValue.includes("%")
        const isPlus = finalValue.includes("+")
        const numericValue = Number.parseInt(finalValue.replace(/[^0-9]/g, ""))

        let current = 0
        const increment = numericValue / 50
        const timer = setInterval(() => {
          current += increment
          if (current >= numericValue) {
            current = numericValue
            clearInterval(timer)
          }

          let displayValue = Math.floor(current)
          if (isPlus) displayValue += "+"
          if (isPercentage) displayValue += "%"

          target.textContent = displayValue
        }, 30)
      }
    })
  }

  const statsObserver = new IntersectionObserver(animateStats, { threshold: 0.5 })
  statNumbers.forEach((stat) => statsObserver.observe(stat))
})

// Premium button interactions
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".action-btn, .contact-btn, .nav-btn")

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // Create ripple effect
      const ripple = document.createElement("span")
      const rect = this.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.width = ripple.style.height = size + "px"
      ripple.style.left = x + "px"
      ripple.style.top = y + "px"
      ripple.classList.add("ripple")

      this.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  })
})

// Add ripple CSS
const rippleCSS = `
.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0);
  animation: ripple-animation 0.6s linear;
  pointer-events: none;
}

@keyframes ripple-animation {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
`

const style = document.createElement("style")
style.textContent = rippleCSS
document.head.appendChild(style)

// Enhanced loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0"
  document.body.style.transition = "opacity 0.5s ease"

  setTimeout(() => {
    document.body.style.opacity = "1"
  }, 100)
})
