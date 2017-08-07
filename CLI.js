var inquirer = require("inquirer");
var BasicCard = require("./BasicCard");

var createCard = function() {
  
    inquirer.prompt([
      {
        name: "cardType",
        message: "Do you want a basic or cloze card? Please type 'basic' or 'cloze'",
      }
      ]).then(function(answers) {
      	if (answers.cardType === 'basic'){

      		var basic1 = new BasicCard("What is the twisted ladder shape of a DNA molecule called?", "A double helix");
			var basic2 = new BasicCard("What is a man-made molecule that can be used to alter DNA?", "CRISPR");
			basic1.showFront();
      	}
      	});
  };
  createCard();