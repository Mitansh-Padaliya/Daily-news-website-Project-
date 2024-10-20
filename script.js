document.addEventListener("DOMContentLoaded", function () {
    // Login form validation and redirection
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const loginEmail = document.getElementById("loginEmail").value;
        const loginPassword = document.getElementById("loginPassword").value;
        const responseMessage = document.getElementById("responseMessage");

        // Validate login email
        if (!validateEmail(loginEmail)) {
            responseMessage.textContent = "Please enter a valid email address.";
            responseMessage.style.color = "red";
            return;
        }

        // Validate login password (at least 6 characters)
        if (loginPassword.length < 6) {
            responseMessage.textContent = "Password must be at least 6 characters long.";
            responseMessage.style.color = "red";
            return;
        }

        // Redirect to the desired page after successful login validation
        responseMessage.textContent = "Login successful! Redirecting...";
        responseMessage.style.color = "green";

        // Simulate redirection to a dashboard or home page (replace with the actual URL)
        setTimeout(function () {
            window.location.href = "index.html";
        }, 2000); 
    });

    // Sign-up form validation and redirection
    const signupForm = document.getElementById("signupForm");
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault(); 
        const signupEmail = document.getElementById("signupEmail").value;
        const signupPassword = document.getElementById("signupPassword").value;
        const responseMessage = document.getElementById("responseMessage");

        // Validate sign-up email
        if (!validateEmail(signupEmail)) {
            responseMessage.textContent = "Please enter a valid email address.";
            responseMessage.style.color = "red";
            return;
        }

        // Validate sign-up password (at least 6 characters)
        if (signupPassword.length < 6) {
            responseMessage.textContent = "Password must be at least 6 characters long.";
            responseMessage.style.color = "red";
            return;
        }

        // Redirect to a welcome page or home page after successful sign-up validation
        responseMessage.textContent = "Sign-up successful! Redirecting...";
        responseMessage.style.color = "green";

        // Simulate redirection to a welcome or dashboard page (replace with the actual URL)
        setTimeout(function () {
            window.location.href = "index.html"; 
        }, 2000); 
    });

    // Email validation function (checks if the email is in a valid format)
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
});
