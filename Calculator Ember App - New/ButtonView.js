// View for button
App.ButtonView = Ember.View.extend({
	init: function() {
	    this._super();
	    this.set("controller", App.ButtonController.create());
	},
	templateName : 'button',
	attributeBindings: ['data-actualValue', 'data-type'],
	click : function(e) {
		this.get('controller').send('click');
	}
});

