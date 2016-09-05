// Lists.schema = new SimpleSchema({
//     name: { type: String },
//     incompleteCount: { type: Number, defaultValue: 0 },
//     userId: { type: String, regEx: SimpleSchema.RegEx.Id, optional: true }
// });

import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

StaticData = {
  "Equities": new Mongo.Collection('staticdata_equities'),
  "Indices": new Mongo.Collection('staticdata_indices'),
}