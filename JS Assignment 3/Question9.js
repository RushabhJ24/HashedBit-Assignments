function countWords(paragraph) {
    const words = paragraph.trim().split(/\s+/);
    return words.length;
}

const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
console.log(countWords(paragraph)); 
