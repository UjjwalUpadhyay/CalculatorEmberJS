//Numeric Buttons Controller
App.NumericButtonController = Ember.Controller.extend({
    screenElement: "",
    init: function () {
        this._super();
        this.set("model", App.NumericButtonModel);
    },
    //	currentValue : {},
    actions: {
        //On Click set the screenElement 
        click: function (event) {
            //alert (2);
            var inputValue;
            var controller = App.__container__.lookup("controller:index");
            if (typeof event === "object") {
                inputValue = event.target.value;
                this.screenElement = document.getElementsByClassName('screen')[0];
            } else {
                inputValue = event;
            }
        //Call operateNumber functionality if it is a number else call useOperator functionality
            if (!isNaN(inputValue)) {
                controller.send('operateNumber', this.screenElement, inputValue);
            } else {
                controller.send('useOperator', this.screenElement, inputValue);
            }
        }
    }
});