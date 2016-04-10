'use strict';

app.resetPasswordView = kendo.observable({
    onShow: function () {},
    afterShow: function () {
        $('#resetpasswordsubmit').addClass('disabled');
        var validator = $('#resetpasswordform').kendoValidator({
            validateOnBlur: false
        }).data('kendoValidator');
        var formFields = $('#resetpasswordform').find('input');
        formFields.on('keyup keypress blur change input', function () {
            validator.hideMessages();
            if (validator.validate()) {
                $('#resetpasswordsubmit').removeClass('disabled');
            } else {
                $('#resetpasswordsubmit').addClass('disabled');
            }
        });


    }
});

// START_CUSTOM_CODE_resetPasswordView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_resetPasswordView
(function (parent) {
    var resetPasswordViewModel = kendo.observable({
        fields: {
            sellerConfirmPassword: '',
            sellerNewPassword: '',
            sellerOldPassword: '',
        },
        submit: function () {
            var emailId=localStorage.getItem('email');
            if ($("#sellerNewPassword").val() == $("#sellerConfirmPassword").val()) {

                $.ajax({
                    url: "http://sit.foodvite.co:8080/FVS/v1/changePassword",
                    type: "POST",
                    contentType: "application/json",
                    data: JSON.stringify({
                        "email":emailId ,
                        "oldPassword": $("#sellerOldPassword").val(),
                        "newPassword": $("#sellerNewPassword").val()
                    }),
                    dataType: "json",
                    success: function (data) {

                        var ob = JSON.parse(JSON.stringify(data));
                        var errorCode = ob.responseCode;
                        var responsemessage = ob.message;
                        if (errorCode == 101) {
                            $('#resetpasswordform')[0].reset();
                            alert(responsemessage);
                        } else if (errorCode == 100) {
                            $('#resetpasswordform')[0].reset();
                            alert(responsemessage);

                        }
                        else if (errorCode == 400) {
                            $('#resetpasswordform')[0].reset();
                            alert(responsemessage);

                        }
                    },
                    error: function (response) {
                        $('#resetpasswordform')[0].reset();
                        alert("server error");
                    }
                });





            } else {
                alert("New and Confirm passwords dont match");
                $('#resetpasswordform')[0].reset();
            }

        },
        cancel: function () {}
    });

    parent.set('resetPasswordViewModel', resetPasswordViewModel);
})(app.resetPasswordView);

// START_CUSTOM_CODE_resetPasswordViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_resetPasswordViewModel