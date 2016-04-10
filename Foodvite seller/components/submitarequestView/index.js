'use strict';

app.submitarequestView = kendo.observable({
    onShow: function () {},
    afterShow: function () { 
}});

(function (parent) {
    var sellerId4=localStorage.getItem('sellerId');
    var submitarequestViewModel = kendo.observable({
        fields: {
            editor: ''
        },
        submit: function () {          
            $.ajax({
                url: "http://sit.foodvite.co:8080/FVS/v1/saveFeedback",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({
                    "sellerId": sellerId4,
                    "feedback": $("#editor").val()
                }),
                dataType: "json",
                success: function (data) {
                    var ob = JSON.parse(JSON.stringify(data));
                    var errorCode = ob.responseCode;
                    var responsemessage = ob.message;
                    if (errorCode == 101) {
                       alert(responsemessage);                  
                    } else if (errorCode == 100) {                      
                        alert(responsemessage);
                    }
                },
                error: function () {

                }
            });
        },

    });
    parent.set('submitarequestViewModel', submitarequestViewModel);
})(app.submitarequestView);