import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Orders = new Mongo.Collection("orders");

var Schemas = {};

Schemas.Orders = new SimpleSchema({
    createdAt: {
        type: Date,
        label: "Date"
    },
    id_order: {
        type: String,
        label: "Title",
        max: 200
    },
    email: {
        type: String,
        label: "Email",
        max: 200
    },
    customer: {
        type: String,
        label: "Customer"
    },
    first_name: {
        type: String,
        label: "First Name"
    },
    second_name: {
        type: String,
        label: "Second Name"
    },
    phone_number: {
        optional: true,
        type: Number,
        label: "Phone Number"
    },
    order_type: {
        type: String,
        label: "Order Type"
    },
    product: {
        type: String,
        label: "Product"
    },
    provider: {
        type: String,
        label: "Provider"
    },
    comment: {
        optional: true,
        type: String,
        label: "Comment"
    },
    date_order_execution: {
        optional: true,
        type: Date,
        label: "Date of order execution"
    }
});

Orders.attachSchema(Schemas.Orders);

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('orders', function tasksPublication() {
        return Orders.find();
    });
}
Orders.allow({
    insert() {
        return true;
    },
    update() {
        return true;
    },
    remove() {
        return true;
    },
});