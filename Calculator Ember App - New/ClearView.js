// View for the calculator
App.ClearView = Ember.View.extend({
	init: function() {
	    this._super();
	    this.set("controller", App.ClearController.create());
	},
	templateName : 'clear',
    click : function(e) {
		this.get('controller').send('click', event);
	}
});

