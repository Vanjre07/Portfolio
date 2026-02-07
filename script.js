const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const revealEls = document.querySelectorAll("[data-reveal]");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

revealEls.forEach((el) => observer.observe(el));

const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    if (contactForm.action.includes("your_form_id")) {
      event.preventDefault();
      const name = contactForm.querySelector("#name").value.trim();
      const email = contactForm.querySelector("#email").value.trim();
      const message = contactForm.querySelector("#message").value.trim();
      const subject = encodeURIComponent(`Portfolio Inquiry - ${name || "New message"}`);
      const body = encodeURIComponent(
        `Name: ${name}\\nEmail: ${email}\\n\\n${message}`
      );
      window.location.href = `mailto:gagankumarvanjre07@gmail.com?subject=${subject}&body=${body}`;
    }
  });
}
