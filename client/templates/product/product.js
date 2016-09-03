Template.product.onCreated(function() {
    this.autorun(() => {
        //console.log(Template.currentData());
    });
});

Template.product.helpers({
    panelStyle: (product) => {
        switch (product.draftType) {
            case "draft":
                return "panel panel-success";
            case "clone":
                return "panel panel-info";
            default:
                return "panel panel-error";
        }
    },
    labelStyle: (product) => {
        switch (product.draftType) {
            case "draft":
                return "label label-success";
            case "clone":
                return "label label-info";
            default:
                return "label label-error";
        }
    }
});