'use strict';

app.loginView = kendo.observable({
    onShow: function () {},
    afterShow: function () {
        $('#login-error-message-1').hide();
        $('#login-error-message-2').hide();
        $('#loginSubmit').addClass('disabled');
        var validator = $('#loginForm').kendoValidator({
            validateOnBlur: false
        }).data('kendoValidator');
        var formFields = $('#loginForm').find('input');
        formFields.on('keyup keypress blur change input', function () {
            validator.hideMessages();
            if (validator.validate()) {
                $('#loginSubmit').removeClass('disabled');
            } else {
                $('#loginSubmit').addClass('disabled');
            }
        });
    }
});

// START_CUSTOM_CODE_loginView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_loginView
(function (parent) {
    var loginViewModel = kendo.observable({
        fields: {
            sellerloginEmail: '',
            sellerloginPassword: '',
            sellerchangepasswordEmail: ''
        },
        submit: function () {
            var os = kendo.support.mobileOS;
            $.ajax({
                url: "http://sit.foodvite.co:8080/FVS/v1/signin",
               // url: "http://demo4878680.mockable.io/orders",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({
                "emailId": $("#sellerloginEmail").val(),
                "password": $("#sellerloginPassword").val(),
                "deviceID": "deviceID",
                "deviceType": os.device
                }),
                dataType: "json",
                success: function (data) {
                    var ob = JSON.parse(JSON.stringify(data));
                    var dataSource = new kendo.data.DataSource({
                        data: ob
                    });
                    var errorCode = ob.responseCode;
                    var responsemessage = ob.message;
                    var apikey = ob.data["apiToken"];
                    var sellerId = ob.data["sellerId"];
                    var emailId = $("#sellerloginEmail").val();
                    localStorage.setItem('email', emailId);
                    localStorage.setItem('apikey', apikey);
                    localStorage.setItem('sellerId', sellerId);
                    localStorage.setItem('orders',ob.data["orders"]);                 
                    alert(ob.data["orders"]);
                    if (errorCode == 101) {
                        $('#loginForm')[0].reset();
                        app.mobileApp.navigate('components/ordersView/view.html');
                    } else if (errorCode == 100) {
                        $('#loginForm')[0].reset();
                        alert(responsemessage);

                    }
                },
                error: function () {
                    $('#error-message-1').show();
                    $('#error-message-1').fadeOut(3000);

                }
            });
        },
        passwordsubmit: function () {
            $.ajax({
                url: "http://sit.foodvite.co:8080/FVS/v1/forgetPassword",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({
                    "email": $("#sellerpasswordEmail").val()
                }),
                dataType: "json",
                success: function (data) {
                    var ob1 = JSON.parse(JSON.stringify(data));
                    var errorCode1 = ob1.responseCode;
                    var responsemessage1 = ob1.message;
                    if (errorCode1 == 101) {
                        alert(responsemessage1);
                    } else if (errorCode1 == 100) {

                        alert(responsemessage1);
                    }
                },
                error: function (response) {
                    alert(response);
                }
            });
        }
    });
    parent.set('loginViewModel', loginViewModel);
})(app.loginView);




// START_CUSTOM_CODE_loginViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_loginViewModel