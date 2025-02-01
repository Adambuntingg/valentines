function checkName() {
    const correctName = "Elsa"; // Change this to your preferred name
    const enteredName = document.getElementById("nameInput").value.trim();

    if (enteredName === correctName) {
        window.location.href = "secret.html";
    } else {
        alert("You arent my vals girl, go away!");
    }
}
