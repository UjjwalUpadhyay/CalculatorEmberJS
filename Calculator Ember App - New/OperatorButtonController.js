//Operator Button Controller
App.OperatorButtonController = Ember.Controller.extend({
    screenElement: "",
    init: function () {
        this._super();
        this.set("model", App.OperatorButtonModel);
    },
    //	currentValue : {},
    actions: {
        // Call useOperator function on click of any operator button
        click: function (event) {
            //alert (2);
            var inputValue;
            var controller = App.__container__.lookup("controller:index");;
            if (typeof event === "object") {
                inputValue = event.target.value;
                this.screenElement = document.getElementsByClassName('screen')[0];
            } else {
                inputValue = event;
            }

            if (isNaN(inputValue)) {
                controller.send('useOperator', this.screenElement, inputValue);
            }
        }
    }
});
