import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react'
import {mount} from 'react-mounter'

import MainLayout from '../../ui/components/MainLayout.jsx'
import NewOrder from '../../ui/components/NewOrder.jsx'
import OrderList from '../../ui/components/OrderList.jsx'
import Login from '../../ui/components/Login.jsx'
import Signup from '../../ui/components/Signup.jsx'

FlowRouter.route('/', {
  name: 'homepage',
  action() {
    if (!Meteor.user()) {
      mount(MainLayout, {})
      FlowRouter.go("/login");
    } else {
      mount(MainLayout, {});
    }
  }
});

FlowRouter
.route('/neworder', {
name: 'new order',
action() {
  mount(NewOrder, {})
}
});

FlowRouter
.route('/orderlist', {
name: 'order list',
action() {
  mount(OrderList, {})
}
});
FlowRouter
.route('/login', {
action() {
  mount(Login, {});
}
});
FlowRouter
.route('/signup', {
action() {
  mount(Signup, {});
}
});