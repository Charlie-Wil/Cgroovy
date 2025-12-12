

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();


    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const age = document.getElementById("age").value.trim();
    const gender = document.getElementById("gender").value;

   
    if (name.length < 3) {
      alert("Name must be at least 3 characters long.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Email must be valid.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    if (isNaN(age) || age < 7) {
      alert("You must be at least 7 years old to register.");
      return;
    }

    if (gender === "") {
      alert("Please select a gender.");
      return;
    }

    alert("Registration successful!");
    form.reset();
  });
});