$(document).ready(function(){
    $('#mobileMenu').click(function(){
        $('.nav-links').toggleClass('active');
    });

    $('.nav-links li a').click(function(){
        $('.nav-links').removeClass('active');
    });
});


$(document).ready(function () {
    $('#contact-form').submit(function (e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();

        if (name.trim() == '') {
            alert('Name field is empty');
            return false;
        }

        if (email.trim() == '' || !isValidEmail(email)) {
            alert('Please enter a valid email address');
            return false;
        }

        if (subject.trim() == '') {
            alert('Subject field is empty');
            return false;
        }

        if (message.trim() == '') {
            alert('Message field is empty');
            return false;
        }

        alert('Form submitted successfully');
        // You can perform AJAX call to submit the form data here
    });

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
