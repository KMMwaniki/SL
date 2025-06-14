// Gallery state
let currentGallery = 0

// Gallery navigation functions
function nextGallery() {
  currentGallery = (currentGallery + 1) % 2
  updateGallery()
}

function prevGallery() {
  currentGallery = (currentGallery - 1 + 2) % 2
  updateGallery()
}

function updateGallery() {
  const interiorGallery = document.querySelector(".gallery-interior")
  const exteriorGallery = document.querySelector(".gallery-exterior")

  if (currentGallery === 0) {
    interiorGallery.style.display = "grid"
    exteriorGallery.style.display = "none"
  } else {
    interiorGallery.style.display = "none"
    exteriorGallery.style.display = "grid"
  }
}

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

// Smooth scroll function
function scrollToGallery() {
  document.getElementById("project-gallery").scrollIntoView({
    behavior: "smooth",
  })
}

// Initialize gallery on page load
document.addEventListener("DOMContentLoaded", () => {
  updateGallery()
})
