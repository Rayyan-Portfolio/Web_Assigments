$(document).ready(function() {
    // SignIn Form Validation
    $('#signInForm').submit(function(event) {
        var username = $('input[name="username"]').val();
        var password = $('input[name="password"]').val();
        if (!username || !password) {
            alert('Username and password are required.');
            event.preventDefault();
        }
    });

    // SignUp Form  Validation  
    $('#signUpForm').submit(function(event) {
        var fullname = $('input[name="fullname"]').val();
        var email = $('input[name="email"]').val();
        var password = $('input[name="password"]').val();
        var confirmPassword = $('input[name="confirmPassword"]').val();
        var age = $('input[name="age"]').val();
        var phone = $('input[name="phone"]').val();
        var address = $('input[name="address"]').val();

        if (!fullname || !email || !password || !confirmPassword || !age || !phone || !address) {
            alert('All fields are required.');
            event.preventDefault();
        } else if (password !== confirmPassword) {
            alert('Passwords do not match.');
            event.preventDefault();
        } else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(password)) {
            alert('Password must contain at least 8 characters including at least one number and one special character.');
            event.preventDefault();
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Invalid email address.');
            event.preventDefault();
        } else if (isNaN(age) || age < 18 || age > 100) {
            alert('Invalid age. Please enter a valid age between 18 and 100.');
            event.preventDefault();
        }
    });
});
