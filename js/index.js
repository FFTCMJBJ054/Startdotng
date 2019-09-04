function PrintError(errDiv, errMessage) {
    document.getElementById(errDiv).innerHTML = errMessage;
}

function ValidateForm() {
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var title = document.contactForm.title.value;
    var comment = document.contactForm.comments.value;

    var nameErr = emailErr = titleErr = commentErr = true;
    if (name == "") {
        PrintError("nameErr", "Please enter your name")
    } else if (name.length < 4) {
        PrintError("nameErr", "Please enter at least four characters")
    } else {
        var nameRGEX = /^[a-zA-Z\s]+$/;
        if (nameRGEX.test(name) === false) {
            PrintError("nameErr", "Please enter a valid name");
        } else {
            PrintError("nameErr", "");
            nameErr = false;
        }
    }

    if (email == "") {
        PrintError("emailErr", "Please enter your email address");
    } else {
        var emailRGEX = /^\S+@\S+\.\S+$/;
        if (emailRGEX.test(email) === false) {
            PrintError("emailErr", "Please enter a valid email address");
        } else {
            PrintError("emailErr", "");
            emailErr = false;
        }
    }

    if (title == "") {
        PrintError("titleErr", "Please select a title");
    } else {
        PrintError("titleErr", "");
        titleErr = false;
    }

    if (comment == "") {
        PrintError("commentErr", "Please, you should drop a message");
    } else if (comment.length < 20) {
        PrintError("commentErr", "Please enter at least 20 characters");
    } else {
        PrintError("commentErr", "");
        titleErr = false;
    }

}
var form = document.getElementById("contactform");

function handleForm(event) {
    event.preventDefault();
}
form.addEventListener('submit', handleForm);