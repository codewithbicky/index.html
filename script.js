function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        window.location.href = "https://wa.me/91 9861613924";
    } else {
        document.getElementById("message").innerHTML = "Invalid Username or Password!";
    }
}
