function displayRandomNumber() {
    let randomNumber = Math.floor(Math.random() * (21 + 21) - 21);
    
    const numParagraph = document.getElementById("num");
    numParagraph.textContent = randomNumber;

    const feedbackDiv = document.createElement("div");
    feedbackDiv.textContent = randomNumber < 0 ? "Cold" : "Hot";
    document.body.appendChild(feedbackDiv);
}
