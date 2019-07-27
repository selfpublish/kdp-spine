/*global console, alert, prompt */

// pages to inches 1

function convertDollar() {
    "use strict";
    var amount = document.getElementById("inches").value,
        result = amount * 0.0025,
        message = document.getElementById("result1");

    message.innerHTML = amount + " Pages allows letter height of " + result + " inches";

    if (amount === "") {

        message.innerHTML = "please don't leave it empty";

    } else if (amount === "0") {

        message.innerHTML = "please write a number above 0";

    } else if (amount < 0) {

        message.innerHTML = "pleade don't write negative values";

    } else if (amount > 10000) {

        message.innerHTML = "please write a value belue 10000";

    } else if (isNaN(amount)) {

        message.innerHTML = "this field can accept numbers only";

    } else {

        message.innerHTML = "For " + amount + " pages text height can be up to " + result.toFixed(2) + " inches";
    }
    
    
}

// pages to mm (creme)

function convertYen() {
    "use strict";
    var amount = document.getElementById("yen").value,
        result = amount * 0.0635,
        message = document.getElementById("result2");

    message.innerHTML = amount + " yen is worth " + result + " pound";

    if (amount === "") {

        message.innerHTML = "please don't leave it empty";

    } else if (amount === "0") {

        message.innerHTML = "please write a number above 0";

    } else if (amount < 0) {

        message.innerHTML = "pleade don't write negative values";

    } else if (amount > 10000) {

        message.innerHTML = "please write a value belue 10000";

    } else if (isNaN(amount)) {

        message.innerHTML = "this field can accept numbers only";

    } else {

        message.innerHTML = "For " + amount + " pages text height can be up to " + result.toFixed(2) + " mm";
    }
}

// pages to inches (white paper)

function convertYoro() {
    "use strict";
    var amount = document.getElementById("yoro").value,
        result = amount * 0.002252,
        message = document.getElementById("result3");

    message.innerHTML = amount + " Yoro is worth " + result + " pound";

    if (amount === "") {

        message.innerHTML = "please don't leave it empty";

    } else if (amount === "0") {

        message.innerHTML = "please write a number above 0";

    } else if (amount < 0) {

        message.innerHTML = "pleade don't write negative values";

    } else if (amount > 10000) {

        message.innerHTML = "please write a value belue 10000";

    } else if (isNaN(amount)) {

        message.innerHTML = "this field can accept numbers only";

    } else {

        message.innerHTML = "For " + amount + " pages text height can be up to " + result.toFixed(2) + " inches";
    }
}

// pages to mm (white paper)

function convertReyal() {
    "use strict";
    var amount = document.getElementById("reyal").value,
        result = amount * 0.0572,
        message = document.getElementById("result4");

    message.innerHTML = amount + " Reyal is worth " + result + " pound";

    if (amount === "") {

        message.innerHTML = "please don't leave it empty";

    } else if (amount === "0") {

        message.innerHTML = "please write a number above 0";

    } else if (amount < 0) {

        message.innerHTML = "pleade don't write negative values";

    } else if (amount > 10000) {

        message.innerHTML = "please write a value belue 10000";

    } else if (isNaN(amount)) {

        message.innerHTML = "this field can accept numbers only";

    } else {

         message.innerHTML = "For " + amount + " pages text height can be up to " + result.toFixed(2) + " mm";
    }
}