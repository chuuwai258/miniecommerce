function regBtn() {
    const firstName = document.querySelector(".firstName").value
    const lastName = document.querySelector(".lastName").value
    const email = document.querySelector(".regEmail").value
    const password = document.querySelector(".pass1").value;
    const confirmPass = document.querySelector(".pass2").value;

    const user = {
        firstName,
        lastName,
        email,
        password,
        confirmPass
    };

    if (password === confirmPass) {

        localStorage.setItem("user", JSON.stringify(user));


    } else {
        alert("Password not match");
    }
     
}
//login Page
function homePage(event) {

    event.preventDefault();

    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
        savedUser &&
        savedUser.email === email &&
        savedUser.password === password
    ) {

        localStorage.setItem("isLoggedIn", "true");

        alert("Login successful!");

        window.location.href = "logout.html";
    }else{
        alert("Invalid email or password. Please try again.");
    }

}
//Logout Page
function logoutPage() {

    localStorage.removeItem("isLoggedIn");

    alert("Logout successful!");

    window.location.href = "register.html";
}

