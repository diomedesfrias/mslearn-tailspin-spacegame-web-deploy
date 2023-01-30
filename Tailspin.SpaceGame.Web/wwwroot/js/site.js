// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(function () {
    //overriding jquery-ui.autocomplete .js functions
    $.ui.autocomplete.prototype._renderMenu = function (ul, items) {
        console.log("run");
        console.log("ta");
        var self = this;
        //table definitions
        ul.append("<table><thead><tr><th>ID#</th><th>Name</th><th>Cool&nbsp;Points</th></tr></thead><tbody></tbody></table>");
        $.each(items, function (index, item) {
            self._renderItemData(ul, ul.find("table tbody"), item);
        });
    };
    $.ui.autocomplete.prototype._renderItemData = function (ul, table, item) {
        return this._renderItem(table, item).data("ui-autocomplete-item", item);
    };
    $.ui.autocomplete.prototype._renderItem = function (table, item) {
        return $("<tr class='ui-menu-item' role='presentation'></tr>")
            //.data( "item.autocomplete", item )
            .append("<td >" + item.id + "</td>" + "<td>" + item.value + "</td>" + "<td>" + item.cp + "</td>")
            .appendTo(table);
    };
    //random json values
    var projects = [
        { id: 1, value: "Thomas", cp: 134 },
        { id: 65, value: "Richard", cp: 1743 },
        { id: 235, value: "Harold", cp: 7342 },
        { id: 78, value: "Santa Maria", cp: 787 },
        { id: 75, value: "Gunner", cp: 788 },
        { id: 124, value: "Shad", cp: 124 },
        { id: 1233, value: "Aziz", cp: 3544 },
        { id: 244, value: "Buet", cp: 7847 }
    ];
    $("#project").autocomplete({
        minLength: 1,
        source: projects,

        focus: function (event, ui) {
            console.log(ui.item.value);
            $("#project").val(ui.item.value);
            $("#project-id").val(ui.item.id);
            $("#project-description").html(ui.item.cp);
            return false;
        }//you can write for select too
        /*select:*/
    })
});

$(document).ready(function () {
    loginUserFlow();



});















function loginUserFlow() {
    $(document).ready(function () {
        $("#logInfoContainer").hide();
    });

    $("#loginBtn").click(function () {
        $("#emailSendPLabel").hide();
        $("#okButton").hide();
        $('#login-modal').modal('show');
    });

    $("#login-btn-accept").click(function () {
        $("#emailSendPLabel").show();
        $("#login-btn-accept").hide();
        $("#okButton").show();
        $("#signUpBtn").hide();
        $("#cancel-login-btn").hide();
        $("#dontHaveAccountLabel").hide();
        $("#userName").prop("disabled", true);
    });

    $("#okButton").click(function () {
        $('#login-modal').modal('hide');
        $('#codeModal').modal('show');
    });

    $("#continueCodeBtn").click(function () {
        $('#codeModal').modal('hide');
        $('#welcomeModal').modal('show');
    });

    $("#welcomeAcceptBtn").click(function () {
        $('#welcomeModal').modal('hide');
        $("#loginBtn").hide();
    });
}
