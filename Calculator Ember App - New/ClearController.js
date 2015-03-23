// Clear Controller
App.ClearController = Ember.Controller.extend({
    screenElement: "",
    click: function(event) {
            var controller = App.__container__.lookup("controller:calculator");;
            this.screenElement = document.getElementsByClassName('screen')[0];
            controller.send('clear', event, this.screenElement);
        }
    });

