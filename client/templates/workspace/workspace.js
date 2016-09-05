import { Mongo } from "meteor/mongo";

Template.workspace.helpers({
  products: () => {
    return Designer.Products.find({});
  }
});