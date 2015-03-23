// View for operatorButtons
App.OperatorButtonView = Ember.View.extend({
	init: function() {
	    this._super();
	    this.set("controller", App.OperatorButtonController.create());
	},
	templateName : 'operator-button',
	attributeBindings: ['data-actualValue', 'data-type'],
	click : function(e) {
		var ele = $(e.target);
		this.get('controller').send('click', event);
	}
});


