var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");


var card1 = new BasicCard("What molecule has a double helix shape?", "DNA");
console.log(card1.front);
console.log(card1.back);
console.log("------------------------");
var card2 = new ClozeCard("CRISPR is a man-made molecule that can be used to alter DNA.", "CRISPR");
console.log(card2.text);
console.log(card2.cloze);
console.log(card2.partial);