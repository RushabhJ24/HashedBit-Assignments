function createDiv(width, height, text) {
    
    var div = document.createElement("div");
    
    div.style.width = width + "px";
    div.style.height = height + "px";
    div.style.color="red"
    div.style.backgroundColor="blue"
    div.textContent = text;
    
    document.getElementById("container").appendChild(div);
}

createDiv(200, 100, "Hello, World!");

Window.createDiv = createDiv;