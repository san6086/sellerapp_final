'use strict';

app.loginView = kendo.observable({
    onShow: function () {},
    afterShow: function () {}
});

// START_CUSTOM_CODE_loginView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_loginView
(function (parent) {
    var loginViewModel = kendo.observable({
        fields: {
            sellerPassword: '',
            sellerEmail: '',
        },
        submit: function() {
           $.ajax({
                url: "http://sit.foodvite.co:81/FVS/FV",
                type: "POST",
                contentType: "application/x-www-form-urlencoded",
                data: {
                    data: JSON.stringify({
                        "serviceName": "SignUp",
                        "name": "Sankranti",
                        "address": "20 Race course road",
                        "pincode": "207144",
                        "contact": "63426834",
                        "contactperson": "santhosh",
                        "email": "admin@sankranthi.com"
                    })
                },
                dataType: "json",
                success: function(data) {
                  
                	var ob = JSON.parse(JSON.stringify(data));
                    var errorCode = ob.resultCode;
                    if(errorCode  == "101"){
                        app.mobileApp.navigate('components/ordersView/view.html');
                    }
                    
                },
               error: function(data) {
                   alert("Invalid Username or Password");
               }
            });
        },
        cancel: function () {}
    });
    parent.set('loginViewModel', loginViewModel);
})(app.loginView);




// START_CUSTOM_CODE_loginViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_loginViewModel