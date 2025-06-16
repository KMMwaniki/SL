// Loading Screen
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.opacity = "0"
    setTimeout(() => {
      document.getElementById("loader").style.display = "none"
    }, 500)
  }, 2000)
})

// Custom Cursor
const cursor = document.querySelector(".custom-cursor")
const follower = document.querySelector(".cursor-follower")

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px"
  cursor.style.top = e.clientY + "px"

  setTimeout(() => {
    follower.style.left = e.clientX + "px"
    follower.style.top = e.clientY + "px"
  }, 100)
})

// Hide cursor on mobile
if (window.innerWidth <= 768) {
  cursor.style.display = "none"
  follower.style.display = "none"
  document.body.style.cursor = "auto"
}

// Counter Animation
function animateCounters() {
  const counters = document.querySelectorAll(".metric-number")

  counters.forEach((counter) => {
    const target = Number.parseInt(counter.getAttribute("data-target"))
    const increment = target / 100
    let current = 0

    const updateCounter = () => {
      if (current < target) {
        current += increment
        counter.textContent = Math.ceil(current)
        setTimeout(updateCounter, 20)
      } else {
        counter.textContent = target
      }
    }

    updateCounter()
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
      if (entry.target.classList.contains("hero-metrics")) {
        animateCounters()
      }
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".hero-metrics, .about-grid, .services-grid")
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(50px)"
    el.style.transition = "all 0.8s ease"
    observer.observe(el)
  })
})

// Project Filter
document.addEventListener("DOMContentLoaded", () => {
  const filterBtns = document.querySelectorAll(".filter-btn")
  const projectCategories = document.querySelectorAll(".project-category")

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter")

      // Update active button
      filterBtns.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")

      // Show/hide categories
      projectCategories.forEach((category) => {
        category.classList.remove("active")
        if (category.classList.contains(filter)) {
          category.classList.add("active")
        }
      })
    })
  })
})

// Smooth scrolling for navigation
document.querySelectorAll(".nav-item").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href")
    const targetSection = document.querySelector(targetId)
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
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

// Scroll to projects
function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth",
  })
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(10, 10, 10, 0.95)"
    navbar.style.backdropFilter = "blur(20px)"
  } else {
    navbar.style.background = "rgba(10, 10, 10, 0.9)"
  }
})

// Parallax effect for hero
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const heroImage = document.querySelector(".hero-image img")
  if (heroImage) {
    heroImage.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})
