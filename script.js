// script.js
document.addEventListener("DOMContentLoaded", function () {
  const yearElement = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;

  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // You can add your form submission logic here (e.g., send a request to a server)
    // For demonstration purposes, we'll log the form data to the console.
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  });
});
