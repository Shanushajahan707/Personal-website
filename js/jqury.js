$(document).ready(function () {
    $("#signup").submit(function (event) {
        event.preventDefault(); // Prevent form submission

        var username = $("#name").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var usernameError = "";
        var emailError = "";
        var phoneError = "";

        // Clear previous error messages
        $(".error-message").text("");


        // Check username
        if (username.length < 3) {
            $("#usernameError").text("Username must be at least 3 characters long.");
            usernameError = $("#usernameError").text();

        }

        // Check email
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
            $("#emailError").text("Invalid email format.");
            emailError = $("#emailError").text();
        }

        // // Check phone number
        // if (/^[0-9]{10}$/.test(phone)) {
        //     $("#phoneNumberError").text("Invalid phone number.");
        //     phoneError = $("#phoneNumberError").text();
        // }

        // If all fields are valid, you can proceed with sending the email (e.g., to Formspree).
        if (usernameError === "" && emailError === "" && phoneError === "") {
            // Trigger the Formspree submission
            $("#signup").attr("action", "https://formspree.io/f/mrgwkwnd");
            $("#signup").attr("method", "POST");
            $("#signup").unbind("submit").submit();
            alert("Form is valid. Submitted successfully.");
        }
    });
});


$(document).ready(function () {
    // Validate the username as the user types or focuses out
    $("#name").on("input blur", function () {
        var username = $(this).val();
        $("#usernameError").text(""); // Clear previous error message

        if (username.length < 3) {
            $("#usernameError").text("Username must be at least 3 characters long.");
        }
    });

    // Validate the email as the user types or focuses out
    $("#email").on("input blur", function () {
        var email = $(this).val();
        $("#emailError").text(""); // Clear previous error message

        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
            $("#emailError").text("Invalid email format.");
        }
    });

    // Validate the email as the user types or focuses out
    $("#phone").on("input blur", function () {
        var number = $(this).val();
        $("#phoneNumberError").text(""); // Clear previous error message

        if (/^[0-9]{10}$/.test(number)) {
            $("#phoneNumberError").text("Invalid phone number.");
        }
    });
});


