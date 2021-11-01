
(function ($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var firstName = $('.validate-input input[name="firstName"]');
    var lastName = $('.validate-input input[name="lastName"]');
    var email = $('.validate-input input[name="email"]');
    var number = $('.validate-input input[name="number"]');
    var message = $('.validate-input textarea[name="message"]');
    var experience = $('.validate-input input[name="level"]');


    $('.validate-form').on('submit',function(e){
        var check = true;

        if($(firstName).val().trim() == ''){
            showValidate(firstName);
            check=false;
        }

        if($(lastName).val().trim() == ''){
            showValidate(lastName);
            check=false;
        }

        if($(number).val().trim() == ''){
            showValidate(number);
            check=false;
        }

        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }

        if($(message).val().trim() == ''){
            showValidate(message);
            check=false;
        }

        if($(experience).val().trim() == ''){
            showValidate(experience);
            check=false;
        }
        if(!check)
            return false;

        e.preventDefault();

        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxyjzUVKCrah2Yhr4RnbVhi8PByt1V4ow-ZWcJlcUjTes4jViarrcB4RmKPYTR3V84H/exec",
            method: "POST",
            dataType: "json",
            data: $(".contact1-form").serialize(),
            success: function(response) {

                if(response.result == "success") {
                    $('.contact1-form')[0].reset();
                    alert('Thank you for contacting us.');
                    window.location.reload();
                    return true;
                }
                else {
                    alert("Something went wrong. Please try again.")
                }
            },
            error: function() {

                alert("Something went wrong. Please try again.")
            }
        })
    });


    $('.validate-form .input1').each(function(){
        $(this).focus(function(){
            hideValidate(this);
        });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



})(jQuery);
