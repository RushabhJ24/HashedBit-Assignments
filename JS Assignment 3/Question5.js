function correctionWord(sentence, wrong, correct) {
    const regex = new RegExp('\\b' + wrong + '\\b', 'gi'); 
    const correctedSentence = sentence.replace(regex, correct); 
    return correctedSentence;
}

let sentence = "The colour of the sky is blue.";
let wrongWord = "colour";
let correctWord = "color";

let correctedSentence = correctionWord(sentence, wrongWord, correctWord);
console.log(correctedSentence); 