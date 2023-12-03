/* To top */
window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
    const butterflyContainer = document.getElementById("butterfly-to-top");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        butterflyContainer.style.transform = "scale(1)";
    } else {
        butterflyContainer.style.transform = "scale(0)";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


/* for form */
function submitForm() {
    // Form inputs
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone-number");
    var reasonInput = document.getElementById("reason");
    var educationLevelInput = document.getElementById("education-level");
  
    // Regex for email and phone number validation
    var emailRegex = /\S+@\S+\.\S+/;
    var phoneRegex = /^\d+$/;
    var nameRegex = /^[a-zA-Z]+$/;
  
    // Validate name
    if (!nameRegex.test(nameInput.value)) {
      document.getElementById("name-error").innerText = "Name must contain only letters.";
      nameInput.style.border = "2px solid red";
    } else {
      document.getElementById("name-error").innerText = "";
      nameInput.style.border = "";
    }
  
    // Validate email
    if (!emailRegex.test(emailInput.value)) {
      document.getElementById("email-error").innerText = "Invalid email address.";
      emailInput.style.border = "2px solid red";
    } else {
      document.getElementById("email-error").innerText = "";
      emailInput.style.border = "";
    }
  
    // Validate phone 
    if (!phoneRegex.test(phoneInput.value) || phoneInput.value.length > 12) {
      document.getElementById("phone-error").innerText = "Invalid phone number.";
      phoneInput.style.border = "2px solid red";
    } else {
      document.getElementById("phone-error").innerText = "";
      phoneInput.style.border = "";
    }
  
    if (
      nameInput.style.border ||
      emailInput.style.border ||
      phoneInput.style.border
    ) {
      alert("Please correct the errors in the form.");
      return;
    }

    var formData = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      reason: reasonInput.value,
      educationLevel: educationLevelInput.value
    };
    
    // Submission
    alert("Form submitted successfully!\n" +
    "Name: " + formData.name + "\n" +
    "Email: " + formData.email + "\n" +
    "Phone: " + formData.phone + "\n" +
    "Reason: " + formData.reason + "\n" +
    "Education Level: " + formData.educationLevel);
  }

  