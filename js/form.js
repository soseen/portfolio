$(document).ready(function () {
    
    $('.form-button').click(function (event) {
        var name = $('.form-name').val();
        var email = $('.form-email').val();
        var message = $('.form-message').val();
        var status = $('.status');

        if(email.includes('@') === false  || email.includes('.') === false){
            event.preventDefault();
            if(($('.invalid-mail').length === 0)){
                status.append('<p class="invalid-mail">Invalid email</p>')
            }
        } else {
            if ($('.invalid-mail').length) {
                $('.invalid-mail').remove();
            }
        }

        if(name.length < 3){
            event.preventDefault();
            if(($('.invalid-name').length === 0)){
                status.append('<p class="invalid-name">Invalid name</p>')
            } 
        } else {
            if ($('.invalid-name').length) {
                $('.invalid-name').remove();
            }
        }

        if(message.length < 10){
            event.preventDefault();
            if ($('.invalid-message').length === 0) {
            status.append('<p class="invalid-message">Your message is too short</p>')
            }
        } else {
            if ($('.invalid-message').length) {
                $('.invalid-message').remove();
            }
        }

    })


})