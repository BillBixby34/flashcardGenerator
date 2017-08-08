var BasicCard = require("./BasicCard");
//2. **Cloze-Deleted** flashcards, which present _partial_ text 
//(_"... was the first president of the United States."_),
// and the full text when the user requests it (_"George Washington was the first president of the United States."_)
//This file should define a Node module that exports a constructor 
//for creating cloze-deletion flashcards, e.g.:`module.exports = ClozeCard;`
function ClozeCard(text, cloze){
	this.text = text;//full text
	this.cloze = cloze;//instance of text in this.text
	this.partial();
	}
	ClozeCard.prototype.partial = function(){
		this.partial = (this.text).replace(this.cloze,"______")
}//replaces cloze value with partial;
	//ClozeCard.prototoype.
//`cloze` property that contains _only_ the cloze-deleted portion of the text.

//`partial` property that contains _only_ the partial text.

//`fullText` property that contains _only_ the full text.

//throw or log an error when the cloze deletion does _not_ appear in the input text.
//inquirer validate(function){}
module.exports = ClozeCard;
//Use prototypes to attach these methods, wherever possible.