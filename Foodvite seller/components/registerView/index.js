'use strict';

app.registerView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_registerView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_registerView
(function(parent) {
    var registerViewModel = kendo.observable({
        fields: {
            sellerEmail2: '',
            sellerContact: '',
            sellerContactPerson: '',
            sellerPincode: '',
            sellerAddress: '',
            sellerName: ''
        },
        submit: function() { $.ajax({
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
                        app.mobileApp.navigate('components/registersuccessView/view.html');
                    }
                    
                },
               error: function(data) {
                   alert("Error Occurred. Registration not successful");
               }
            });}
    });

    parent.set('registerViewModel', registerViewModel);
})(app.registerView);

// START_CUSTOM_CODE_registerViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_registerViewModel