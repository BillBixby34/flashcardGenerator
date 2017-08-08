// **Basic** flashcards, which have a front (_"Who was the first president of the United States?"_),
// and a back (_"George Washington"_).
var BasicCard = function(front, back){
	this.front = front;
	this.back = back;
	this.fullText = false;//will turn true when answer asked;
	this.isAnswer = function(){
		if (this.fullText){}
	}
	//this.showFront = function(){
		//console.log(this.front);
	//}
	//this.showBack = function(){
		//console.log(this.back)
	//}
}
// creates the printInfo method and applies it to all BasicCard objects
BasicCard.prototype.printInfo = function() {
  console.log("Front: " + this.front+ "\nBack: " + this.back);
};
// Create a new cards object to contain our new BasicCard :)
var cards = {};
//creates a new BasicCard object with the name basic
cards.basic = new BasicCard();
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