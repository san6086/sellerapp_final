'use strict';

app.ordersView = kendo.observable({
    onShow: function () {
        
    },
    afterShow: function () {
        $('#error-message').hide();
        $('#error-message-2').hide();
        var switchInstance = $("#orders-switch").data("kendoMobileSwitch");
        if (switchInstance.check()) {
            $('#error-message').hide();
            $('#error-message-2').hide();
        } else {
            $('#error-message').show();
            $('#error-message').fadeOut(5000);

        }

    }

});



// START_CUSTOM_CODE_ordersView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_ordersView