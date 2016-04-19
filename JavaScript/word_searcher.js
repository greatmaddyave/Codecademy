/*jshint multistr:true */
var text = prompt("Please copy & paste the text you would like to search through:");

var word = prompt("What word would you like to search for?)");

var hits = [];

for ( var i = 0; i < text.length; i++) {
    if (text[i] === word[0] & text[i + (word.length - 1)] === word[word.length - 1] & (text[i + (word.length)] === " " || text[i + (word.length)] === "," || text[i + (word.length)] === "." || text[i + (word.length)] === "!" || text[i + (word.length)] === "?")) {
        for ( var j = i; j < i + word.length; j++ ){
            hits.push(text[j]);
        }
    }
};


if (text.includes(word)) {
    console.log("The word" + " " + '"' + word + '"' + " " + "was found " + hits.length / word.length + " " + "times in the text!" );
  } else {
    console.log(word + "was not found in the text, Make sure that your provided word is case sensitive.");
};
