'use strict';

app.ordersView = kendo.observable({
    onShow: function () {
       
  // alert(JSON.Stringify(myvar)); 
    },
    afterShow: function () {
        $('#error-message').hide();
        $('#error-message-2').hide();
        var sellerId4 = localStorage.getItem('sellerId');       
      //  alert(sellerId4);
        var switchInstance = $("#orders-switch").data("kendoMobileSwitch");
        if (switchInstance.check()) {
            $.ajax({
                url: "http://sit.foodvite.co:8080/FVS/v1/sellerStatus",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({
                    "sellerId": sellerId4,
                    "order": true
                }),
                dataType: "json",
                success: function (data) {
                    var ob = JSON.parse(JSON.stringify(data));
                }
            });
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
(function (parent) {
    var ordersViewModel = kendo.observable({
      
      
    });
    parent.set('ordersViewModel', ordersViewModel);
})(app.ordersView);
// END_CUSTOM_CODE_ordersView