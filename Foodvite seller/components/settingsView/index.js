'use strict';

app.settingsView = kendo.observable({
    onShow: function () {},
    afterShow: function () {
        
    }
});

// START_CUSTOM_CODE_settingsView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_settingsView
(function (parent) {
        
        var settingsViewModel = kendo.observable({
                submit: function () {
                    var emailId=localStorage.getItem('email');
                    var apikey=localStorage.getItem('apikey');
                    $.ajax({
                        url: "http://sit.foodvite.co:8080/FVS/v1/signOut",
                        type: "POST",
                        contentType: "application/json",
                        data: JSON.stringify({
                            "email":emailId,
                            "APIkey":apikey
                        }),
                        dataType: "json",
                        success: function (data) {
                            var ob = JSON.parse(JSON.stringify(data));
                            var errorCode = ob.responseCode;
                            var responsemessage = ob.message;

                            if (errorCode == 101) {
                                app.mobileApp.intiliaze();
                                app.mobileApp.navigate('components/home/view.html');
                            }
                            else if (errorCode == 100) {

                                alert(responsemessage);
                            }
                        },
                        error: function () {
                            alert("error");
                        }
                    });
                }
 }); parent.set('settingsViewModel', settingsViewModel);
})(app.settingsView);

// START_CUSTOM_CODE_settingsViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_settingsViewModel