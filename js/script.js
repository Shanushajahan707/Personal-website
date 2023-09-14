function call(){
    alert("")
}
$(document).ready(function () {
    $("#signup_main").submit(function (event) {
        event.preventDefault(); // Prevent form submission

        var username = $("#name_main").val();
        var email = $("#email_main").val();
        // var phone = $("#phone").val();
        var usernameError = "";
        var emailError = "";
        // var phoneError = "";

        // Clear previous error messages
        $(".error-message").text("");

       
        // Check username
        if (username.length < 3) {
            $("#usernameError_main").text("Username must be at least 3 characters long.");
            usernameError = $("#usernameError_main").text();

        }

        // Check email
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
            $("#emailError_main").text("Invalid email format.");
            emailError = $("#emailError_main").text();
        }

        // // Check phone number
        // if (/^[0-9]{10}$/.test(phone)) {
        //     $("#phoneNumberError").text("Invalid phone number.");
        //     phoneError = $("#phoneNumberError").text();
        // }

        // If all fields are valid, you can proceed with sending the email (e.g., to Formspree).
        if (usernameError === "" && emailError === "") {
            // Trigger the Formspree submission
            $("#signup_main").attr("action", "https://formspree.io/f/mrgwkwnd");
            $("#signup_main").attr("method", "POST");
            $("#signup_main").unbind("submit").submit();
            alert("Form is valid. Submitted successfully.");
        }
    });
});


$(document).ready(function () {
    // Validate the username as the user types or focuses out
    $("#name_main").on("input blur", function () {
        var username = $(this).val();
        $("#usernameError_main").text(""); // Clear previous error message

        if (username.length < 3) {
            $("#usernameError_main").text("Username must be at least 3 characters long.");
        }
    });

    // Validate the email as the user types or focuses out
    $("#email_main").on("input blur", function () {
        var email = $(this).val();
        $("#emailError_main").text(""); // Clear previous error message

        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
            $("#emailError_main").text("Invalid email format.");
        }
    });

    // // Validate the email as the user types or focuses out
    // $("#phone").on("input blur", function () {
    //     var number = $(this).val();
    //     $("#phoneNumberError").text(""); // Clear previous error message

    //     if (/^[0-9]{10}$/.test(number)) {
    //         $("#phoneNumberError").text("Invalid phone number.");
    //     }
    // });
});