document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true; // Flag to track overall validity
    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Clear previous error messages
    document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

    // Name validation
    if (name.length < 5) {
        document.getElementById("nameError").textContent = "Name must be at least 5 characters long.";
        isValid = false;
    }

    // Email validation
    if (!email.includes("@")) {
        document.getElementById("emailError").textContent = "Enter a valid email with '@'.";
        isValid = false;
    }

    // Phone number validation
    if (phone.length !== 10 || phone === "123456789") {
        document.getElementById("phoneError").textContent = "Enter a valid 10-digit phone number.";
        isValid = false;
    }

    // Password validation
    if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === name.toLowerCase()) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters and should not be 'password' or your name.";
        isValid = false;
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        isValid = false;
    }

    // If all validations pass, submit form (for now, just log a success message)
    if (isValid) {
        alert("Form submitted successfully!");
    }
});
