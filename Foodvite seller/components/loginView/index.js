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
        submit: function() {app.mobileApp.navigate('components/ordersView/view.html');},
        cancel: function () {}
    });
    parent.set('loginViewModel', loginViewModel);
})(app.loginView);




// START_CUSTOM_CODE_loginViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_loginViewModel