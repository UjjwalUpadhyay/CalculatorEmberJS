// View for numeric buttons
App.NumericButtonView = Ember.View.extend({
	init: function() {
	    this._super();
	    this.set("controller", App.NumericButtonController.create());
	},
	templateName : 'numeric-button',
	attributeBindings: ['data-actualValue', 'data-type'],
	click : function(e) {
		this.get('controller').send('click', event);
	}
});

