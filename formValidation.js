function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  function validateForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");
  
    removeAlert();
  
    if (nameInput.validity.valueMissing) {
      showAlert("Please enter your name.");
      return;
    }
  
    if (emailInput.validity.valueMissing) {
      showAlert("Please enter your email address.");
      return;
    }
    
    if (!validateEmail(emailInput.value)) {
      showAlert("Please enter a valid email address.");
      return;
    }
  
    if (messageInput.validity.valueMissing) {
      showAlert("Please enter your message.");
      return;
    }
  
    submitForm();
  }
  
  function showAlert(message) {
    var alertBox = document.createElement('div');
    alertBox.textContent = message;
    alertBox.style.backgroundColor = 'red';
    alertBox.style.color = 'white';
    alertBox.style.padding = '10px';
    alertBox.style.borderRadius = '5px';
    alertBox.style.marginBottom = '10px';
    alertBox.style.width = '200px'; 
    alertBox.style.textAlign = 'center';
    alertBox.style.position = 'fixed';
    alertBox.style.top = '50%'; 
    alertBox.style.left = '50%'; 
    alertBox.style.transform = 'translate(-50%, -50%)';
    alertBox.id = 'alertBox'; 
    document.body.appendChild(alertBox);
  
    // Remove the alert after 3 seconds
    setTimeout(function() {
      removeAlert();
    }, 3000);
  }
  
  function removeAlert() {
    var existingAlert = document.getElementById('alertBox');
    if (existingAlert) {
      existingAlert.parentNode.removeChild(existingAlert);
    }
  }
  
  function submitForm() {
    // Server-side processing can be done here
    // For demonstration purposes, I'll show an alert message
    alert("Form submitted successfully!");
  }