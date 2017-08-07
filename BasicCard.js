// **Basic** flashcards, which have a front (_"Who was the first president of the United States?"_),
// and a back (_"George Washington"_).
var BasicCard = function(front, back){
	this.front = front;
	this.back = back;
	this.showFront = function(){
		console.log(this.front);
	}
}

//do you want a Basic Card, or a Cloze Card?

//
var basic1 = new BasicCard("What is the twisted ladder shape of a DNA molecule called?", "A double helix");
var basic2 = new BasicCard("What is a man-made molecule that can be used to alter DNA?", "CRISPR");
//console.log(basic1);
//console.log();
//console.log(basic2);
//1 - a `front` property that contains the text on the front of the card.

//2 - constructed object should have a `back` property

module.exports = BasicCard;