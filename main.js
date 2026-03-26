function checkAge() {

    let age = document.getElementById("age").value;

    // Convert input to number
    if (Number(age) >= 18) {
        document.getElementById("answer").innerHTML = "Status: You're eligible to vote";
    }
    else {
        document.getElementById("answer").innerHTML = "Status: You're still a minor";
    }

}

function refreshPage() {
    location.reload();
}