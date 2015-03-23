// Display Model defining the properties for the display device
App.DisplayModel = Ember.Object.create({
    data: {
        displayJSON: {
            "Name": "LCD Display",
            "ID": "displayElement",
            "Size": this.size,
            "Class": this.class,
            "Type": this.type,
            "MaterialsUsed": this.materialsUsed
    }
    }
});