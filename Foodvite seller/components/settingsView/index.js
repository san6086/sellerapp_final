'use strict';

app.settingsView = kendo.observable({
    onShow: function () {},
    afterShow: function () {}
});

// START_CUSTOM_CODE_settingsView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_settingsView
(function (parent) {
    var settingsViewModel = kendo.observable({
        submit: function () {
            
            app.mobileApp.navigate('components/home/view.html');
        }
    });
    parent.set('settingsViewModel', settingsViewModel);
})(app.settingsView);

// START_CUSTOM_CODE_settingsViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_settingsViewModel