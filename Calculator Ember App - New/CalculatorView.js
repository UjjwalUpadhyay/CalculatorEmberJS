// View for the calculator
App.CalculatorView = Ember.View.extend({
	init: function() {
	    this._super();
	    this.set("controller", App.IndexController.create());
	},
	templateName : 'calculator'
});

