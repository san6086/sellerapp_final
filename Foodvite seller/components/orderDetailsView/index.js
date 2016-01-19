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
        submit: function() {$.ajax({
                url: "http://sit.foodvite.co:81/FVS/FV",
                type: "POST",
                contentType: "application/x-www-form-urlencoded",
                data: {data: JSON.stringify({ "serviceName": "SignUp"})},
                dataType: "json"
            });},
        cancel: function() {$.ajax({
                url: "http://sit.foodvite.co:81/FVS/FV",
                type: "POST",
                contentType: "application/x-www-form-urlencoded",
                data: {data: JSON.stringify({ "serviceName": "SignUp"})},
                dataType: "json"
            });}
    });

    parent.set('orderDetailsViewModel', orderDetailsViewModel);
})(app.orderDetailsView);

// START_CUSTOM_CODE_orderDetailsViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_orderDetailsViewModel