function ageChange(e) {
    let age = e.target.value;
    const errorsHolder = document.getElementById("errors-holder");
    const submitButton = document.querySelector("form button[type='submit']");

    errorsHolder.textContent = "";

    if (age === "" || age < 5) {
        errorsHolder.textContent = age === "" ? "Please choose age" : "You need to be atleast 5 years old to participate";
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
}

function handleSubmit(event) {
    event.preventDefault();

    const age = parseInt(document.getElementById("q_age").value);
    const ownsPhone = document.getElementById("q_owns_phone").checked;
    const resultHolder = document.getElementById("result-holder");

    resultHolder.textContent = "";

    if (ownsPhone) {
        if (age < 13) {
            resultHolder.textContent = "You are too young to have a phone";
        } else {
            resultHolder.textContent = "Use your phone in moderation";
        }
    } else {
        if (age < 13) {
            resultHolder.textContent = "You will get a phone soon";
        } else {
            resultHolder.textContent = "You should get a phone";
        }
    }
}
