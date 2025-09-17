// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form alert
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const phone = e.target.phone.value;
  alert(`Thanks ${name}! We will contact you at ${email} / ${phone}`);
});