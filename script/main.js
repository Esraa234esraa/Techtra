
$(function() {
    'use strict';

    var contactForm = function() {
        if ($('#contactForm').length > 0) {
            $( "#contactForm" ).validate({
                rules: {
                    name: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 5
                    }
                },
                messages: {
                    name: "Please enter your name",
                    email: "Please enter a valid email address",
                    message: "Please enter a message"
                },
                /* submit via fetch */
                submitHandler: function(form) {
                    var $submit = $('.submitting'),
                        waitText = 'Submitting...';

                    fetch('http://localhost:5000/contact', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            name: $('#name').val(),
                            email: $('#email').val(),
                            message: $('#message').val(),
                        })
                    })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(msg => {
                        if (msg.success) {
                            $('#form-message-warning').hide();
                            setTimeout(function(){
                                $('#contactForm').fadeOut();
                            }, 1000);
                            setTimeout(function(){
                                $('#form-message-success').fadeIn();   
                            }, 1400);
                        } else {
                            $('#form-message-warning').html(msg.message);
                            $('#form-message-warning').fadeIn();
                            $submit.css('display', 'none');
                        }
                    })
                    .catch(error => {
                        $('#form-message-warning').html("Something went wrong. Please try again.");
                        $('#form-message-warning').fadeIn();
                        $submit.css('display', 'none');
                    });
                }
            });
        }
    };
    contactForm();
});
