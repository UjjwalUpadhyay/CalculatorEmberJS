// Model for button
App.ClearModel = DS.Model.extend (
    {
        size: DS.attr('string'),
        class: DS.attr('string'),
        materialsUsed: DS.attr('string'),
        type: DS.attr('string')
    }
);