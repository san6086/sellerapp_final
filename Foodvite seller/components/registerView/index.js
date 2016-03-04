'use strict';

app.registerView = kendo.observable({
    init: function () {},
    onShow: function () {
        $('#error-message-1').hide();
        $('#error-message-2').hide();
    },
    afterShow: function () {
        var validator = $('#registerForm').kendoValidator({
            validateOnBlur: false
        }).data('kendoValidator');
        var formFields = $('#registerForm').find('input');
        formFields.on('keyup keypress blur change input', function () {
            validator.hideMessages();
            if (validator.validate()) {
                $('#register-submit').removeClass('disabled');
            } else {
                $('#register-submit').addClass('disabled');
            }
        });
    }

});

(function (parent) {
    var registerViewModel = kendo.observable({
            fields: {
                sellerEmail2: '',
                sellerContact: '',
                sellerContactPerson: '',
                sellerPincode: '',
                sellerAddress: '',
                sellerName: ''
            },
            submit: function () {
                var os = kendo.support.mobileOS;
                $.ajax({
                    url: "http://sit.foodvite.co:81/FVS/FV",
                    type: "POST",
                    contentType: "application/x-www-form-urlencoded",
                    data: {
                        data: JSON.stringify({
                            "serviceName": "SignUp",
                            "name": $("#sellerName").val(),
                            "address": $("#sellerAddress").val(),
                            "pincode": $("#sellerPincode").val(),
                            "contact": $("#sellerContact").val(),
                            "contactperson": $("#sellerContactPerson").val(),
                            "email": $("#sellerEmail").val(),
                            "deviceType": os.device,
                            "deviceID": ""
                        })
                    },
                    dataType: "json",
                    success: function (data) {
                        var ob = JSON.parse(JSON.stringify(data));
                        var errorCode = ob.resultCode;
                        var message = ob.msg;
                        if (errorCode == "101") {
                            $('#registerForm')[0].reset();
                            app.mobileApp.navigate('components/registersuccessView/view.html');
                        }
                        else if (errorCode == "100") {
                            $('#registerForm')[0].reset();
                            alert(message);
                        }
                    },
                    error: function () {
                        $('#error-message-1').show();
                        $('#error-message-1').fadeOut(3000);
                    }
                });
            }
        });
    parent.set('registerViewModel', registerViewModel);
})(app.registerView);





// START_CUSTOM_CODE_registerViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_registerViewModel