// Model for button
App.buttonsModel = DS.Model.extend (
    {
        size: DS.attr('string'),
        class: DS.attr('string'),
        materialsUsed: DS.attr('string'),
        type: DS.attr('string')
    }
);