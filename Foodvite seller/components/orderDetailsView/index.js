'use strict';

app.orderDetailsView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_orderDetailsView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_orderDetailsView
(function(parent) {
    var orderDetailsViewModel = kendo.observable({
        fields: {},
        submit: function() {},
        cancel: function() {}
    });

    parent.set('orderDetailsViewModel', orderDetailsViewModel);
})(app.orderDetailsView);

// START_CUSTOM_CODE_orderDetailsViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_orderDetailsViewModel