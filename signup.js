document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Reset previous error messages
    var errorFields = document.querySelectorAll('.invalid-feedback');
    errorFields.forEach(function(errorField) {
        errorField.style.display = 'none';
    });

    // Get form values
    var email = document.getElementById('email').value.trim();
    var birth = document.getElementById('birth').value.trim();
    var username = document.getElementById('username').value.trim();
    var id = document.getElementById('id').value.trim();
    var password = document.getElementById('password').value.trim();
    var cpassword = document.getElementById('cpassword').value.trim();
    var terms = document.getElementById('terms-check').checked;

    var isValid = true;

    // Email validation
    if (email === "") {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Birth date validation
    if (birth === "") {
        document.getElementById('birthError').style.display = 'block';
        isValid = false;
    }

    // Username validation
    if (username === "") {
        document.getElementById('usernameError').style.display = 'block';
        isValid = false;
    }

    // ID validation
    if (id === "") {
        document.getElementById('idError').style.display = 'block';
        isValid = false;
    }

    // Password validation
    if (password === "") {
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    // Confirm password validation
    if (cpassword === "") {
        document.getElementById('cpasswordError').style.display = 'block';
        isValid = false;
    } else if (password !== cpassword) {
        document.getElementById('cpasswordError').innerText = 'Passwords do not match!';
        document.getElementById('cpasswordError').style.display = 'block';
        isValid = false;
    }

    // Terms and conditions validation
    if (!terms) {
        document.getElementById('termsError').style.display = 'block';
        isValid = false;
    }

    // If all validations pass, submit the form
    if (isValid) {
        alert("Form submitted successfully!");
        // this.submit(); // Uncomment this line to submit the form
    }
});