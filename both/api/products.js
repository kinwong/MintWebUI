// Lists.schema = new SimpleSchema({
//     name: { type: String },
//     incompleteCount: { type: Number, defaultValue: 0 },
//     userId: { type: String, regEx: SimpleSchema.RegEx.Id, optional: true }
// });

import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Products = new Mongo.Collection('products');
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

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish('tasks', function tasksPublication() {
        return Products.find({
            $or: [
                { private: { $ne: true } },
                { owner: this.userId },
            ],
        });
    });
}

Meteor.methods({
    'products.insert' (text) {
        check(text, String);
        // Make sure the user is logged in before inserting a task
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }
        Products.insert({
            text,
            createdAt: new Date(),
            owner: this.userId,
            username: Meteor.users.findOne(this.userId).username,
        });
    },
    'products.remove' (taskId) {
        check(taskId, String);

        const task = Products.findOne(taskId);
        if (task.private && task.owner !== this.userId) {
            // If the task is private, make sure only the owner can delete it
            throw new Meteor.Error('not-authorized');
        }

        Products.remove(taskId);
    },
    'tasks.setChecked' (taskId, setChecked) {
        check(taskId, String);
        check(setChecked, Boolean);

        const task = Products.findOne(taskId);
        if (task.private && task.owner !== this.userId) {
            // If the task is private, make sure only the owner can check it off
            throw new Meteor.Error('not-authorized');
        }
        Products.update(taskId, { $set: { checked: setChecked } });
    },
    'tasks.setPrivate' (taskId, setToPrivate) {
        check(taskId, String);
        check(setToPrivate, Boolean);

        const task = Products.findOne(taskId);

        // Make sure only the task owner can make a task private
        if (task.owner !== this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        Products.update(taskId, { $set: { private: setToPrivate } });
    },
});