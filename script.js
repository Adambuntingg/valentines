function checkName() {
    const correctName = "Alice"; // Change this to your preferred name
    const enteredName = document.getElementById("nameInput").value.trim();

    if (enteredName === correctName) {
        window.location.href = "secret.html";
    } else {
        alert("Incorrect name, try again!");
    }
}
