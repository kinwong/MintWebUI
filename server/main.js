import { Meteor } from "meteor/meteor";
import { Mongo } from 'meteor/mongo';


var products = [{
  "id": "1",
  "draftType": "draft",
  "name": "MB-0005-C60 20171221",
  "createdTimestamp": new Date(),
  "ModifiedTimestamp": new Date(),
  "underlying": "0005",
  "callPut": "Call",
  "strike": 60,
  "expiry": new Date(2017, 12, 21),
  "comment": "Draft created on 2016-12-22"
}, {
  "id": "2",
  "draftType": "clone",
  "name": "MB-0008-C 20171221",
  "createdTimestamp": new Date(),
  "ModifiedTimestamp": new Date(),
  "underlying": "0008",
  "callPut": "Put",
  "strike": 4,
  "expiry": new Date(2017, 12, 21),
  "conversionRatio": 1000,
  "comment": "Clone from BM"
}, ];

Meteor.startup(() => {
  // code to run on server at startup
  console.log("Populating mockup products...")
  Designer.Products.remove({});
  products.forEach(product => Designer.Products.insert(product));

  console.log("Populating static data...")
});