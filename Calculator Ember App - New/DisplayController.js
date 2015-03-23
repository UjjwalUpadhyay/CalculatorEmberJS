//Display Controller
App.DisplayController = Ember.Controller.extend({
	screenElement: "",
    //Set the screen's display value
    display: function (outputValue, screenElement)
	{
		screenElement.value = outputValue;
	}
}
);