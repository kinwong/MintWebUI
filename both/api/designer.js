// Lists.schema = new SimpleSchema({
//     name: { type: String },
//     incompleteCount: { type: Number, defaultValue: 0 },
//     userId: { type: String, regEx: SimpleSchema.RegEx.Id, optional: true }
// });

import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

Designer = {
  "Products": new Mongo.Collection('products')
}

export class Product {
  static defaultProduct() {
    return {
      "id": "",
      "draftType": "",
      "name": "",
      "createdTimestamp": new Date(),
      "ModifiedTimestamp": new Date(),
      "underlying": "",
      "callPut": "",
      "strike": 0,
      "expiry": new Date(),
      "comment": ""
    };
  }
  constructor() {
    let defaultProduct = defaultProduct();
    for (var k in defaultProduct)
      this[k] = defaultProduct[k];
  }
}