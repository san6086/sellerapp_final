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
        submit: function() {}
    });

    parent.set('registerViewModel', registerViewModel);
})(app.registerView);

// START_CUSTOM_CODE_registerViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_registerViewModel