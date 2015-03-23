// Model for buttons
App.OperatorButtonModel = Ember.Object.create({
	data : {
		buttons : [ {   
        id: 1,
        name: "Plus",
        value: "+",
        size: "30",
        class: "button operator",
        type: "button",
        materialsUSed: "plastic"
    },
    {
        id: 2,
        name: "Minus",
        value: "-",
        size: "30",
        class: "button operator",
        type: "button",
        materialsUSed: "plastic"
    },
    {
        id: 3,
        name: "Multiply",
        value: "*",
        size: "30",
        class: "button operator",
        type: "button",
        materialsUSed: "plastic"
    },
    {
        id: 4,
        name: "Divide",
        value: "/",
        size: "30",
        class: "button operator",
        type: "button",
        materialsUSed: "plastic"
    },
    {
        id: 5,
        name: "Modulus",
        value: "%",
        size: "30",
        class: "button operator",
        type: "button",
        materialsUSed: "plastic"
    },
    {
        id: 6,
        name: "Equals",
        value: "=",
        size: "30",
        class: "button operator",
        type: "button",
        materialsUSed: "plastic"
    }
    ]
	}
});