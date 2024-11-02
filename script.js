// 1. Navbar Scroll Effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// 2. Testimonial Slider
const testimonialSlider = {
  currentSlide: 0,
  testimonials: [
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: '"On the Windows talking painted pasture yet its express parties use..."',
      author: "Mike Taylor",
      location: "Lahore, Pakistan",
    },
    {
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: '"Excellent service and amazing destinations. Would definitely recommend!"',
      author: "Sarah Johnson",
      location: "New York, USA",
    },
    {
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      text: '"The booking process was smooth and the trip was unforgettable."',
      author: "John Smith",
      location: "London, UK",
    },
  ],

  init() {
    this.bindButtons();
    this.updateCircles();
  },

  bindButtons() {
    document
      .querySelector(".prev-btn")
      .addEventListener("click", () => this.navigate("prev"));
    document
      .querySelector(".next-btn")
      .addEventListener("click", () => this.navigate("next"));
  },

  navigate(direction) {
    if (direction === "prev") {
      this.currentSlide =
        (this.currentSlide - 1 + this.testimonials.length) %
        this.testimonials.length;
    } else {
      this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
    }
    this.updateSlide();
    this.updateCircles();
  },

  updateSlide() {
    const testimonial = this.testimonials[this.currentSlide];
    document.querySelector(".testimonial-image img").src = testimonial.image;
    document.querySelector(".testimonial-content p").textContent =
      testimonial.text;
    document.querySelector(".testimonial-author h4").textContent =
      testimonial.author;
    document.querySelector(".testimonial-author p").textContent =
      testimonial.location;
  },

  updateCircles() {
    const circles = document.querySelectorAll(".testimonial-circles .circle");
    circles.forEach((circle, index) => {
      circle.classList.toggle("active", index === this.currentSlide);
    });
  },
};

// 3. Animated Counter for "people going"
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);

  function updateCounter() {
    start += increment;
    if (start < target) {
      element.textContent = Math.floor(start);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  }

  updateCounter();
}

// 4. Intersection Observer for Animations
const observerOptions = {
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      if (entry.target.classList.contains("people-going")) {
        const counter = entry.target.querySelector("p");
        animateCounter(counter, 24);
      }
    }
  });
}, observerOptions);

// 5. Email Validation for Subscribe Form
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// 6. Initialize Everything
document.addEventListener("DOMContentLoaded", function () {
  // Initialize testimonial slider
  testimonialSlider.init();

  // Add smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Initialize animations
  const animatedElements = document.querySelectorAll(
    ".service-card, .hero-content, .people-going"
  );
  animatedElements.forEach((el) => observer.observe(el));

  // Handle subscribe form
  const subscribeForm = document.querySelector(".subscribe-form");
  const emailInput = subscribeForm.querySelector('input[type="email"]');
  const subscribeBtn = subscribeForm.querySelector(".subscribe-btn");

  subscribeBtn.addEventListener("click", () => {
    const email = emailInput.value;
    if (validateEmail(email)) {
      alert("Thank you for subscribing!");
      emailInput.value = "";
    } else {
      alert("Please enter a valid email address");
    }
  });
});

// 7. Add loading animation for images
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.classList.add("loaded");
    });
  });
});

// 8. Smooth Scroll for Navbar Links
document.addEventListener("DOMContentLoaded", function () {
  // Select all navigation links
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Remove the '#' from the href
      const targetId = this.getAttribute("href").substring(1);

      // Find the corresponding section
      const targetSection = document.getElementById(targetId);

      // Check if the section exists
      if (targetSection) {
        // Prevent default link behavior
        e.preventDefault();

        // Scroll to the section smoothly
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
      // If no section exists, the link will work normally (e.g., for login/signup)
    });
  });
});
const destinationsData = {
  rome: {
    title: "Rome, Italy",
    price: "$5,42k",
    duration: "10 Days Trip",
    mainImage:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1555992336-fb0d29498b13",
      "https://images.unsplash.com/photo-1548919973-5cef591cdbc9",
      "https://images.unsplash.com/photo-1529260830199-42c24126f198",
      "https://images.unsplash.com/photo-1525874684015-58379d421a52",
    ],
    description: `Experience the eternal city of Rome, where ancient history meets modern life. Visit iconic landmarks like the Colosseum, Roman Forum, and Vatican City. Enjoy authentic Italian cuisine, world-class art, and the vibrant atmosphere of Rome's picturesque neighborhoods.

    Package Includes:
    • Round-trip flights
    • 4-star hotel accommodation
    • Daily breakfast
    • Guided tours of major attractions
    • Skip-the-line tickets
    • Local transportation
    • Professional tour guide`,
  },
  london: {
    title: "London, UK",
    price: "$4,2k",
    duration: "7 Days Trip",
    mainImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    gallery: [
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be",
      "https://images.unsplash.com/photo-1520986606214-8b456906c813",
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9",
      "https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4",
    ],
    description: `Discover the magic of London, a city where tradition meets innovation. Experience iconic landmarks like Big Ben, Tower Bridge, and Buckingham Palace. Immerse yourself in rich history, diverse culture, and world-class entertainment.

    Package Includes:
    • Round-trip flights
    • 4-star hotel accommodation
    • Daily breakfast
    • Guided city tours
    • London Eye tickets
    • Oyster card for transport
    • Professional guide`,
  },
  "new-york": {
    // Changed from newyork to new-york to match the hyphenated ID
    title: "New York, USA",
    price: "$4.5k",
    duration: "14 Days Trip",
    mainImage: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
    gallery: [
      "https://images.unsplash.com/photo-1522083165195-3424ed129620",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25",
      "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7",
    ],
    description: `Experience the energy of New York City, the city that never sleeps. Visit world-famous sites like Times Square, Central Park, and the Statue of Liberty. Enjoy Broadway shows, diverse cuisine, and the vibrant atmosphere of this global metropolis.

    Package Includes:
    • Round-trip flights
    • 4-star hotel accommodation
    • Daily breakfast
    • City tours
    • Broadway show ticket
    • Metro card
    • Professional guide`,
  },
};

function showDestinationDetails(destination) {
  const modal = document.getElementById("destinationModal");
  const data = destinationsData[destination.toLowerCase()];

  // Check if data exists for the destination
  if (!data) {
    console.error(`No data found for destination: ${destination}`);
    return;
  }

  // Update modal content
  document.getElementById("modalTitle").textContent = data.title;
  document.getElementById("modalMainImage").src = data.mainImage;
  document.getElementById("modalPrice").textContent = data.price;
  document.getElementById("modalDuration").textContent = data.duration;
  document.getElementById("modalDescription").innerHTML = data.description;

  // Generate thumbnails
  const thumbnailGallery = document.getElementById("thumbnailGallery");
  thumbnailGallery.innerHTML = data.gallery
    .map(
      (img) =>
        `<img src="${img}" alt="Gallery image" onclick="updateMainImage('${img}')">`
    )
    .join("");

  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function updateMainImage(src) {
  document.getElementById("modalMainImage").src = src;
}

// Close modal when clicking the X or outside the modal
document.querySelector(".close-modal").onclick = function () {
  document.getElementById("destinationModal").style.display = "none";
  document.body.style.overflow = "auto";
};

window.onclick = function (event) {
  const modal = document.getElementById("destinationModal");
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
};
