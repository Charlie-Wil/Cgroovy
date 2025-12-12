$(document).ready(function() {
  const contactForm = $("#contactForm");

  contactForm.on("submit", function(e) {
 
    e.preventDefault();


    const name = $("#contactName").val().trim();
    const emailField = $("#contactEmail"); 
    const email = emailField.val().trim();
    const subject = $("#contactSubject").val().trim();
    const message = $("#contactMessage").val().trim();

    if (name === "" || email === "" || subject === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }

   
    if (emailField.is(':invalid')) {
      alert("Please enter a valid email address.");
      return;
    }




    alert(`Thank you for your message, ${name}! We will get back to you shortly.`);


    contactForm[0].reset();
  });
});