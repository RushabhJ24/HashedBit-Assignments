function toggleVisibility() {
    var paragraph = document.getElementById("useless-paragraph");
    
    if (paragraph.style.display === "none") {
        
        paragraph.style.display = "block";
    } else {
        
        paragraph.style.display = "none";
    }
}
