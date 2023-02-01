// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var tipoDeBusqueda = "";
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

$("#tableMenu p").on('click', function (e) {
    // e.preventDefault(); // cancel the link behaviour
    tipoDeBusqueda = $(this).text();
    console.log(tipoDeBusqueda);
    $("#dLabel").text(tipoDeBusqueda);

});



function signUpUserFlow() {

    $("#signUpBtn").click(function () {
        $('#login-modal').modal('hide');
        $('#SignUp-modal').modal('show');
    });

    $("#signUp-btn-accept").click(function () {
        $("#emailSendPLabelSignUp").show();
        $("#cancel-signUp-btn").hide();
        $("#signUp-btn-accept").hide();
        $("#okButtonSignUp").show();
    });

    $("#okButtonSignUp").click(function () {
        $('#SignUp-modal').modal('hide');
        $('#codeModal').modal('show');
    });
}


function loginUserFlow() {
    $(document).ready(function () {
        $("#logInfoContainer").hide();
    });

    signUpUserFlow();

    $("#loginBtn").click(function () {
        $("#emailSendPLabelSignUp").hide();
        $("#emailSendPLabel").hide();
        $("#okButton").hide();
        $("#okButtonSignUp").hide();
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

        var userName = $("#userName").val();
        $("#userNameLabel").text(userName);
        $("#logInfoContainer").show();
    });
}

function fillTable() {
    //table definitions
    var tableDiv = $("#tableDiv");
    tableDiv.empty();
    tableDiv.append("<table class=" + '"' + 'table table-striped table-bordered' + '"' + "><thead><tr><th>ID#</th><th>Name</th><th>Category</th><th>city</th></tr></thead><tbody></tbody></table>");

    var searchText = $("#project").val();
    var searchType = tipoDeBusqueda;

    if (searchText === null) {
        AddElementsToList(projects, tableDiv);
    }

    if (searchType === null) {
        AddElementsToList(projects, tableDiv);
    }

    else {
        var projects2 = [];

        switch (searchType) {
            case 'Name':
                projects2 = projects.filter(
                    function (el) {
                        return el.value.toLowerCase().includes(searchText.toLowerCase()
                        );
                    });
                break;
            case 'Category':
                projects2 = projects.filter(
                    function (el) {
                        return el.category.toLowerCase().includes(searchText.toLowerCase()
                        );
                    });
                break
            case 'City':
                projects2 = projects.filter(
                    function (el) {
                        return el.city.toLowerCase().includes(searchText.toLowerCase()
                        );
                    });
                break;
            default:
                projects2 = projects.filter(
                    function (el) {
                        return el.city.toLowerCase().includes(searchText.toLowerCase()
                        );
                    });
                break;
        }

        AddElementsToList(projects2, tableDiv);
    }
}

function AddElementsToList(projects2, tableDiv) {

    if (projects2.length != 0) {
        for (var i = 0; i < projects2.length; i++) {
            console.log("resultado");
            addRow(tableDiv.find("table tbody"), projects2[i]);
        }
    }
}

function addRow(table, item) {
    $("<tr class='ui-menu-item' role='presentation'></tr>")
        .append("<td >" + item.id + "</td>" + "<td>" + item.value + "</td>" + "<td>" + item.category + "</td>" + "<td>" + item.city + "</td>")
        .appendTo(table);
}

$(document).ready(function () {
    // $("#tableMenu li p")[0].click();
    loginUserFlow();
    fillTable();
});