// Create Ember App
var App = Ember.Application.create();

// Index Controller for the calculator
App.IndexController = Ember.Controller.extend({
    //this.needs = ["button", "display", "numericbuttons"];
	calculationFinished: false,
	currentSymbol: "",
    calculatorID: document.getElementById("calculator"),
	isNumValue1Done: false,
    isNumValue2Done: false,
    numValue1: 0,
    numValue2: 0,
    // useOperator functionality for handling in case of operator input
    useOperator: function (screenElement, inputValue)
    {
    var controller = App.__container__.lookup("controller:display");
    var output = "";
    switch (inputValue)
    {   
        case "+":
        case "-":
        case "*":
        case "/":
        case "%":
            if (this.currentSymbol != "" && this.numValue2 !== 0)
            {
                this.useOperator(screenElement, "=");
            }
            
            this.numValue1 = screenElement.value;
//            buttonsControllerObject = this.numValue1;
            
            if (this.currentSymbol != "" && this.numValue2 === 0)
            {
                output = screenElement.value.substring(0,screenElement.value.length - 1) + inputValue;
                controller.send('display', output, screenElement);
                this.currentSymbol = inputValue;
            }
            else
            {
                this.currentSymbol = inputValue;
                output = screenElement.value + this.currentSymbol;
                controller.send('display', output, screenElement);
            }
            if (this.currentSymbol != "" && this.numValue2 !== 0)
            this.numValue2 = 0;
            this.calculationFinished = false;
            break;
         case "=":
            switch(this.currentSymbol)
            {
			    // Operator is a divide operator
                case "/":
                    if (parseInt(this.numValue2))
                            {
                                displayValue = parseInt(this.divisionOperation(parseInt(this.numValue1) , parseInt(this.numValue2)),0);
                            }
                            break; 
				// Operator is a multiplication operator
                case "*":
                            displayValue = this.multilpicationOperation(parseInt(this.numValue1) , parseInt(this.numValue2));
                            break;
				// Operator is a addition operator
                case "+":
                            displayValue = this.sumOperation(parseInt(this.numValue1) , parseInt(this.numValue2));
                            break;
				// Operator is a subtraction operator
                case "-":
                            displayValue = this.subtractionOperation(parseInt(this.numValue1) , parseInt(this.numValue2));
                            break;
                // Operator is a modulus operator
				case "%":
                            displayValue = this.modulusOperation(parseInt(this.numValue1) , parseInt(this.numValue2));
                            break;
                default: 
                            displayValue =  "";
                            break;
              };
            controller.send('display', displayValue, screenElement);

            this.numValue1 = screenElement.value;
            this.isNumValue1Done = false;
            this.calculationFinished = true;
            this.currentSymbol = '';
            break;
	    case "C":
                  this.clear(event, screenElement);
                  break;
            }  
    },
    // operateNumber functionality for handling in case of number input
	operateNumber: function (screenElement, inputValue)
	{
		//var displayControllerObject = new displayController();
		//var calculatorControllerObject = new calculatorController();
		var controller = App.__container__.lookup("controller:display");
        var output = "";
		if ((this.calculationFinished === true) && (!isNaN(this.currentSymbol))) {
	            this.clear(event, screenElement);
                this.calculationFinished = false;
				this.isNumValue1Done = false;
                controller.send('display', inputValue, screenElement);
            } 
		else if ((this.calculationFinished === true) && (isNaN(this.currentSymbol))) {
                this.isNumValue1Done = true;
                output = this.numValue1 + inputValue;
                this.calculationFinished = false;
                controller.send('display', output, screenElement);
            } 
        else if (this.currentSymbol === '') {
                this.inputDigits(event, screenElement);
            }
        else if (this.currentSymbol != '' && !this.isNumValue1Done) {
                this.isNumValue1Done = true;
                output = screenElement.value  + inputValue;
                this.numValue2 = inputValue;
                controller.send('display', output, screenElement);
            }
        else if (this.currentSymbol != '' && this.isNumValue1Done) {
                this.numValue2 = this.numValue2 + inputValue.toString();
                output = screenElement.value + inputValue.toString();
                controller.send('display', output, screenElement);
            }	

	},
	// Sum Operation
	sumOperation: function (numValue1, numValue2)
    {
     	result = numValue1 + numValue2;
     	return result;
    },
    
    subtractionOperation: function (numValue1, numValue2)
     {
     	result = numValue1 - numValue2;
     	return result;
     },
     
	 // Division operation 
     divisionOperation: function (numValue1, numValue2)
     {
     	result = numValue1 / numValue2;
     	return result;
     },

	 // Multiplication operation 
     multilpicationOperation: function (numValue1, numValue2)
     {
     	result = numValue1 * numValue2;
     	return result;
     },

     // Modulus operation 
	 modulusOperation: function (numValue1, numValue2)
     {
     	result = numValue1 % numValue2;
     	return result;
     },
     
	 // Clear functionality
     clear: function (event, screenElement)
     {
        var controller = App.__container__.lookup("controller:display");
        
        this.numValue1 = 0;
        this.numValue2 = 0;
        this.currentSymbol = "";
        this.isNumValue1Done = false;
        this.isNumValue2Done = false;
        
        controller.send('display', "", screenElement);
    },
 	
	// Appending digits for numValue1 and numValue2
     inputDigits: function (event, screen)
     {
    	var num = 0;
        var controller = App.__container__.lookup("controller:display");
		if (typeof event === "object") {
            num = event.target.value;
        } else {
            num = event;
        }
        if (screen.value == "" && num == "0") {
            return;
        } else if (this.calculationFinished == true) {
            controller.send('display', screen.value, screen);
            this.calculationFinished = false;
        } else {
            controller.send('display', screen.value+num, screen);
        }
     }	

});