// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(function () {
    //overriding jquery-ui.autocomplete .js functions
    $.ui.autocomplete.prototype._renderMenu = function (ul, items) {

        var self = this;
        //table definitions
        var tableDiv = $("#tableDiv");
        tableDiv.empty();
        tableDiv.append("<table class=" + '"' + 'table' + '"' + "><thead><tr><th>ID#</th><th>Name</th><th>category</th><th>city</th></tr></thead><tbody></tbody></table>");
        
        $.each(items, function (index, item) {
            self._renderItemData(ul, tableDiv.find("table tbody"), item);
        });
    };
    $.ui.autocomplete.prototype._renderItemData = function (ul, table, item) {
         
        return this._renderItem(table, item).data("ui-autocomplete-item", item);
    };
    $.ui.autocomplete.prototype._renderItem = function (table, item) {
        return $("<tr class='ui-menu-item' role='presentation'></tr>")
            //.data( "item.autocomplete", item )
            .append("<td >" + item.id + "</td>" + "<td>" + item.value + "</td>" + "<td>" + item.category + "</td>" + "<td>" + item.city + "</td>")
            .appendTo(table);
    };

    $.getJSON("js/profiles.json", function (json) {


        var projects = [
            { id: 1, value: "Thomas", category: "Afiliado", city: "San Juan" },
            { id: 65, value: "Richard", category: "Suplidor", city: "Agudillas" },
            { id: 235, value: "Harold", category: "Afiliado", city: "San Juan" },
            { id: 78, value: "Santa Maria", category: "Suplidor", city: "San Juan" },
            { id: 75, value: "Gunner", category: "Afiliado", city: "San Juan" },
            { id: 124, value: "Shad", category: "Suplidor", city: "San Juan" },
            { id: 1233, value: "Aziz", category: "Medico", city: "Toa Alta" },

            { id: 244, value: "Olvin", category: "Suplidor", city: "San Juan" },
            { id: 1, value: "Carlos", category: "Afiliado", city: "Toa Alta" },
            { id: 65, value: "Juan Jose", category: "Afiliado", city: "Agudillas" },
            { id: 235, value: "Harold", category: "Afiliado", city: "Toa Alta" },
            { id: 78, value: "Santa Maria", category: "Medico", city: "San Juan" },
            { id: 75, value: "Rafael", category: "Afiliado", city: "Agudillas" },
            { id: 124, value: "Yancarlos", category: "Medico", city: "Agudillas" },
            { id: 1233, value: "Maria", category: "Medico", city: "Toa Alta" },
            { id: 244, value: "Jonas", category: "Medico", city: "Toa Alta" }
        ];
        console.log(json);
        console.log(projects);

        $("#project").autocomplete({
            minLength: 1,
            source: projects,

            focus: function (event, ui) {
                console.log(ui.item.id);
                $("#project").val(ui.item.value);
                $("#project-id").val(ui.item.id);
                // $("#project-description").html(ui.item.category);
                return false;
            }//you can write for select too
            /*select:*/
        })

    });


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
        $("#value").prop("disabled", true);
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
