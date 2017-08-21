import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Orders } from '../../api/Orders.js'
import OrderList from './OrderList.jsx'

export default OrderListContainer = createContainer(() => {
    const subscription = Meteor.subscribe('orders');
    const ordersdocs = Orders.find().fetch();
    return { ordersdocs };
}, OrderList);