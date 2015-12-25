'use strict';

app.resetPasswordView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_resetPasswordView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_resetPasswordView
(function(parent) {
    var resetPasswordViewModel = kendo.observable({
        fields: {
            sellerConfirmPassword: '',
            sellerNewPassword: '',
            sellerOldPassword: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('resetPasswordViewModel', resetPasswordViewModel);
})(app.resetPasswordView);

// START_CUSTOM_CODE_resetPasswordViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_resetPasswordViewModel